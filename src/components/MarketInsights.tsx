import { TrendingUp, TrendingDown, AlertCircle, Target } from 'lucide-react'

export default function MarketInsights() {
  const insights = [
    {
      type: 'opportunity',
      icon: AlertCircle,
      title: 'Marché en hausse',
      description: 'Les prix des supercars augmentent de 5.2% ce mois',
      color: 'text-silver-400',
      bg: 'from-silver-500/20 to-silver-600/10',
      border: 'border-silver-500/30',
    },
    {
      type: 'trend',
      icon: TrendingUp,
      title: 'Porsche 911 en forte demande',
      description: '12 nouvelles annonces cette semaine, prix stable',
      color: 'text-silver-400',
      bg: 'from-gray-800 to-gray-900',
      border: 'border-gray-700',
    },
    {
      type: 'warning',
      icon: TrendingDown,
      title: 'Aston Martin en baisse',
      description: 'Prix moyen en diminution de 2.1%, opportunités à saisir',
      color: 'text-gray-400',
      bg: 'from-gray-800 to-gray-900',
      border: 'border-gray-700',
    },
    {
      type: 'target',
      icon: Target,
      title: 'Objectif mensuel atteint',
      description: '1,247 véhicules analysés sur 2,000 prévus (62%)',
      color: 'text-silver-400',
      bg: 'from-silver-500/20 to-silver-600/10',
      border: 'border-silver-500/30',
    },
  ]

  return (
    <div className="card">
      <h2 className="section-title">Insights Marché</h2>
      <div className="space-y-2.5">
        {insights.map((insight, idx) => {
          const Icon = insight.icon
          return (
            <div
              key={idx}
              className={`p-3 bg-gradient-to-r ${insight.bg} rounded-lg border ${insight.border} hover:border-silver-500/50 transition-all duration-300`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 bg-gray-800 rounded border border-gray-700 ${insight.color}`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-white mb-0.5">{insight.title}</p>
                  <p className="text-xs text-gray-400">{insight.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

