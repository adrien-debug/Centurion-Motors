import { TrendingUp, AlertCircle, DollarSign, Car, Clock, Target, TrendingDown } from 'lucide-react'
import StatCard from '@/components/StatCard'
import RecentOpportunities from '@/components/RecentOpportunities'
import MarketOverview from '@/components/MarketOverview'
import TrendingVehicles from '@/components/TrendingVehicles'
import QuickActions from '@/components/QuickActions'

export default function Dashboard() {
  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">
            Vue d'ensemble du marché et des opportunités en temps réel
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Clock size={16} />
          <span>Dernière mise à jour: Il y a 5 min</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Opportunités"
          value="12"
          change="+3 cette semaine"
          icon={AlertCircle}
          color="text-silver-400"
        />
        <StatCard
          title="Prix Moyen"
          value="€125,000"
          change="+2.5% ce mois"
          icon={DollarSign}
          color="text-silver-400"
        />
        <StatCard
          title="Véhicules Scannés"
          value="1,247"
          change="+127 aujourd'hui"
          icon={Car}
          color="text-silver-400"
        />
        <StatCard
          title="Tendance Marché"
          value="+5.2%"
          change="+0.8% vs hier"
          icon={TrendingUp}
          color="text-silver-400"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2 space-y-4">
          <RecentOpportunities />
          <TrendingVehicles />
        </div>
        <div className="space-y-4">
          <MarketOverview />
          <QuickActions />
        </div>
      </div>

      {/* Additional Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-white">Objectif Mensuel</h3>
            <Target className="text-silver-400" size={18} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Véhicules analysés</span>
              <span className="text-sm text-white font-semibold">1,247 / 2,000</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-gradient-to-r from-silver-500 to-silver-600 h-2 rounded-full" style={{ width: '62%' }}></div>
            </div>
            <p className="text-xs text-gray-400">62% complété</p>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-white">Meilleur Deal</h3>
            <TrendingDown className="text-silver-400" size={18} />
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-white">Ferrari 488 GTB</p>
            <p className="text-xs text-gray-400">2020 • 12,000 km</p>
            <div className="pt-2 border-t border-gray-800">
              <p className="text-lg font-bold text-silver-400">-15.8%</p>
              <p className="text-xs text-gray-500">vs prix moyen marché</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-white">Activité Récente</h3>
            <Clock className="text-silver-400" size={18} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-1.5 h-1.5 bg-silver-400 rounded-full"></div>
              <span className="text-gray-400">Scan AutoScout24 terminé</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-1.5 h-1.5 bg-silver-400 rounded-full"></div>
              <span className="text-gray-400">3 nouvelles opportunités</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
              <span className="text-gray-500">Mise à jour des prix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

