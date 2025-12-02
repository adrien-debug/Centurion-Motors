'use client'

import { useState, useEffect } from 'react'
import { User, LogOut, Settings, Bell } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const router = useRouter()
  const [user, setUser] = useState({
    name: 'Admin Centurion',
    email: 'admin@centurion-motors.fr',
    role: 'Administrateur'
  })

  useEffect(() => {
    // Récupérer les infos utilisateur depuis localStorage
    const userData = localStorage.getItem('centurion_user')
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
      } catch (e) {
        // Utiliser les valeurs par défaut
      }
    }
  }, [])

  useEffect(() => {
    // Vérifier la session au chargement
    const session = localStorage.getItem('centurion_session')
    setIsLoggedIn(session === 'authenticated')
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('centurion_session')
    document.cookie = 'centurion_session=; path=/; max-age=0'
    setIsLoggedIn(false)
    setShowUserMenu(false)
    router.push('/login')
    router.refresh()
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-base font-semibold text-gray-400">Tableau de bord</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-3 hover:bg-gray-800 rounded-lg transition-colors relative">
              <Bell className="text-gray-400" size={27} />
              <span className="absolute top-1.5 right-1.5 w-3 h-3 bg-silver-400 rounded-full"></span>
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-silver-500/20 to-silver-600/10 rounded-full border border-silver-500/30 flex items-center justify-center">
                  <User className="text-silver-400" size={24} />
                </div>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-semibold text-white">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.role}</p>
                </div>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-900 rounded-lg border border-gray-800 shadow-xl z-50">
                  <div className="p-5 border-b border-gray-800">
                    <p className="text-base font-semibold text-white">{user.name}</p>
                    <p className="text-sm text-gray-400 mt-1">{user.email}</p>
                  </div>
                  <div className="p-3">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors text-left">
                      <Settings className="text-gray-400" size={24} />
                      <span className="text-base text-gray-300">Paramètres</span>
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors text-left mt-1.5"
                    >
                      <LogOut className="text-red-400" size={24} />
                      <span className="text-base text-red-400">Déconnexion</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

