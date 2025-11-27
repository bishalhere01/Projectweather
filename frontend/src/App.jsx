import { useState, useRef, useEffect } from 'react'
import LocationForm from './components/LocationForm.jsx'
import WeatherCard from './components/WeatherCard.jsx'
import SuggestionCard from './components/SuggestionCard.jsx'
import { fetchWeather } from './api.js'
import './styles.css'

/* ---- background image map ---- */
const CONDITION_TO_IMAGE = {
  sunny: '/weather-sunny.png',
  clear: '/weather-sunny.png',
  sun: '/weather-sunny.png',
  cloud: '/weather-cloudy.png',
  cloudy: '/weather-cloudy.png',
  overcast: '/weather-cloudy.png',
  rain: '/weather-rainy.png',
  rainy: '/weather-rainy.png',
  drizzle: '/weather-rainy.png',
  storm: '/weather-rainy.png',
  thunderstorm: '/weather-rainy.png',
  default: '/weather-default.png',
}

/**
 * Decide which image to use:
 * 1) try generalCondition keywords
 * 2) fallback to temp thresholds (Celsius)
 * 3) fallback to default
 */
function imageForCondition(condition, tempC) {
  if (condition) {
    const key = String(condition).trim().toLowerCase()
    for (const k of Object.keys(CONDITION_TO_IMAGE)) {
      if (k === 'default') continue
      if (key.includes(k)) return CONDITION_TO_IMAGE[k]
    }
  }

  if (typeof tempC === 'number' && !Number.isNaN(tempC)) {
    if (tempC >= 30) return CONDITION_TO_IMAGE.sunny
    if (tempC >= 20) return CONDITION_TO_IMAGE.sunny
    if (tempC >= 10) return CONDITION_TO_IMAGE.cloudy
    return CONDITION_TO_IMAGE.rainy
  }

  return CONDITION_TO_IMAGE.default
}

export default function App() {
  const [loading, setLoading] = useState(false)      // component-level loading
  const [fetching, setFetching] = useState(false)    // global overlay control
  const [error, setError] = useState('')
  const [data, setData] = useState(null)

  // two image layers for crossfade
  const currentRef = useRef(null)
  const nextRef = useRef(null)

  // crossfade helper — sets next image, fades it in, then swaps
  function crossfadeTo(newUrl) {
    const curr = currentRef.current
    const next = nextRef.current
    if (!curr || !next) return

    next.style.backgroundImage = `url('${newUrl}')`
    next.style.opacity = '1'   // fade in next
    curr.style.opacity = '0'   // fade out current

    // after transition, copy next into current and reset next opacity
    setTimeout(() => {
      curr.style.backgroundImage = `url('${newUrl}')`
      curr.style.opacity = '1'
      next.style.opacity = '0'
    }, 750) // should be slightly longer than CSS transition
  }

  // when weather changes, pick image and crossfade
  useEffect(() => {
    const conditionStr = data?.weather?.generalCondition
    const tempC = data?.weather?.temperature
    const img = imageForCondition(conditionStr, tempC)
    crossfadeTo(img)
  }, [data])

  const handleSearch = async (loc) => {
    setError('')
    setLoading(true)
    setFetching(true)
    setData(null)

    try {
      const res = await fetchWeather(loc)
      // cheap validation
      if (!res || !res.weather) throw new Error('Invalid response from server')
      setData(res)
    } catch (err) {
      setError(err.message || 'Failed to fetch weather')
    } finally {
      // small delay so spinner doesn't blink for quick requests
      setTimeout(() => {
        setLoading(false)
        setFetching(false)
      }, 300)
    }
  }

  return (
    <div className="app-bg">
      {/* background layers (controlled by JS) */}
      <div
        ref={currentRef}
        className="app-bg__image"
        style={{ backgroundImage: "url('/weather-default.png')" }}
      />
      <div
        ref={nextRef}
        className="app-bg__image next"
        style={{ backgroundImage: "url('/weather-default.png')" }}
      />

      {/* optional global overlay spinner during fetches */}
      {fetching && (
        <div className="loading-overlay" role="status" aria-live="polite">
          <div className="spinner" />
        </div>
      )}

      <div className="dashboard">
        <aside className="left-panel">
          <div>
            <div className="location">WeatherWise</div>
            <h3 className="headline" style={{ fontSize: 28, marginTop: 8 }}>Smart Activity Suggestor</h3>
            <p className="sub">Personalized activity suggestions based on mocked weather rules</p>
          </div>

          <div>
            <h4 className="sub" style={{ marginBottom: 8 }}>Search</h4>
            <LocationForm onSearch={handleSearch} loading={loading} />
            {error && <p className="text-red-300 mt-2">{error}</p>}
          </div>

          <div>
            <h4 className="sub" style={{ marginBottom: 8 }}>Recently Tested</h4>
            <div className="bubble">London · Rainy · 12°C</div>
            <div style={{ height: 8 }} />
            <div className="bubble">Mumbai · Sunny · 30°C</div>
          </div>

          <div style={{ marginTop: 'auto' }} className="sub">
            <div>Download App</div>
          </div>
        </aside>

        <main className="main-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="location">{data ? data.weather.location : 'Brooklyn, New York, USA'}</div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 6 }}>
                <div className="temp-big">{data ? data.weather.temperature : '--'}°</div>
                <div>
                  <div className="headline" style={{ fontSize: 24 }}>{data ? data.weather.generalCondition : 'Stormy with partly cloudy'}</div>
                  <div className="sub" style={{ marginTop: 6 }}>{data ? new Date().toDateString() : 'Friday, January 4'}</div>
                  <div style={{ height: 8 }} />
                  <div className="condition-pill">{data ? data.weather.generalCondition : 'Dangerous'}</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div className="sub">Feels like</div>
              <div className="headline" style={{ fontSize: 26 }}>{data ? Math.round(data.weather.temperature) : '23'}°</div>
            </div>
          </div>

          <div className="forecast-strip" style={{ marginTop: 12 }}>
            {Array.from({ length: 7 }).map((_, i) => {
              const date = new Date()
              date.setDate(date.getDate() + i)
              const dayName = date.toLocaleDateString("en-US", { weekday: "short" }) // e.g., Sun, Mon, Tue...
              const temp = 20 + i

              return (
                <div key={i} className="bubble">
                  <div style={{ fontWeight: 700 }}>{dayName}</div>
                  <div style={{ fontSize: 18, marginTop: 6 }}>{temp}°</div>
                </div>
              )
            })}
          </div>

          <div style={{ marginTop: 18 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WeatherCard weather={data ? data.weather : null} />
            <SuggestionCard text={data ? data.suggestion : null} loading={loading} error={error} />
          </div>
        </main>
      </div>
    </div>
  )
}

