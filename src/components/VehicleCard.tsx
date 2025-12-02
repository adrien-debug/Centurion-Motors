import { Car, MapPin, TrendingDown } from 'lucide-react'

export default function VehicleCard() {
  return (
    <div className="card hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            Porsche 911 Carrera S
          </h3>
          <p className="text-sm text-gray-600">2021 • 15,000 km</p>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
          Bonne affaire
        </span>
      </div>

      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <MapPin size={16} />
        <span>Cannes, France</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <p className="text-sm text-gray-600">Prix</p>
          <p className="text-2xl font-bold text-gray-900">€118,000</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">vs Prix Moyen</p>
          <p className="text-lg font-semibold text-green-600 flex items-center">
            <TrendingDown size={16} className="mr-1" />
            -8.2%
          </p>
        </div>
      </div>
    </div>
  )
}

