import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cake from './Cake.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cake />
  </StrictMode>,
)
