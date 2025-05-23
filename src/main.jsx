import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as R } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <R> {/* Wrap App in BrowserRouter */}
      <App />
    </R>
  </StrictMode>
)
