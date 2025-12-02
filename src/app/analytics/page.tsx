'use client'

import { BarChart3, TrendingUp, DollarSign } from 'lucide-react'
import PriceChart from '@/components/PriceChart'
import MarketComparison from '@/components/MarketComparison'

export default function Analytics() {
  return (
    <div className="page-container">
      <h1 className="page-title">Analytics & Statistiques</h1>
      <p className="page-subtitle">
        Analysez les tendances du marché et les prix moyens
      </p>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Prix Moyen Global</p>
              <p className="text-2xl font-bold">€142,500</p>
              <p className="text-sm text-green-600">+5.2% ce mois</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <BarChart3 className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Véhicules Analysés</p>
              <p className="text-2xl font-bold">3,247</p>
              <p className="text-sm text-gray-500">Sur 30 jours</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <DollarSign className="text-orange-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Meilleure Opportunité</p>
              <p className="text-2xl font-bold">-12.5%</p>
              <p className="text-sm text-gray-500">vs prix moyen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PriceChart />
        <MarketComparison />
      </div>
    </div>
  )
}

