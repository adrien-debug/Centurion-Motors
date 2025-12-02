'use client'

import React, { useState } from 'react'
import { Calculator, Plus, X, Save, Download } from 'lucide-react'
import PriceTemplates from '@/components/PriceTemplates'
import { formatCurrency } from '@/utils/format'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface Option {
  name: string
  value: string
}

interface Template {
  name: string
  basePrice: number
  options: { name: string; value: number }[]
}

interface SavedCalculation {
  id: string
  date: Date
  vehicleName: string
  basePrice: number
  options: { name: string; value: number }[]
  totalPrice: number
}

export default function PriceCalculator() {
  const [basePrice, setBasePrice] = useState('')
  const [vehicleName, setVehicleName] = useState('')
  const [options, setOptions] = useState<Option[]>([
    { name: '', value: '' }
  ])
  const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([])

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

  const handleSaveCalculation = () => {
    if (!vehicleName || !basePrice || totalPrice === 0) {
      return
    }

    const newCalculation: SavedCalculation = {
      id: Date.now().toString(),
      date: new Date(),
      vehicleName,
      basePrice: parseFloat(basePrice) || 0,
      options: options
        .filter(opt => opt.name && opt.value)
        .map(opt => ({ name: opt.name, value: parseFloat(opt.value) || 0 })),
      totalPrice
    }

    setSavedCalculations([newCalculation, ...savedCalculations])
  }

  const totalOptions = options.reduce((sum, opt) => sum + (parseFloat(opt.value) || 0), 0)
  const totalPrice = (parseFloat(basePrice) || 0) + totalOptions

  return (
    <div>
      <div className="page-container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex-1">
            <h1 className="page-title">Calculateur de Prix</h1>
            <p className="page-subtitle">
              Calculez le prix total d'un véhicule avec ses options et comparez avec le marché
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={handleSaveCalculation}
              disabled={!vehicleName || !basePrice || totalPrice === 0}
              className="btn-secondary flex items-center space-x-1.5 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save size={16} />
              <span className="hidden sm:inline">Sauvegarder</span>
              <span className="sm:hidden">Sauvegarder</span>
            </button>
            <button className="btn-secondary flex items-center space-x-1.5 whitespace-nowrap">
              <Download size={16} />
              <span className="hidden sm:inline">Exporter</span>
              <span className="sm:hidden">Exporter</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
          <div className="xl:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <div key={index} className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          value={option.name}
                          onChange={(e) => updateOption(index, 'name', e.target.value)}
                          placeholder="Nom de l'option"
                          className="input-field flex-1 min-w-0"
                        />
                        <div className="flex gap-2">
                          <input
                            type="number"
                            value={option.value}
                            onChange={(e) => updateOption(index, 'value', e.target.value)}
                            placeholder="Prix"
                            className="input-field w-full sm:w-32"
                          />
                          {options.length > 1 && (
                            <button
                              onClick={() => removeOption(index)}
                              className="p-1.5 text-red-400 hover:bg-red-900/20 rounded transition-colors flex-shrink-0"
                            >
                              <X size={16} />
                            </button>
                          )}
                        </div>
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
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <span className="text-gray-400 uppercase tracking-wider text-xs">Prix de Base</span>
                      <span className="text-lg font-bold text-white text-right sm:text-left">
                        {formatCurrency(parseFloat(basePrice) || 0)}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-silver-500/20 to-silver-600/10 rounded-lg border border-silver-500/30">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                      <span className="text-gray-400 uppercase tracking-wider text-xs">Total Options</span>
                      <span className="text-lg font-bold text-silver-400 text-right sm:text-left">
                        +{formatCurrency(totalOptions)}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {options.map((opt, idx) => {
                        if (!opt.name || !opt.value) return null
                        return (
                          <div key={idx} className="text-xs text-gray-300 mt-1.5 pl-3 break-words">
                            • {opt.name}: +{formatCurrency(parseFloat(opt.value))}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-silver-500 to-silver-600 text-black rounded-lg shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="text-sm font-bold uppercase tracking-wider">Prix Total</span>
                      <div className="flex items-center justify-end sm:justify-start space-x-2">
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
          </div>
        </div>

        {/* Market Comparison */}
        {totalPrice > 0 && (
          <>
            <div className="card mb-0">
              <h2 className="section-title">Comparaison Marché</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Votre Calcul</p>
                  <p className="text-lg font-bold text-white break-words">{formatCurrency(totalPrice)}</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Prix Moyen Marché</p>
                  <p className="text-lg font-bold text-silver-400 break-words">{formatCurrency(totalPrice * 1.05)}</p>
                  <p className="text-xs text-gray-500 mt-0.5">+5% vs votre calcul</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 sm:col-span-2 lg:col-span-1">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Économie Potentielle</p>
                  <p className="text-lg font-bold text-white break-words">{formatCurrency(totalPrice * 0.05)}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Si négociation réussie</p>
                </div>
              </div>
            </div>

            {/* Price History Chart - Full Body Width */}
            <div className="w-full bg-gray-900 border-t border-b border-gray-800 py-6 sm:py-8">
              <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-white mb-4 sm:mb-6 tracking-tight">Historique des Prix du Marché</h2>
            <div className="w-full" style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={[
                  { month: 'Jan 2023', votrePrix: totalPrice * 0.95, prixMarche: totalPrice * 1.1, prixMoyen: totalPrice * 1.05 },
                  { month: 'Avr 2023', votrePrix: totalPrice * 0.96, prixMarche: totalPrice * 1.08, prixMoyen: totalPrice * 1.04 },
                  { month: 'Juil 2023', votrePrix: totalPrice * 0.97, prixMarche: totalPrice * 1.06, prixMoyen: totalPrice * 1.03 },
                  { month: 'Oct 2023', votrePrix: totalPrice * 0.98, prixMarche: totalPrice * 1.04, prixMoyen: totalPrice * 1.02 },
                  { month: 'Jan 2024', votrePrix: totalPrice * 0.99, prixMarche: totalPrice * 1.02, prixMoyen: totalPrice * 1.01 },
                  { month: 'Aujourd\'hui', votrePrix: totalPrice, prixMarche: totalPrice * 1.05, prixMoyen: totalPrice * 1.05 },
                ]}
                margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="month" 
                  stroke="#9ca3af" 
                  fontSize={12}
                  tick={{ fill: '#9ca3af' }}
                />
                <YAxis 
                  stroke="#9ca3af" 
                  fontSize={12}
                  tick={{ fill: '#9ca3af' }}
                  tickFormatter={(value) => formatCurrency(value)}
                />
                <Tooltip 
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{ 
                    backgroundColor: '#111827', 
                    border: '1px solid #4b5563', 
                    borderRadius: '8px', 
                    color: '#fff',
                    padding: '10px'
                  }}
                  labelStyle={{ color: '#cbd5e1', marginBottom: '5px' }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="line"
                />
                <Line 
                  type="monotone" 
                  dataKey="votrePrix" 
                  name="Votre Prix"
                  stroke="#cbd5e1" 
                  strokeWidth={3}
                  dot={{ fill: '#cbd5e1', r: 5 }} 
                  activeDot={{ r: 7 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="prixMarche" 
                  name="Prix Marché"
                  stroke="#94a3b8" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#94a3b8', r: 4 }} 
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="prixMoyen" 
                  name="Prix Moyen"
                  stroke="#cbd5e1" 
                  strokeWidth={2}
                  dot={{ fill: '#cbd5e1', r: 4 }} 
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
            </div>

            {/* Detailed History Table */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-base font-semibold text-white mb-4 tracking-tight">Détails de l'Historique</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Votre Prix</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Prix Marché</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Prix Moyen</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Écart vs Marché</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Écart vs Moyen</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Évolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { month: 'Jan 2023', votrePrix: totalPrice * 0.95, prixMarche: totalPrice * 1.1, prixMoyen: totalPrice * 1.05 },
                      { month: 'Avr 2023', votrePrix: totalPrice * 0.96, prixMarche: totalPrice * 1.08, prixMoyen: totalPrice * 1.04 },
                      { month: 'Juil 2023', votrePrix: totalPrice * 0.97, prixMarche: totalPrice * 1.06, prixMoyen: totalPrice * 1.03 },
                      { month: 'Oct 2023', votrePrix: totalPrice * 0.98, prixMarche: totalPrice * 1.04, prixMoyen: totalPrice * 1.02 },
                      { month: 'Jan 2024', votrePrix: totalPrice * 0.99, prixMarche: totalPrice * 1.02, prixMoyen: totalPrice * 1.01 },
                      { month: 'Aujourd\'hui', votrePrix: totalPrice, prixMarche: totalPrice * 1.05, prixMoyen: totalPrice * 1.05 },
                    ].map((row, index, array) => {
                      const ecartMarche = row.prixMarche - row.votrePrix
                      const ecartMoyen = row.prixMoyen - row.votrePrix
                      const evolution = index > 0 
                        ? ((row.votrePrix - array[index - 1].votrePrix) / array[index - 1].votrePrix * 100)
                        : 0
                      const isToday = row.month === 'Aujourd\'hui'
                      
                      return (
                        <tr 
                          key={index} 
                          className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors ${
                            isToday ? 'bg-silver-500/10' : ''
                          }`}
                        >
                          <td className="py-3 px-4 text-sm text-white font-medium">
                            {row.month}
                            {isToday && <span className="ml-2 text-xs text-silver-400">●</span>}
                          </td>
                          <td className="py-3 px-4 text-sm text-white text-right font-medium">
                            {formatCurrency(row.votrePrix)}
                          </td>
                          <td className="py-3 px-4 text-sm text-silver-400 text-right">
                            {formatCurrency(row.prixMarche)}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-300 text-right">
                            {formatCurrency(row.prixMoyen)}
                          </td>
                          <td className={`py-3 px-4 text-sm text-right ${
                            ecartMarche > 0 ? 'text-red-400' : 'text-green-400'
                          }`}>
                            {ecartMarche > 0 ? '+' : ''}{formatCurrency(ecartMarche)}
                            <span className="text-xs text-gray-500 ml-1">
                              ({((ecartMarche / row.votrePrix) * 100).toFixed(1)}%)
                            </span>
                          </td>
                          <td className={`py-3 px-4 text-sm text-right ${
                            ecartMoyen > 0 ? 'text-yellow-400' : 'text-green-400'
                          }`}>
                            {ecartMoyen > 0 ? '+' : ''}{formatCurrency(ecartMoyen)}
                            <span className="text-xs text-gray-500 ml-1">
                              ({((ecartMoyen / row.votrePrix) * 100).toFixed(1)}%)
                            </span>
                          </td>
                          <td className={`py-3 px-4 text-sm text-right ${
                            evolution > 0 ? 'text-green-400' : evolution < 0 ? 'text-red-400' : 'text-gray-400'
                          }`}>
                            {index > 0 && (
                              <>
                                {evolution > 0 ? '+' : ''}{evolution.toFixed(2)}%
                                <span className="ml-1">
                                  {evolution > 0 ? '↗' : evolution < 0 ? '↘' : '→'}
                                </span>
                              </>
                            )}
                            {index === 0 && <span className="text-gray-500">-</span>}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
                <div className="col-span-2 lg:col-span-1">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Votre Prix Actuel</p>
                  <p className="text-base font-bold text-white break-words">{formatCurrency(totalPrice)}</p>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Prix Marché Actuel</p>
                  <p className="text-base font-bold text-silver-400 break-words">{formatCurrency(totalPrice * 1.05)}</p>
                </div>
                <div className="col-span-1 lg:col-span-1">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Évolution 12 mois</p>
                  <p className="text-base font-bold text-silver-400">+5.2%</p>
                </div>
                <div className="col-span-1 lg:col-span-1">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Tendance</p>
                  <p className="text-base font-bold text-green-400">↗ Hausse</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </>
        )}

        {/* Historical Calculations Table */}
        {savedCalculations.length > 0 && (
          <div className="card mt-6">
            <h2 className="section-title mb-4">Historique de vos Calculs</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date & Heure</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Véhicule</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Prix de Base</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Options</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Prix Total</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Détails Options</th>
                  </tr>
                </thead>
                <tbody>
                  {savedCalculations.map((calc) => {
                    const optionsTotal = calc.options.reduce((sum, opt) => sum + opt.value, 0)
                    const dateStr = new Date(calc.date).toLocaleString('fr-FR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                    
                    return (
                      <tr 
                        key={calc.id}
                        className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
                      >
                        <td className="py-3 px-4 text-sm text-gray-300">
                          {dateStr}
                        </td>
                        <td className="py-3 px-4 text-sm text-white font-medium">
                          {calc.vehicleName || 'Non spécifié'}
                        </td>
                        <td className="py-3 px-4 text-sm text-white text-right">
                          {formatCurrency(calc.basePrice)}
                        </td>
                        <td className="py-3 px-4 text-sm text-silver-400 text-right">
                          {formatCurrency(optionsTotal)}
                          <span className="text-xs text-gray-500 ml-1">
                            ({calc.options.length} option{calc.options.length > 1 ? 's' : ''})
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-white text-right font-bold">
                          {formatCurrency(calc.totalPrice)}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-400">
                          <div className="flex flex-wrap gap-2">
                            {calc.options.length > 0 ? (
                              calc.options.map((opt, idx) => (
                                <span 
                                  key={idx}
                                  className="inline-flex items-center px-2 py-1 rounded bg-gray-800/50 text-xs border border-gray-700"
                                >
                                  {opt.name}: {formatCurrency(opt.value)}
                                </span>
                              ))
                            ) : (
                              <span className="text-gray-500 text-xs">Aucune option</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

