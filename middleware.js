import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const locales = ["en", "bn"];
const defaultLocale = "en";

function getLocale(request) {
  const acceptedLanguages = request.headers.get("accept-language");
  let headers = { "accept-language": acceptedLanguages };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
