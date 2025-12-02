'use client'

import { usePathname } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <>
      <Sidebar />
      <div className="ml-64 min-h-screen bg-black">
        <Header />
        <main className="min-h-[calc(100vh-96px)]">
          {children}
        </main>
      </div>
    </>
  )
}

