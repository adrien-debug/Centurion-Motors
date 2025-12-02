import { TrendingUp, AlertCircle, DollarSign, Car } from 'lucide-react'
import StatCard from '@/components/StatCard'
import RecentOpportunities from '@/components/RecentOpportunities'
import MarketOverview from '@/components/MarketOverview'

export default function Dashboard() {
  return (
    <div className="page-container">
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">
        Vue d'ensemble du marché et des opportunités
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Opportunités"
          value="12"
          change="+3"
          icon={AlertCircle}
          color="text-green-600"
        />
        <StatCard
          title="Prix Moyen"
          value="€125,000"
          change="+2.5%"
          icon={DollarSign}
          color="text-blue-600"
        />
        <StatCard
          title="Véhicules Scannés"
          value="1,247"
          change="+127"
          icon={Car}
          color="text-purple-600"
        />
        <StatCard
          title="Tendance Marché"
          value="+5.2%"
          change="+0.8%"
          icon={TrendingUp}
          color="text-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentOpportunities />
        <MarketOverview />
      </div>
    </div>
  )
}

