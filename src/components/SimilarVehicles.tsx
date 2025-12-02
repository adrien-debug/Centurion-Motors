import { formatCurrency, formatNumber } from '@/utils/format'

export default function SimilarVehicles() {
  const similar = [
    { model: 'Porsche 911 Carrera S', year: 2020, price: 118000, km: 18000, discount: -5.2 },
    { model: 'Porsche 911 Carrera S', year: 2022, price: 132000, km: 8000, discount: -2.1 },
    { model: 'Porsche 911 Carrera 4S', year: 2021, price: 128000, km: 12000, discount: -3.8 },
  ]

  return (
    <div className="card">
      <h2 className="section-title">Véhicules Similaires</h2>
      <div className="space-y-2">
        {similar.map((vehicle, idx) => (
          <div key={idx} className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-silver-500/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-semibold text-sm text-white">{vehicle.model}</p>
                <p className="text-xs text-gray-400">{vehicle.year} • {formatNumber(vehicle.km)} km</p>
              </div>
              <span className="px-2.5 py-1 bg-silver-500/20 text-silver-300 border border-silver-500/30 rounded text-xs font-semibold">
                {vehicle.discount}%
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-800">
              <span className="text-xs text-gray-400">Prix</span>
              <span className="text-base font-bold text-white">{formatCurrency(vehicle.price)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

