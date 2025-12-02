'use client'

import { useState } from 'react'
import { LogIn, Lock, Mail } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const LOGIN_CREDENTIALS = [
  { email: 'admin@centurion-motors.fr', password: 'Centurion2024!', role: 'Administrateur', name: 'Admin Centurion' },
  { email: 'manager@centurion-motors.fr', password: 'Manager2024!', role: 'Manager', name: 'Manager Centurion' },
  { email: 'user@centurion-motors.fr', password: 'User2024!', role: 'Utilisateur', name: 'Utilisateur Centurion' },
]

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Vérifier les identifiants
    const user = LOGIN_CREDENTIALS.find(
      cred => cred.email === email && cred.password === password
    )

    setTimeout(() => {
      setIsLoading(false)
      
      if (user) {
        // Stocker la session avec les infos utilisateur
        document.cookie = 'centurion_session=authenticated; path=/; max-age=86400'
        localStorage.setItem('centurion_session', 'authenticated')
        localStorage.setItem('centurion_user', JSON.stringify({
          name: user.name,
          email: user.email,
          role: user.role
        }))
        router.push('/')
        router.refresh()
      } else {
        alert('Identifiants incorrects')
      }
    }, 1000)
  }

  const fillCredentials = (cred: typeof LOGIN_CREDENTIALS[0]) => {
    setEmail(cred.email)
    setPassword(cred.password)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 relative mb-4">
              <Image
                src="/LOGO CENTURION MOTORS_FOND BLANC_VDEF.png"
                alt="Centurion Motors"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">CENTURION MOTORS</h1>
            <p className="text-sm text-gray-400">Connexion à votre espace</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@centurion-motors.fr"
                  required
                  className="input-field pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="input-field pl-10"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <LogIn size={18} />
              <span>{isLoading ? 'Connexion...' : 'Se connecter'}</span>
            </button>
          </form>

          {/* Quick Login Buttons */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider text-center">Accès rapide</p>
            <div className="space-y-2">
              {LOGIN_CREDENTIALS.map((cred, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => fillCredentials(cred)}
                  className="w-full p-2.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-silver-500/30 rounded-lg transition-all duration-300 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">{cred.name}</p>
                      <p className="text-xs text-gray-400">{cred.email}</p>
                    </div>
                    <span className="px-2 py-0.5 bg-silver-500/20 text-silver-300 border border-silver-500/30 rounded text-xs font-medium">
                      {cred.role}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">Cannes, France</p>
          </div>
        </div>
      </div>
    </div>
  )
}

