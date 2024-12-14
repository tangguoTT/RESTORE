import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/app/layout/styles.css'
import App from '../src/app/layout/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>, 
)
