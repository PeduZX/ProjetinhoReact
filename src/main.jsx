import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import App from './screens/Home.jsx'
import CadastroUsuario from './screens/CadastroUsuario.jsx'
import CadastroCurriculo from './screens/CadastroCurriculo.jsx'
import Perfil from './screens/Perfil.jsx'
import Login from './screens/Login.jsx'
import PageTransition from './components/PageTransition.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTransition><App /></PageTransition>} />
        <Route path="/cadastro-usuario" element={<PageTransition><CadastroUsuario /></PageTransition>} />
        <Route path="/cadastro-curriculo" element={<PageTransition><CadastroCurriculo /></PageTransition>} />
        <Route path="/perfil" element={<PageTransition><Perfil /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

