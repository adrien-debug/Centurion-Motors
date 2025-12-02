'use client'

import { FileText, Zap } from 'lucide-react'
import { formatCurrency } from '@/utils/format'

interface Template {
  name: string
  basePrice: number
  options: { name: string; value: number }[]
}

const templates: Template[] = [
  {
    name: 'Porsche 911 Carrera S',
    basePrice: 125000,
    options: [
      { name: 'Pack Sport', value: 5000 },
      { name: 'Cuir Premium', value: 3500 },
      { name: 'Jantes 20"', value: 2800 },
    ]
  },
  {
    name: 'Ferrari 488 GTB',
    basePrice: 245000,
    options: [
      { name: 'Pack Carbon', value: 12000 },
      { name: 'Système Audio Premium', value: 8500 },
      { name: 'Pack Track', value: 15000 },
    ]
  },
  {
    name: 'Lamborghini Huracán',
    basePrice: 198000,
    options: [
      { name: 'Pack Ad Personam', value: 25000 },
      { name: 'Jantes Forged', value: 8000 },
      { name: 'Intérieur Alcantara', value: 12000 },
    ]
  },
]

export default function PriceTemplates({ onSelectTemplate }: { onSelectTemplate: (template: Template) => void }) {
  return (
    <div className="card">
      <div className="flex items-center space-x-2 mb-4">
        <Zap className="text-silver-400" size={18} />
        <h2 className="section-title mb-0">Templates Rapides</h2>
      </div>
      <div className="space-y-2">
        {templates.map((template, idx) => (
          <button
            key={idx}
            onClick={() => onSelectTemplate(template)}
            className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-silver-500/50 transition-all duration-300 text-left group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2">
                <FileText className="text-gray-400 group-hover:text-silver-400 transition-colors" size={16} />
                <span className="font-semibold text-sm text-white">{template.name}</span>
              </div>
              <span className="text-xs text-gray-400">
                {template.options.length} options
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Base: {formatCurrency(template.basePrice)}</span>
              <span className="text-silver-400 font-semibold text-xs">
                Total: {formatCurrency(template.basePrice + template.options.reduce((sum, opt) => sum + opt.value, 0))}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

