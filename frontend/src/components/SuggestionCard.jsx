export default function SuggestionCard({ text, loading, error }) {
  // Large prominent banner when suggestion exists
  if (loading) {
    return (
      <div className="card" role="status" aria-live="polite">
        <h2 className="text-lg font-semibold mb-2">Suggested Activity</h2>
        <p className="hint">Loading suggestion…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="card" role="alert" aria-live="assertive">
        <h2 className="text-lg font-semibold mb-2">Suggested Activity</h2>
        <p className="text-red-300">Error: {error}</p>
        <p className="hint mt-2">Try again or check your network / backend.</p>
      </div>
    )
  }

  return (
    <>
      {/* Prominent banner */}
      <div className="suggestion-banner">
        <div className="suggestion-banner__inner">
          <div className="suggestion-banner__label">Suggested activity</div>
          <div className="suggestion-banner__text">{text || "No matching rule. Add one via POST /api/rules."}</div>
        </div>
      </div>

      {/* Small card version for layout grid */}
      <div className="card" style={{ marginTop: 8 }}>
        <h2 className="text-lg font-semibold mb-2">Suggested Activity</h2>
        <p className="text-md">{text || 'No matching rule. Add one via POST /api/rules.'}</p>
      </div>
    </>
  )
}

