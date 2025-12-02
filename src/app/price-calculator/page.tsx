'use client'

import { useState } from 'react'
import { Calculator, Plus, X } from 'lucide-react'

interface Option {
  name: string
  value: string
}

export default function PriceCalculator() {
  const [basePrice, setBasePrice] = useState('')
  const [options, setOptions] = useState<Option[]>([
    { name: '', value: '' }
  ])

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
      <h1 className="page-title">Calculateur de Prix</h1>
      <p className="page-subtitle">
        Calculez le prix total d'un véhicule avec ses options
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="card">
          <h2 className="section-title">Configuration</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
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

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Options
              </label>
              <button
                onClick={addOption}
                className="flex items-center space-x-1 text-primary-600 hover:text-primary-700"
              >
                <Plus size={18} />
                <span className="text-sm font-medium">Ajouter Option</span>
              </button>
            </div>

            <div className="space-y-3">
              {options.map((option, index) => (
                <div key={index} className="flex gap-3">
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
                    className="input-field w-32"
                  />
                  {options.length > 1 && (
                    <button
                      onClick={() => removeOption(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <X size={20} />
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
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Prix de Base</span>
                <span className="text-lg font-semibold">
                  €{(parseFloat(basePrice) || 0).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Total Options</span>
                <span className="text-lg font-semibold text-primary-600">
                  +€{totalOptions.toLocaleString()}
                </span>
              </div>
              {options.map((opt, idx) => {
                if (!opt.name || !opt.value) return null
                return (
                  <div key={idx} className="text-sm text-gray-600 mt-1 pl-4">
                    • {opt.name}: +€{parseFloat(opt.value).toLocaleString()}
                  </div>
                )
              })}
            </div>

            <div className="p-6 bg-primary-600 text-white rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Prix Total</span>
                <div className="flex items-center space-x-2">
                  <Calculator size={24} />
                  <span className="text-3xl font-bold">
                    €{totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

