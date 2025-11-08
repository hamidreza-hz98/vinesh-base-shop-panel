import { NextResponse } from "next/server";

export function proxy(req) {
 const url = req.nextUrl.clone();
   const token = req.cookies.get("token"); // or however you store your JWT/session
 
   if (url.pathname === "/") {
     if (token) {
       // admin logged in, go to dashboard
       url.pathname = "/dashboard";
       return NextResponse.redirect(url);
     } else {
       // not logged in, go to login
       url.pathname = "/auth/login";
       return NextResponse.redirect(url);
     }
   }

  if (url.pathname.startsWith("/dashboard")) {
     if (!token) {
       url.pathname = "/auth/login";
       return NextResponse.redirect(url);
     }
   }

  // fallback
  return NextResponse.next();
}

// Define matcher if needed (or use dynamic matching in Next.js 13)
export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
