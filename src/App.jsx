import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './componentes/navegacao/navegacao'
import { Home } from './componentes/home/home'
function App() {
  return (
    <div>
     <Header />
     <Home />
    </div>
  )
}

export default App
