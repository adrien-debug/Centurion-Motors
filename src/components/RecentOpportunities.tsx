import { AlertCircle } from 'lucide-react'

export default function RecentOpportunities() {
  const opportunities = [
    { model: 'Porsche 911 Carrera S', price: 118000, discount: -8.2 },
    { model: 'Ferrari 488 GTB', price: 245000, discount: -12.5 },
    { model: 'Lamborghini Huracán', price: 198000, discount: -6.8 },
  ]

  return (
    <div className="card">
      <h2 className="section-title">Opportunités Récentes</h2>
      <div className="space-y-2.5">
        {opportunities.map((opp, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-gradient-to-r from-silver-500/10 to-silver-600/5 rounded-lg border border-silver-500/30 hover:border-silver-500/50 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 bg-silver-500/20 rounded border border-silver-500/30">
                <AlertCircle className="text-silver-400" size={16} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{opp.model}</p>
                <p className="text-xs text-gray-400">€{opp.price.toLocaleString()}</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-gradient-to-r from-silver-500 to-silver-600 text-black rounded-full text-xs font-bold">
              {opp.discount}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

