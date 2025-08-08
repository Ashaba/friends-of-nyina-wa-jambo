import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'fr', 'rw'] as const;

export default getRequestConfig(async ({locale}) => {
  // Let middleware handle invalid locales instead of calling notFound()
  const validLocale = locales.includes(locale as any) ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default
  };
});