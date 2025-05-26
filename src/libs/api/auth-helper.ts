import { APIRequestContext } from '@playwright/test';

interface AuthCredentials {
  username: string;
  password: string;
  isLdapAuth?: boolean;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export async function getAuthToken(
  request: APIRequestContext,
  credentials: AuthCredentials,
): Promise<AuthResponse> {
  const mutation = `
    mutation SignIn($input: SignInInput!) {
      authentication {
        signIn(data: $input) {
          refreshToken
          accessTokenExpTimestamp
        }
      }
    }
  `;

  const variables = {
    input: {
      user_name: credentials.username,
      password: credentials.password,
      isLdapAuth: credentials.isLdapAuth || false,
    },
  };

  const response = await request.post('/graphql', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      query: mutation,
      variables,
    },
  });

  if (!response.ok()) {
    throw new Error(`Auth failed: ${response.status()} ${await response.text()}`);
  }

  const { data, errors } = await response.json();

  if (errors) {
    throw new Error(`GraphQL error: ${JSON.stringify(errors)}`);
  }

  return {
    accessToken: data.authentication.signIn.refreshToken,
    refreshToken: data.authentication.signIn.refreshToken,
    expiresAt: data.authentication.signIn.accessTokenExpTimestamp,
  };
}
