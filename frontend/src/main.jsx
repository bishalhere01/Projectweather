import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import WeeklyForecast from './components/WeeklyForecast.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <WeeklyForecast />
  </React.StrictMode>
)