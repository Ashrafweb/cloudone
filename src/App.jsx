
import './App.css'
//import Navbar from './components/Navbar'
import NavbarWithCart from './components/NavbarWithCart'
import ProductDetails from './pages/ProductDetails'
import ProductsPage from './pages/ProductsPage'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <NavbarWithCart />
    <Router>
      <Routes>
        <Route path='/' element={<ProductsPage />}/>
         <Route path='/products' element={<ProductsPage />}/>
          <Route path='/products/:id' element={<ProductDetails />}/>
      </Routes>
    </Router>
  
    </>
  )
}

export default App
