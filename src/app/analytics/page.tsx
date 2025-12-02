'use client'

import { BarChart3, TrendingUp, DollarSign, Download, Calendar, Filter } from 'lucide-react'
import PriceChart from '@/components/PriceChart'
import MarketComparison from '@/components/MarketComparison'
import BrandPerformance from '@/components/BrandPerformance'
import MarketInsights from '@/components/MarketInsights'
import { formatCurrency } from '@/utils/format'

export default function Analytics() {
  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">Analytics & Statistiques</h1>
          <p className="page-subtitle">
            Analysez les tendances du marché, les prix moyens et les opportunités en temps réel
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary flex items-center space-x-1.5">
            <Calendar size={16} />
            <span>Période</span>
          </button>
          <button className="btn-secondary flex items-center space-x-1.5">
            <Filter size={16} />
            <span>Filtres</span>
          </button>
          <button className="btn-secondary flex items-center space-x-1.5">
            <Download size={16} />
            <span>Exporter</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <div className="card hover:border-silver-500/50 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-br from-silver-500/20 to-silver-600/10 rounded-lg border border-silver-500/30">
              <TrendingUp className="text-silver-400" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Prix Moyen Global</p>
              <p className="text-xl font-bold text-white mb-0.5">€142,500</p>
              <p className="text-xs text-silver-400 font-semibold">+5.2% ce mois</p>
            </div>
          </div>
        </div>

        <div className="card hover:border-silver-500/50 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-br from-silver-500/20 to-silver-600/10 rounded-lg border border-silver-500/30">
              <BarChart3 className="text-silver-400" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Véhicules Analysés</p>
              <p className="text-xl font-bold text-white mb-0.5">3,247</p>
              <p className="text-xs text-gray-500">Sur 30 jours</p>
            </div>
          </div>
        </div>

        <div className="card hover:border-silver-500/50 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-br from-silver-500/20 to-silver-600/10 rounded-lg border border-silver-500/30">
              <DollarSign className="text-silver-400" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Meilleure Opportunité</p>
              <p className="text-xl font-bold text-white mb-0.5">-12.5%</p>
              <p className="text-xs text-gray-500">vs prix moyen</p>
            </div>
          </div>
        </div>

        <div className="card hover:border-silver-500/50 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-br from-silver-500/20 to-silver-600/10 rounded-lg border border-silver-500/30">
              <TrendingUp className="text-silver-400" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Taux de Réussite</p>
              <p className="text-xl font-bold text-white mb-0.5">87%</p>
              <p className="text-xs text-gray-500">Négociations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <PriceChart />
        <MarketComparison />
      </div>

      {/* Brand Performance */}
      <div className="mb-6">
        <BrandPerformance />
      </div>

      {/* Insights and Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <MarketInsights />
        
        <div className="card">
          <h2 className="section-title">Top Opportunités</h2>
          <div className="space-y-2">
            {[
              { model: 'Ferrari 488 GTB', discount: -15.8, price: 245000 },
              { model: 'Porsche 911 Turbo', discount: -12.3, price: 198000 },
              { model: 'Lamborghini Huracán', discount: -10.5, price: 185000 },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-silver-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-semibold text-sm text-white">{item.model}</p>
                  <span className="px-2.5 py-1 bg-gradient-to-r from-silver-500 to-silver-600 text-black rounded-full text-xs font-bold">
                    {item.discount}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Prix actuel</span>
                  <span className="text-base font-bold text-white">{formatCurrency(item.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

