import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Airport } from '../pages/airport/Airport'


export const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/home' element={<Home/>}/> 
            <Route path='/airport' element={<Airport/>}/> 
            
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    )

}