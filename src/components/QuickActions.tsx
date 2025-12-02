import { Zap, Bookmark, Bell, Download } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    { icon: Zap, label: 'Scan Rapide', description: 'Lancer un scan express', color: 'from-silver-500/20 to-silver-600/10' },
    { icon: Bookmark, label: 'Sauvegarder', description: 'Enregistrer une recherche', color: 'from-gray-800 to-gray-900' },
    { icon: Bell, label: 'Alertes', description: 'Configurer des notifications', color: 'from-gray-800 to-gray-900' },
    { icon: Download, label: 'Exporter', description: 'Télécharger les données', color: 'from-gray-800 to-gray-900' },
  ]

  return (
    <div className="card">
      <h2 className="section-title">Actions Rapides</h2>
      <div className="grid grid-cols-2 gap-2.5">
        {actions.map((action, idx) => {
          const Icon = action.icon
          return (
            <button
              key={idx}
              className={`p-3 bg-gradient-to-br ${action.color} rounded-lg border border-gray-700 hover:border-silver-500/50 transition-all duration-300 text-left group`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <div className="p-1.5 bg-silver-500/20 rounded border border-silver-500/30 group-hover:bg-silver-500/30 transition-colors">
                  <Icon className="text-silver-400" size={14} />
                </div>
                <span className="font-semibold text-white text-xs">{action.label}</span>
              </div>
              <p className="text-xs text-gray-400">{action.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

