import { Car, MapPin, TrendingDown } from 'lucide-react'

export default function VehicleCard() {
  return (
    <div className="card hover:border-silver-500/50 transition-all duration-300 cursor-pointer group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-white mb-1 group-hover:text-silver-300 transition-colors">
            Porsche 911 Carrera S
          </h3>
          <p className="text-xs text-gray-400">2021 • 15,000 km</p>
        </div>
        <span className="px-2 py-1 bg-gradient-to-r from-silver-500/20 to-silver-600/10 text-silver-300 border border-silver-500/30 rounded text-xs font-medium uppercase tracking-wider ml-2">
          Bonne affaire
        </span>
      </div>

      <div className="flex items-center space-x-1.5 text-xs text-gray-400 mb-3">
        <MapPin size={12} className="text-silver-400" />
        <span>Cannes, France</span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-800">
        <div>
          <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wider">Prix</p>
          <p className="text-lg font-bold text-white">€118,000</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wider">vs Prix Moyen</p>
          <p className="text-sm font-bold text-silver-400 flex items-center justify-end">
            <TrendingDown size={14} className="mr-1" />
            -8.2%
          </p>
        </div>
      </div>
    </div>
  )
}

