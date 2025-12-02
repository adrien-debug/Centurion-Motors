'use client'

import { useState } from 'react'
import { X, Sliders } from 'lucide-react'

export default function AdvancedFilters({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
    maxKm: '',
    location: '',
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Sliders className="text-silver-400" size={20} />
            <h2 className="section-title mb-0">Filtres Avancés</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="text-gray-400" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
              Marque
            </label>
            <select
              value={filters.brand}
              onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
              className="input-field"
            >
              <option value="">Toutes les marques</option>
              <option value="porsche">Porsche</option>
              <option value="ferrari">Ferrari</option>
              <option value="lamborghini">Lamborghini</option>
              <option value="aston-martin">Aston Martin</option>
              <option value="mclaren">McLaren</option>
              <option value="bentley">Bentley</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
              Localisation
            </label>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="input-field"
            >
              <option value="">Toutes les régions</option>
              <option value="france">France</option>
              <option value="allemagne">Allemagne</option>
              <option value="italie">Italie</option>
              <option value="suisse">Suisse</option>
              <option value="belgique">Belgique</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
              Prix Minimum (€)
            </label>
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              placeholder="50000"
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
              Prix Maximum (€)
            </label>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              placeholder="500000"
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
              Année Minimum
            </label>
            <input
              type="number"
              value={filters.minYear}
              onChange={(e) => setFilters({ ...filters, minYear: e.target.value })}
              placeholder="2018"
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
              Année Maximum
            </label>
            <input
              type="number"
              value={filters.maxYear}
              onChange={(e) => setFilters({ ...filters, maxYear: e.target.value })}
              placeholder="2024"
              className="input-field"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
              Kilométrage Maximum
            </label>
            <input
              type="number"
              value={filters.maxKm}
              onChange={(e) => setFilters({ ...filters, maxKm: e.target.value })}
              placeholder="50000"
              className="input-field"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 mt-6 pt-4 border-t border-gray-800">
          <button onClick={onClose} className="btn-secondary">
            Annuler
          </button>
          <button className="btn-primary">
            Appliquer les Filtres
          </button>
        </div>
      </div>
    </div>
  )
}

