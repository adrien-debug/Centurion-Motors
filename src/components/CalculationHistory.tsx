'use client'

import { History, Trash2 } from 'lucide-react'
import { formatCurrency } from '@/utils/format'

interface HistoryItem {
  id: number
  name: string
  basePrice: number
  totalPrice: number
  date: string
}

const historyItems: HistoryItem[] = [
  { id: 1, name: 'Porsche 911 Carrera S', basePrice: 125000, totalPrice: 136300, date: 'Aujourd\'hui, 14:32' },
  { id: 2, name: 'Ferrari 488 GTB', basePrice: 245000, totalPrice: 280500, date: 'Hier, 18:15' },
  { id: 3, name: 'Lamborghini Huracán', basePrice: 198000, totalPrice: 243000, date: '15 Jan, 10:22' },
]

export default function CalculationHistory() {
  return (
    <div className="card">
      <div className="flex items-center space-x-2 mb-4">
        <History className="text-silver-400" size={18} />
        <h2 className="section-title mb-0">Historique</h2>
      </div>
      <div className="space-y-2">
        {historyItems.map((item) => (
          <div
            key={item.id}
            className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-silver-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div>
                <p className="font-semibold text-sm text-white">{item.name}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
              <button className="p-1.5 hover:bg-gray-700 rounded transition-colors">
                <Trash2 className="text-gray-400" size={14} />
              </button>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-800">
              <span className="text-xs text-gray-400">Base: {formatCurrency(item.basePrice)}</span>
              <span className="text-base font-bold text-silver-400">{formatCurrency(item.totalPrice)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

