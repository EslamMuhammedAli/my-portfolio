import { createStart } from '@tanstack/react-start';

export const startInstance = createStart(() => ({
  requestMiddleware: [
    async ({ request, next }) => {
      const countryCode = request.headers.get('x-vercel-ip-country') || 'EG';
      const language = getLanguageFromCountry(countryCode);
      
      // خزّن اللغة في cookie
      const response = await next();
      response.headers.append(
        'Set-Cookie',
        `detected-lang=${language}; Path=/; Max-Age=31536000; SameSite=Lax`
      );
      return response;
    },
  ],
}));