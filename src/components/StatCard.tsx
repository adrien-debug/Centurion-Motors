import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  color: string
}

export default function StatCard({ title, value, change, icon: Icon, color }: StatCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className={`text-sm mt-2 ${color}`}>{change}</p>
        </div>
        <div className={`p-3 rounded-lg bg-gray-100 ${color}`}>
          <Icon size={28} />
        </div>
      </div>
    </div>
  )
}

