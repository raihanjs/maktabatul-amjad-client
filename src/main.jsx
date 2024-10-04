import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import HeaderTop from './Pages/Shared/HeaderTop/HeaderTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderTop/>
  </StrictMode>,
)
