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
      <div className="space-y-4">
        {opportunities.map((opp, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3">
              <AlertCircle className="text-green-600" size={20} />
              <div>
                <p className="font-semibold text-gray-900">{opp.model}</p>
                <p className="text-sm text-gray-600">€{opp.price.toLocaleString()}</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium">
              {opp.discount}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

