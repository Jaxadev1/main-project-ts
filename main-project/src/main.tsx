import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.querySelector('.wrapper')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
