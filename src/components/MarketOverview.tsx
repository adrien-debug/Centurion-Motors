export default function MarketOverview() {
  const brands = [
    { name: 'Porsche', count: 45, avgPrice: 125000 },
    { name: 'Ferrari', count: 23, avgPrice: 285000 },
    { name: 'Lamborghini', count: 18, avgPrice: 245000 },
    { name: 'Aston Martin', count: 12, avgPrice: 195000 },
  ]

  return (
    <div className="card">
      <h2 className="section-title">Vue d'Ensemble du Marché</h2>
      <div className="space-y-2">
        {brands.map((brand, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-silver-500/30 transition-all duration-300">
            <div>
              <p className="font-semibold text-white text-sm mb-0.5">{brand.name}</p>
              <p className="text-xs text-gray-400">{brand.count} véhicules</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-silver-400 text-base">
                €{brand.avgPrice.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Prix moyen</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

