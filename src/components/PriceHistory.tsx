'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { formatCurrency } from '@/utils/format'

const historyData = [
  { month: 'Jan 2023', price: 135000 },
  { month: 'Avr 2023', price: 132000 },
  { month: 'Juil 2023', price: 130000 },
  { month: 'Oct 2023', price: 128000 },
  { month: 'Jan 2024', price: 125000 },
  { month: 'Aujourd\'hui', price: 125000 },
]

export default function PriceHistory() {
  return (
    <div className="card">
      <h2 className="section-title">Historique des Prix</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={historyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9ca3af" fontSize={11} />
          <YAxis stroke="#9ca3af" fontSize={11} />
          <Tooltip 
            formatter={(value) => formatCurrency(Number(value))}
            contentStyle={{ backgroundColor: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: '#fff' }}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#cbd5e1" 
            strokeWidth={2} 
            dot={{ fill: '#cbd5e1', r: 4 }} 
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-3 pt-3 border-t border-gray-800">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Prix Max</p>
            <p className="text-base font-bold text-white">{formatCurrency(135000)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Prix Min</p>
            <p className="text-base font-bold text-white">{formatCurrency(125000)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Évolution</p>
            <p className="text-base font-bold text-silver-400">-7.4%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

