import { TrendingUp, TrendingDown } from 'lucide-react'

export default function TrendingVehicles() {
  const trending = [
    { model: 'Porsche 911 Turbo S', change: +12.5, price: 245000, direction: 'up' },
    { model: 'Ferrari F8 Tributo', change: +8.3, price: 325000, direction: 'up' },
    { model: 'Lamborghini Huracán EVO', change: -5.2, price: 198000, direction: 'down' },
    { model: 'Aston Martin DB11', change: +3.7, price: 185000, direction: 'up' },
  ]

  return (
    <div className="card">
      <h2 className="section-title">Véhicules en Tendance</h2>
      <div className="space-y-2">
        {trending.map((vehicle, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-silver-500/30 transition-all duration-300">
            <div className="flex-1">
              <p className="font-semibold text-white text-sm mb-0.5">{vehicle.model}</p>
              <p className="text-xs text-gray-400">€{vehicle.price.toLocaleString()}</p>
            </div>
            <div className="flex items-center space-x-2">
              {vehicle.direction === 'up' ? (
                <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-gradient-to-r from-silver-500/20 to-silver-600/10 rounded border border-silver-500/30">
                  <TrendingUp className="text-silver-400" size={14} />
                  <span className="text-silver-400 font-bold text-xs">+{vehicle.change}%</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-gray-800 rounded border border-gray-700">
                  <TrendingDown className="text-gray-400" size={14} />
                  <span className="text-gray-400 font-bold text-xs">{vehicle.change}%</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

