import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware request", request);

  //   if (request.nextUrl.pathname != "/login") { // to check user login or not or we can perform many more operation
  return NextResponse.redirect(new URL("/login", request.url));
  // }
}

// MARK Create config to set redirect url for particular pages

export const config = {
  matcher: ["/study/:path*", "/about/:path*"],
};
