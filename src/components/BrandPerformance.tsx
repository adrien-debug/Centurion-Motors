'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { formatCurrency } from '@/utils/format'

const data = [
  { brand: 'Porsche', count: 145, avgPrice: 125000, trend: +5.2 },
  { brand: 'Ferrari', count: 89, avgPrice: 285000, trend: +8.1 },
  { brand: 'Lamborghini', count: 67, avgPrice: 245000, trend: +3.4 },
  { brand: 'McLaren', count: 34, avgPrice: 320000, trend: +12.3 },
  { brand: 'Aston Martin', count: 52, avgPrice: 195000, trend: -2.1 },
]

export default function BrandPerformance() {
  return (
    <div className="card">
      <h2 className="section-title">Performance par Marque</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="brand" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: '#fff' }}
            formatter={(value: any) => value.toLocaleString('fr-FR')}
          />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#cbd5e1" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {data.map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="text-sm text-gray-400 mb-1">{item.brand}</p>
              <p className="text-lg font-bold text-white">
                {formatCurrency(item.avgPrice)}
              </p>
              <p className={`text-xs mt-1 ${item.trend > 0 ? 'text-silver-400' : 'text-gray-500'}`}>
                {item.trend > 0 ? '+' : ''}{item.trend}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

