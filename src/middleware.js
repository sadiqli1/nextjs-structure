import { NextResponse } from "next/server";

let locales = ["en", "ru", "az"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  // Get the `Accept-Language` header from the request
  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage) {
    // Split the languages by comma and take the first one
    const preferredLanguages = acceptLanguage.split(",").map((lang) => {
      return lang.split(";")[0]; // Remove the quality value (e.g., "en-US;q=0.9")
    });

    // Find the first preferred language that matches one of our supported locales
    for (const preferredLanguage of preferredLanguages) {
      if (locales.includes(preferredLanguage)) {
        return preferredLanguage;
      }
    }
  }

  // Fallback to a default locale if no match is found
  return "en";
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
