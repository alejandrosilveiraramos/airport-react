import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes/Routes'
import { Header } from './pages/components/header/Header'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
      
        <div style={{display: 'flex',flexDirection: 'column', background: '#e8e8e8', width: '100vw', height: '100vh'}}>
          <Header />
          <AppRoutes/>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
