import {createServerClient, type CookieOptions} from "@supabase/ssr";
import {NextResponse, type NextRequest} from "next/server";

export async function middleware(req: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return req.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        req.cookies.set({
          name,
          value,
          ...options,
        });
        response = NextResponse.next({
          request: {
            headers: req.headers,
          },
        });
        response.cookies.set({
          name,
          value,
          ...options,
        });
      },
      remove(name: string, options: CookieOptions) {
        req.cookies.set({
          name,
          value: "",
          ...options,
        });
        response = NextResponse.next({
          request: {
            headers: req.headers,
          },
        });
        response.cookies.set({
          name,
          value: "",
          ...options,
        });
      },
    },
  });

  const {
    data: {session},
  } = await supabase.auth.getSession();

  // Protect admin routes
  if (req.nextUrl.pathname.startsWith("/admin")) {
    // Allow access to login page
    if (req.nextUrl.pathname === "/admin/login") {
      // If already logged in, redirect to dashboard
      if (session) {
        return NextResponse.redirect(new URL("/admin/products", req.url));
      }
      return response;
    }

    // Check if user is authenticated
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    // Check if user is admin
    const {data: adminData} = await supabase.from("admins").select("id").eq("id", session.user.id).single();

    if (!adminData) {
      // User is authenticated but not admin - redirect to login
      await supabase.auth.signOut();
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
