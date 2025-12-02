'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, TrendingUp, Calculator, BarChart3 } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/market-scanner', label: 'Scanner Marché', icon: Search },
    { href: '/vehicle-search', label: 'Recherche Véhicule', icon: TrendingUp },
    { href: '/price-calculator', label: 'Calculateur Prix', icon: Calculator },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
  ]

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 relative">
              <Image
                src="/LOGO CENTURION MOTORS_FOND BLANC_VDEF.png"
                alt="Centurion Motors"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Centurion Motors</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

