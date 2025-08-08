import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'fr', 'rw'] as const;

export const {Link, redirect, usePathname, useRouter} = createNavigation({
  locales
});