'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

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
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `€${value.toLocaleString()}`} />
          <Line type="monotone" dataKey="price" stroke="#0284c7" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

