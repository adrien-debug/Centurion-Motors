'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { formatCurrency } from '@/utils/format'

const data = [
  { month: 'Jan', price: 120000 },
  { month: 'Fév', price: 125000 },
  { month: 'Mar', price: 128000 },
  { month: 'Avr', price: 130000 },
  { month: 'Mai', price: 132000 },
  { month: 'Jun', price: 135000 },
]

export default function PriceChart() {
  return (
    <div className="card">
      <h2 className="section-title">Évolution des Prix (6 mois)</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9ca3af" fontSize={11} />
          <YAxis stroke="#9ca3af" fontSize={11} />
          <Tooltip 
            formatter={(value) => formatCurrency(Number(value))}
            contentStyle={{ backgroundColor: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: '#fff' }}
          />
          <Line type="monotone" dataKey="price" stroke="#cbd5e1" strokeWidth={2} dot={{ fill: '#cbd5e1', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

