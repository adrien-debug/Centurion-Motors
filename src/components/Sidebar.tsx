'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, TrendingUp, Calculator, BarChart3 } from 'lucide-react'
import Image from 'next/image'

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/market-scanner', label: 'Scanner Marché', icon: Search },
    { href: '/vehicle-search', label: 'Recherche Véhicule', icon: TrendingUp },
    { href: '/price-calculator', label: 'Calculateur Prix', icon: Calculator },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-gray-800 flex flex-col z-50">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-center">
          <div className="w-40 h-40 relative">
            <Image
              src="/LOGO CENTURION MOTORS_FOND BLANC_VDEF.png"
              alt="Centurion Motors"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-item ${isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'}`}
              >
                <Icon size={18} />
                <span className="text-sm">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <p className="text-xs text-gray-600 text-center">© 2024 Centurion Motors</p>
        <p className="text-xs text-gray-600 text-center mt-0.5">Cannes, France</p>
      </div>
    </aside>
  )
}

