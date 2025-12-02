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
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="site" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#0284c7" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

