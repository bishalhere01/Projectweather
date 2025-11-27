export async function fetchWeather(location) {
  const res = await fetch(`/api/weather/${encodeURIComponent(location)}`)
  if (!res.ok) {
    const txt = await res.text().catch(() => 'Server error')
    throw new Error(txt || 'Server error')
  }
  return res.json()
}