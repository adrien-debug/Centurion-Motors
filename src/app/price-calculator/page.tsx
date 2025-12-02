'use client'

import { useState } from 'react'
import { Calculator, Plus, X, Save, Download } from 'lucide-react'
import PriceTemplates from '@/components/PriceTemplates'
import CalculationHistory from '@/components/CalculationHistory'
import { formatCurrency } from '@/utils/format'

interface Option {
  name: string
  value: string
}

interface Template {
  name: string
  basePrice: number
  options: { name: string; value: number }[]
}

export default function PriceCalculator() {
  const [basePrice, setBasePrice] = useState('')
  const [vehicleName, setVehicleName] = useState('')
  const [options, setOptions] = useState<Option[]>([
    { name: '', value: '' }
  ])

  const handleSelectTemplate = (template: Template) => {
    setVehicleName(template.name)
    setBasePrice(template.basePrice.toString())
    setOptions(template.options.map(opt => ({ name: opt.name, value: opt.value.toString() })))
  }

  const addOption = () => {
    setOptions([...options, { name: '', value: '' }])
  }

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index))
  }

  const updateOption = (index: number, field: 'name' | 'value', value: string) => {
    const updated = [...options]
    updated[index][field] = value
    setOptions(updated)
  }

  const totalOptions = options.reduce((sum, opt) => {
    return sum + (parseFloat(opt.value) || 0)
  }, 0)

  const totalPrice = (parseFloat(basePrice) || 0) + totalOptions

  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">Calculateur de Prix</h1>
          <p className="page-subtitle">
            Calculez le prix total d'un véhicule avec ses options et comparez avec le marché
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary flex items-center space-x-1.5">
            <Save size={16} />
            <span>Sauvegarder</span>
          </button>
          <button className="btn-secondary flex items-center space-x-1.5">
            <Download size={16} />
            <span>Exporter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Input Form */}
            <div className="card">
              <h2 className="section-title">Configuration</h2>
              
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                  Nom du Véhicule
                </label>
                <input
                  type="text"
                  value={vehicleName}
                  onChange={(e) => setVehicleName(e.target.value)}
                  placeholder="Porsche 911 Carrera S"
                  className="input-field"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                  Prix de Base (€)
                </label>
                <input
                  type="number"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                  placeholder="125000"
                  className="input-field"
                />
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Options
                  </label>
                  <button
                    onClick={addOption}
                    className="flex items-center space-x-1 text-silver-400 hover:text-silver-300 transition-colors"
                  >
                    <Plus size={16} />
                    <span className="text-xs font-medium">Ajouter Option</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {options.map((option, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={option.name}
                        onChange={(e) => updateOption(index, 'name', e.target.value)}
                        placeholder="Nom de l'option"
                        className="input-field flex-1"
                      />
                      <input
                        type="number"
                        value={option.value}
                        onChange={(e) => updateOption(index, 'value', e.target.value)}
                        placeholder="Prix"
                        className="input-field w-28"
                      />
                      {options.length > 1 && (
                        <button
                          onClick={() => removeOption(index)}
                          className="p-1.5 text-red-400 hover:bg-red-900/20 rounded transition-colors"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="card">
              <h2 className="section-title">Résultat du Calcul</h2>
              
              <div className="space-y-3">
                <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 uppercase tracking-wider text-xs">Prix de Base</span>
                    <span className="text-lg font-bold text-white">
                      {formatCurrency(parseFloat(basePrice) || 0)}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-gradient-to-r from-silver-500/20 to-silver-600/10 rounded-lg border border-silver-500/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 uppercase tracking-wider text-xs">Total Options</span>
                    <span className="text-lg font-bold text-silver-400">
                      +{formatCurrency(totalOptions)}
                    </span>
                  </div>
                  {options.map((opt, idx) => {
                    if (!opt.name || !opt.value) return null
                    return (
                      <div key={idx} className="text-xs text-gray-300 mt-1.5 pl-3">
                        • {opt.name}: +{formatCurrency(parseFloat(opt.value))}
                      </div>
                    )
                  })}
                </div>

                <div className="p-4 bg-gradient-to-r from-silver-500 to-silver-600 text-black rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold uppercase tracking-wider">Prix Total</span>
                    <div className="flex items-center space-x-2">
                      <Calculator size={18} />
                      <span className="text-xl font-bold">
                        {formatCurrency(totalPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <PriceTemplates onSelectTemplate={handleSelectTemplate} />
          <CalculationHistory />
        </div>
      </div>

      {/* Market Comparison */}
      {totalPrice > 0 && (
        <div className="card">
          <h2 className="section-title">Comparaison Marché</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Votre Calcul</p>
              <p className="text-lg font-bold text-white">{formatCurrency(totalPrice)}</p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Prix Moyen Marché</p>
              <p className="text-lg font-bold text-silver-400">{formatCurrency(totalPrice * 1.05)}</p>
              <p className="text-xs text-gray-500 mt-0.5">+5% vs votre calcul</p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Économie Potentielle</p>
              <p className="text-lg font-bold text-white">{formatCurrency(totalPrice * 0.05)}</p>
              <p className="text-xs text-gray-500 mt-0.5">Si négociation réussie</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

