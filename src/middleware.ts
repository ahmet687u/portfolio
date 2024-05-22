import { DEFAULT_LOCALES, LOCALES } from "./constants";
import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest): NextResponse<unknown> | undefined {
  const pathname: string = request.nextUrl.pathname
  const isValidPathname: boolean = LOCALES.some(locale => pathname.startsWith(`/${locale}/`) || pathname.startsWith(`/${locale}`))

  if (isValidPathname) return
  
  request.nextUrl.pathname = `/${DEFAULT_LOCALES}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/'
  ],
}
