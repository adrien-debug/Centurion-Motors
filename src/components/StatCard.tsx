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
    <div className="card hover:border-silver-500/50 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-bold text-white mb-1">{value}</p>
          <p className={`text-xs font-medium ${color}`}>{change}</p>
        </div>
        <div className={`p-2.5 rounded-lg bg-gradient-to-br from-silver-500/20 to-silver-600/10 border border-silver-500/30 ${color} ml-3`}>
          <Icon size={20} />
        </div>
      </div>
    </div>
  )
}

