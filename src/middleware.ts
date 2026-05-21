import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const COUNTRY_LOCALE_MAP: Record<string, string> = {
  FR: 'fr', BE: 'fr', MC: 'fr', LU: 'fr', CH: 'fr',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es',
  EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es',
  SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es', GQ: 'es',
  IT: 'it', SM: 'it', VA: 'it',
  DE: 'de', AT: 'de',
};

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locales = routing.locales as readonly string[];
  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );

  // If no locale prefix yet, check Vercel geo header and redirect
  if (!hasLocale) {
    const country = (request.headers.get('x-vercel-ip-country') ?? '').toUpperCase();
    const geoLocale = COUNTRY_LOCALE_MAP[country];
    if (geoLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${geoLocale}${pathname === '/' ? '' : pathname}`;
      return NextResponse.redirect(url);
    }
  }

  // Let next-intl handle locale detection / routing for everything else
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
