'use client'

import { useState } from 'react'
import { Search, Filter, RefreshCw, Download, Bookmark, SortAsc } from 'lucide-react'
import VehicleCard from '@/components/VehicleCard'
import AdvancedFilters from '@/components/AdvancedFilters'

export default function MarketScanner() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('relevance')

  const handleScan = () => {
    setIsScanning(true)
    // Simulation du scan
    setTimeout(() => setIsScanning(false), 2000)
  }

  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">Scanner de Marché</h1>
          <p className="page-subtitle">
            Scannez les sites européens pour trouver les meilleures opportunités en temps réel
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary flex items-center space-x-1.5">
            <Download size={16} />
            <span>Exporter</span>
          </button>
          <button className="btn-secondary flex items-center space-x-1.5">
            <Bookmark size={16} />
            <span>Sauvegarder</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card mb-6">
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-silver-400" size={18} />
            <input
              type="text"
              placeholder="Rechercher par marque, modèle, référence..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <button 
            onClick={() => setShowFilters(true)}
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <Filter size={18} />
            <span>Filtres</span>
          </button>
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="btn-secondary flex items-center justify-center space-x-1.5 disabled:opacity-50"
          >
            <RefreshCw className={isScanning ? 'animate-spin' : ''} size={18} />
            <span>{isScanning ? 'Scan en cours...' : 'Lancer le Scan'}</span>
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1.5 bg-gradient-to-r from-silver-500 to-silver-600 text-black rounded-full text-xs font-semibold">
            Tous les sites
          </span>
          <span className="px-3 py-1.5 bg-gray-800 text-silver-300 border border-gray-700 rounded-full text-xs font-medium hover:border-silver-500 transition-colors cursor-pointer">
            AutoScout24
          </span>
          <span className="px-4 py-2 bg-gray-800 text-silver-300 border border-gray-700 rounded-full text-sm font-medium hover:border-silver-500 transition-colors cursor-pointer">
            Mobile.de
          </span>
          <span className="px-4 py-2 bg-gray-800 text-silver-300 border border-gray-700 rounded-full text-sm font-medium hover:border-silver-500 transition-colors cursor-pointer">
            LeBonCoin Pro
          </span>
          <span className="px-4 py-2 bg-gray-800 text-silver-300 border border-gray-700 rounded-full text-sm font-medium hover:border-silver-500 transition-colors cursor-pointer">
            Autotrader
          </span>
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-3 pt-3 border-t border-gray-800">
          <div className="flex items-center space-x-1.5">
            <SortAsc className="text-gray-400" size={16} />
            <span className="text-xs text-gray-400">Trier par:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-white text-xs focus:ring-2 focus:ring-silver-500 focus:border-silver-500"
          >
            <option value="relevance">Pertinence</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="discount">Meilleure affaire</option>
            <option value="recent">Plus récent</option>
          </select>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <div className="card">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Total Trouvé</p>
          <p className="text-2xl font-bold text-white">247</p>
          <p className="text-xs text-gray-500 mt-0.5">véhicules</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Opportunités</p>
          <p className="text-2xl font-bold text-silver-400">12</p>
          <p className="text-xs text-gray-500 mt-0.5">bonnes affaires</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Prix Moyen</p>
          <p className="text-2xl font-bold text-white">€142K</p>
          <p className="text-xs text-gray-500 mt-0.5">sur ce scan</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Économie Max</p>
          <p className="text-2xl font-bold text-silver-400">-18%</p>
          <p className="text-xs text-gray-500 mt-0.5">vs marché</p>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title mb-0">Résultats du Scan</h2>
          <p className="text-sm text-gray-400">247 véhicules trouvés</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <VehicleCard key={i} />
          ))}
        </div>
      </div>

      <AdvancedFilters isOpen={showFilters} onClose={() => setShowFilters(false)} />
    </div>
  )
}

