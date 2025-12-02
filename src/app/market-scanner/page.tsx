'use client'

import { useState } from 'react'
import { Search, Filter, RefreshCw } from 'lucide-react'
import VehicleCard from '@/components/VehicleCard'

export default function MarketScanner() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isScanning, setIsScanning] = useState(false)

  const handleScan = () => {
    setIsScanning(true)
    // Simulation du scan
    setTimeout(() => setIsScanning(false), 2000)
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Scanner de Marché</h1>
      <p className="page-subtitle">
        Scannez les sites européens pour trouver les meilleures opportunités
      </p>

      {/* Search and Filters */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher par marque, modèle, référence..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <button className="btn-primary flex items-center justify-center space-x-2">
            <Filter size={20} />
            <span>Filtres</span>
          </button>
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="btn-secondary flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <RefreshCw className={isScanning ? 'animate-spin' : ''} size={20} />
            <span>{isScanning ? 'Scan en cours...' : 'Lancer le Scan'}</span>
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
            Tous les sites
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            AutoScout24
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            Mobile.de
          </span>
        </div>
      </div>

      {/* Results */}
      <div>
        <h2 className="section-title">Résultats du Scan (247 véhicules trouvés)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <VehicleCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

