// src/fixtures/auth.fixture.ts
import { test as base, Page } from '@playwright/test';
import { getAuthToken } from '../../libs/api/auth-helper';

interface AuthCredentials {
  username: string;
  password: string;
  isLdapAuth?: boolean;
}

export const test = base.extend<{
  auth: {
    login: (credentials?: AuthCredentials) => Promise<{
      accessToken: string;
      page: Page;
    }>;
  };
}>({
  auth: async ({ page, request }, use) => {
    const auth = {
      login: async (credentials?: AuthCredentials) => {
        const { accessToken } = await getAuthToken(request, {
          username: credentials?.username || 'admin',
          password: credentials?.password || 'pa$$w0rd!',
          isLdapAuth: credentials?.isLdapAuth || false,
        });

        await page.addInitScript((token) => {
          localStorage.setItem('accessToken', token);
        }, accessToken);

        return { accessToken, page };
      },
    };
    await use(auth);
  },
});
