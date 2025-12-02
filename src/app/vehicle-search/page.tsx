'use client'

import { useState } from 'react'
import { Search, Car, TrendingUp, DollarSign } from 'lucide-react'

export default function VehicleSearch() {
  const [reference, setReference] = useState('')
  const [results, setResults] = useState<any>(null)

  const handleSearch = () => {
    // Simulation de recherche
    setResults({
      model: 'Porsche 911 Carrera S',
      year: 2021,
      estimatedPrice: 125000,
      averagePrice: 128500,
      resalePrice: 118000,
      options: [
        { name: 'Pack Sport', value: 5000 },
        { name: 'Cuir Premium', value: 3500 },
        { name: 'Jantes 20"', value: 2800 },
      ]
    })
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Recherche Véhicule</h1>
      <p className="page-subtitle">
        Recherchez une référence de véhicule pour obtenir son estimation de prix
      </p>

      {/* Search Form */}
      <div className="card mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Entrez la référence du véhicule (ex: POR-911-2021-S)"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <button onClick={handleSearch} className="btn-primary">
            Rechercher
          </button>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Price Estimates */}
          <div className="card">
            <h2 className="section-title">Estimation de Prix</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <DollarSign className="text-blue-600" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Prix Estimé</p>
                    <p className="text-2xl font-bold text-gray-900">
                      €{results.estimatedPrice.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-green-600" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Prix Moyen Marché</p>
                    <p className="text-2xl font-bold text-gray-900">
                      €{results.averagePrice.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Car className="text-orange-600" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Prix de Revente</p>
                    <p className="text-2xl font-bold text-gray-900">
                      €{results.resalePrice.toLocaleString()}
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
                <p className="text-sm text-gray-600">Modèle</p>
                <p className="text-lg font-semibold">{results.model}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Année</p>
                <p className="text-lg font-semibold">{results.year}</p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="card">
            <h2 className="section-title">Options Incluses</h2>
            <div className="space-y-3">
              {results.options.map((option: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{option.name}</span>
                  <span className="text-primary-600 font-semibold">
                    +€{option.value.toLocaleString()}
                  </span>
                </div>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Total Options</span>
                  <span className="text-primary-600 font-bold text-lg">
                    +€{results.options.reduce((sum: number, opt: any) => sum + opt.value, 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

