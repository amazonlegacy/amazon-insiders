import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const COUNTRY_LOCALE_MAP: Record<string, string> = {
  FR: 'fr', BE: 'fr', MC: 'fr', LU: 'fr', CH: 'fr',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es',
  EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es',
  SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es', GQ: 'es',
  IT: 'it', SM: 'it', VA: 'it',
  DE: 'de', AT: 'de',
};

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') ?? '';
  const geoLocale = COUNTRY_LOCALE_MAP[country.toUpperCase()];

  if (geoLocale) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;
    const locales = routing.locales as readonly string[];
    const hasLocale = locales.some(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    );

    if (!hasLocale) {
      // Rewrite the request with the geo-detected locale prefix
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/${geoLocale}${pathname === '/' ? '' : pathname}`;
      // Create a new request with the locale in the path for next-intl to pick up
      const newRequest = new NextRequest(newUrl, request);
      return handleI18nRouting(newRequest);
    }
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
