import { Routes,Route} from 'react-router-dom'
import { lazy } from 'react';

// Pages:
const Home = lazy(()=>import('../pages/Home/Home'))
const Contact = lazy(()=>import('../pages/Contact/Contact'))
const Service = lazy(()=>import('../pages/Service/Service'))

const RoutesConfig =(
        <Routes>
            <Route 
                path='/' 
                element={<Home/>}
            />
             <Route 
                path='/contact' 
                element={<Contact/>}
            />
             <Route 
                path='/service' 
                element={<Service/>}
            />
        </Routes>
)
 
export default RoutesConfig;