import { useState } from 'react'

export default function LocationForm({ onSearch, loading }) {
  const [location, setLocation] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!location.trim()) return
    onSearch(location.trim())
  }

  return (
    <form onSubmit={submit} className="flex gap-2 items-center">
      <input
        className="input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location (e.g., London, Mumbai)"
        disabled={loading}
      />
      <button className="btn" disabled={loading}>
        {loading ? 'Loading…' : 'Get'}
      </button>
    </form>
  )
}
