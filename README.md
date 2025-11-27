# Smart Activity Suggestor — Starter

A minimal full‑stack starter that satisfies the assignment requirements:
- **Mocked weather module** (no external API)
- **Decision logic** using DB rules
- **GET /api/weather/:location** endpoint
- Simple **frontend** to test the flow

## 1) Prerequisites
- Node.js 18+
- MongoDB running locally (default: `mongodb://localhost:27017`)

## 2) Setup
```bash
cd backend
cp .env.example .env            # edit MONGO_URI if needed
npm install
npm run seed                    # inserts sample rules
npm run dev                     # start server (serves frontend on same port)
```

Now open: **http://localhost:5000**

## 3) API
### GET `/api/weather/:location`
Response:
```json
{
  "weather": { "location": "London", "temperature": 12, "windSpeed": 8, "humidity": 80, "generalCondition": "Rainy" },
  "suggestion": "Visit a cozy café and read a book ☕📚",
  "matchedRuleId": "66f..."
}
```

### Rules (optional CRUD)
- `POST /api/rules` — create a rule `{ condition, minTemp, maxTemp, activitySuggestion }`
- `GET /api/rules` — list rules
- `PUT /api/rules/:id` — update a rule
- `DELETE /api/rules/:id` — delete

## 4) Frontend
This repo serves the `/frontend` folder statically from the Express app.
Use the input to try **London**, **Mumbai**, **Delhi**, **Paris** out of the box.

## 5) Project structure
```
smart-activity-suggestor/
├─ backend/
│  ├─ src/
│  │  ├─ data/mockWeatherData.js
│  │  ├─ models/ActivityRule.js
│  │  ├─ routes/rules.js
│  │  ├─ routes/weather.js
│  │  └─ index.js
│  ├─ .env.example
│  └─ package.json
├─ frontend/
│  ├─ index.html
│  ├─ styles.css
│  └─ app.js
└─ .gitignore
```

## 6) Next steps
- Add unit tests (Jest or Vitest) for the decision function.
- Add form UI to create rules from the frontend.
- Consider Dockerizing Mongo + app for easy run.
```

## 4) Frontend (React + Vite + Tailwind)
In a second terminal:
```bash
cd frontend
npm install
npm run dev       # http://localhost:5173 (proxy to backend on /api)
```
For production build (served by Express):
```bash
npm run build
# restart backend; it will serve /frontend/dist
```

App structure (frontend):
```
frontend/
├─ index.html
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ api.js
│  └─ components/
│     ├─ LocationForm.jsx
│     ├─ WeatherCard.jsx
│     └─ SuggestionCard.jsx
└─ package.json
```