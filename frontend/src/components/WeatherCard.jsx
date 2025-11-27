export default function WeatherCard({ weather }) {
  if (!weather) {
    return (
      <div className="card">
        <h2 className="text-lg font-semibold mb-2">Weather</h2>
        <p className="hint">No data yet. Search a location.</p>
      </div>
    )
  }

  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-4">Weather Statistics</h2>

      {/* ✅ Card-style stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
        <div className="stat-box">
          <div className="text-2xl font-bold text-white">{weather.temperature}°C</div>
          <div className="text-xs text-sky-400">Temperature</div>
        </div>

        <div className="stat-box">
          <div className="text-2xl font-bold text-white">{weather.windSpeed} km/h</div>
          <div className="text-xs text-sky-400">Wind Speed</div>
        </div>

        <div className="stat-box">
          <div className="text-2xl font-bold text-white">{weather.humidity}%</div>
          <div className="text-xs text-sky-400">Humidity</div>
        </div>
      </div>
    </div>
  )
}


