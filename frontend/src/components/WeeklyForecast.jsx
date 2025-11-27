import React from "react"

/**
 * WeeklyForecast
 * props:
 *  - days: array of day objects (see data example below)
 *  - onSelect(dayIndex) optional
 *  - selectedIndex optional
 */
export default function WeeklyForecast({ days = [], onSelect = () => {}, selectedIndex = 0 }) {
  // helper: format day label
  const dayLabel = (isoDate, alt) => {
    try {
      const d = new Date(isoDate)
      return d.toLocaleDateString(undefined, { weekday: "short" }) // Wed
    } catch {
      return alt || ""
    }
  }

  // mini sparkline: convert temp array -> points
  const Sparkline = ({ temps = [], width = 80, height = 28 }) => {
    if (!temps || temps.length === 0) return null
    const min = Math.min(...temps)
    const max = Math.max(...temps)
    const range = max - min || 1
    const step = width / Math.max(temps.length - 1, 1)
    const points = temps.map((t, i) => `${i * step},${height - ((t - min) / range) * height}`).join(" ")
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden>
        <polyline fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" points={points} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  return (
    <div className="weekly-forecast" role="list" aria-label="7 day forecast">
      {days.map((d, i) => {
        const active = i === selectedIndex
        return (
          <button
            role="listitem"
            key={d.date || i}
            className={`forecast-item ${active ? "active" : ""}`}
            onClick={() => onSelect(i)}
            title={`${d.day} — ${d.tempHigh}° / ${d.tempLow}° — ${d.precip ?? 0}% precip`}
          >
            <div className="fi-top">
              <div className="fi-day">{dayLabel(d.date, d.day)}</div>
              <div className="fi-date">{new Date(d.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</div>
            </div>

            <div className="fi-icon">
              {/* Replace with real svg icons or an <img>. Using emoji fallback */}
              {d.icon === "sunny" && <span aria-hidden>☀️</span>}
              {d.icon === "rainy" && <span aria-hidden>🌧️</span>}
              {d.icon === "cloudy" && <span aria-hidden>☁️</span>}
            </div>

            <div className="fi-temps">
              <div className="fi-high">{Math.round(d.tempHigh)}°</div>
              <div className="fi-low">{Math.round(d.tempLow)}°</div>
            </div>

            <div className="fi-spark">
              <Sparkline temps={d.temps || [d.tempLow, d.tempHigh]} />
            </div>

            <div className="fi-meta">
              <div className="fi-precip">💧 {d.precip ?? 0}%</div>
              <div className="fi-wind">{d.wind ?? "-"} km/h</div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
