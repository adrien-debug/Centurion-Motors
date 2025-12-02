'use client'

import { useState } from 'react'
import { Search, Car, TrendingUp, DollarSign, History, Bookmark, Share2 } from 'lucide-react'
import PriceHistory from '@/components/PriceHistory'
import SimilarVehicles from '@/components/SimilarVehicles'
import { formatCurrency, formatNumber } from '@/utils/format'

export default function VehicleSearch() {
  const [reference, setReference] = useState('')
  const [results, setResults] = useState<any>(null)
  const [recentSearches] = useState([
    'POR-911-2021-S',
    'FER-488-2020-GTB',
    'LAM-HUR-2022-EVO',
  ])

  const handleSearch = () => {
    // Simulation de recherche
    setResults({
      model: 'Porsche 911 Carrera S',
      year: 2021,
      estimatedPrice: 125000,
      averagePrice: 128500,
      resalePrice: 118000,
      mileage: 15000,
      location: 'Cannes, France',
      options: [
        { name: 'Pack Sport', value: 5000 },
        { name: 'Cuir Premium', value: 3500 },
        { name: 'Jantes 20"', value: 2800 },
      ]
    })
  }

  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">Recherche Véhicule</h1>
          <p className="page-subtitle">
            Recherchez une référence de véhicule pour obtenir son estimation de prix détaillée
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary flex items-center space-x-1.5">
            <History size={16} />
            <span>Historique</span>
          </button>
        </div>
      </div>

      {/* Search Form */}
      <div className="card mb-6">
        <div className="flex gap-3 mb-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-silver-400" size={18} />
            <input
              type="text"
              placeholder="Entrez la référence du véhicule (ex: POR-911-2021-S)"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="input-field pl-10"
            />
          </div>
          <button onClick={handleSearch} className="btn-primary">
            Rechercher
          </button>
        </div>

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="pt-3 border-t border-gray-800">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Recherches récentes</p>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setReference(search)
                    handleSearch()
                  }}
                  className="px-3 py-1.5 bg-gray-800 text-silver-300 border border-gray-700 rounded-lg text-xs font-medium hover:border-silver-500 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {results && (
        <>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{results.model}</h2>
              <p className="text-sm text-gray-400">{results.year} • {formatNumber(results.mileage)} km • {results.location}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="btn-secondary flex items-center space-x-1.5">
                <Bookmark size={16} />
                <span>Sauvegarder</span>
              </button>
              <button className="btn-secondary flex items-center space-x-1.5">
                <Share2 size={16} />
                <span>Partager</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Price Estimates */}
          <div className="card">
            <h2 className="section-title">Estimation de Prix</h2>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-silver-500/20 to-silver-600/10 rounded-lg border border-silver-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-silver-500/20 rounded border border-silver-500/30">
                    <DollarSign className="text-silver-400" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Prix Estimé</p>
                    <p className="text-xl font-bold text-white">
                      {formatCurrency(results.estimatedPrice)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-silver-500/20 to-silver-600/10 rounded-lg border border-silver-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-silver-500/20 rounded border border-silver-500/30">
                    <TrendingUp className="text-silver-400" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Prix Moyen Marché</p>
                    <p className="text-xl font-bold text-white">
                      {formatCurrency(results.averagePrice)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-silver-500/20 to-silver-600/10 rounded-lg border border-silver-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-silver-500/20 rounded border border-silver-500/30">
                    <Car className="text-silver-400" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Prix de Revente</p>
                    <p className="text-xl font-bold text-white">
                      {formatCurrency(results.resalePrice)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="card">
            <h2 className="section-title">Informations Véhicule</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Modèle</p>
                <p className="text-base font-semibold text-white">{results.model}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Année</p>
                <p className="text-base font-semibold text-white">{results.year}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Kilométrage</p>
                <p className="text-base font-semibold text-white">{formatNumber(results.mileage)} km</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Localisation</p>
                <p className="text-base font-semibold text-white">{results.location}</p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="card">
            <h2 className="section-title">Options Incluses</h2>
            <div className="space-y-2">
              {results.options.map((option: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center p-2.5 bg-gray-800/50 rounded-lg border border-gray-700">
                  <span className="font-medium text-sm text-white">{option.name}</span>
                  <span className="text-silver-400 font-bold text-sm">
                    +{formatCurrency(option.value)}
                  </span>
                </div>
              ))}
              <div className="pt-3 border-t border-gray-800">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-base text-white">Total Options</span>
                  <span className="text-silver-400 font-bold text-lg">
                    +{formatCurrency(results.options.reduce((sum: number, opt: any) => sum + opt.value, 0))}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <PriceHistory />
            <SimilarVehicles />
          </div>

          {/* Market Comparison */}
          <div className="card mt-6">
            <h2 className="section-title">Comparaison Marché</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Prix Moyen</p>
                <p className="text-lg font-bold text-white">{formatCurrency(results.averagePrice)}</p>
                <p className="text-xs text-gray-500 mt-0.5">Sur 45 annonces</p>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Écart</p>
                <p className="text-lg font-bold text-silver-400">
                  {((results.estimatedPrice - results.averagePrice) / results.averagePrice * 100).toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500 mt-0.5">vs marché</p>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Prix Min</p>
                <p className="text-lg font-bold text-white">€115,000</p>
                <p className="text-xs text-gray-500 mt-0.5">Trouvé récemment</p>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Prix Max</p>
                <p className="text-lg font-bold text-white">€142,000</p>
                <p className="text-xs text-gray-500 mt-0.5">Trouvé récemment</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

