import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Ne pas protéger la page de login
  if (request.nextUrl.pathname === '/login') {
    return NextResponse.next()
  }

  // Vérifier la session (dans un vrai projet, utiliser des cookies sécurisés)
  const session = request.cookies.get('centurion_session')
  
  // Si pas de session, rediriger vers login
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

