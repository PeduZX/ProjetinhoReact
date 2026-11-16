import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import App from './screens/Home.jsx'
import CadastroCurriculo from './screens/CadastroCurriculo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<CadastroCurriculo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
