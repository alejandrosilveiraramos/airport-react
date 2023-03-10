import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes/Routes'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8e8e8', width: '100vw', height: '80vh'}}>
          <AppRoutes/>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
