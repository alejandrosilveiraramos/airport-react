import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes/Routes'
import { Header } from './pages/components/header/Header'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
       
          <Header />
          
          <AppRoutes/>
        
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
