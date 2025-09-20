import { NextResponse } from 'next/server'

export function middleware(request) {
  const host = request.headers.get("host");

  const primaryDomain = "wininternetperu.com";
  const secondaryDomain = "winplangamer.com";

  // Handle secondary domain redirect
  if (host === secondaryDomain) {
    const url = request.nextUrl.clone();

    if (url.pathname === "/") {
      // Redirect root to /gamer on primary domain
      return NextResponse.redirect(`https://${primaryDomain}/gamer`, 301);
    } else {
      // Redirect same path to primary domain
      return NextResponse.redirect(`https://${primaryDomain}${url.pathname}${url.search}`, 301);
    }
  }

  // Otherwise, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
