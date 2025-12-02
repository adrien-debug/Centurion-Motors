'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { site: 'AutoScout24', count: 145 },
  { site: 'Mobile.de', count: 98 },
  { site: 'LeBonCoin', count: 67 },
  { site: 'Autotrader', count: 43 },
]

export default function MarketComparison() {
  return (
    <div className="card">
      <h2 className="section-title">Répartition par Site</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="site" stroke="#9ca3af" fontSize={11} />
          <YAxis stroke="#9ca3af" fontSize={11} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: '#fff' }}
          />
          <Bar dataKey="count" fill="#cbd5e1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

