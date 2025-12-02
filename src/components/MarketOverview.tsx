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
      <div className="space-y-4">
        {brands.map((brand, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-900">{brand.name}</p>
              <p className="text-sm text-gray-600">{brand.count} véhicules</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">
                €{brand.avgPrice.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Prix moyen</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

