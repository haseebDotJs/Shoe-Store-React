import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import Header from './components/header'
import cart from './components/shopping cart for headr/iconfinder-icon.svg'


import Home from './pages/home'

import Inventory from './pages/inventory'
import Signup from './pages/signup'
import Login from './pages/login'

import Products from './pages/products'
import DisplayShoes from './pages/displayShoes'
import ShoeDetails from './pages/shoeDetails'

import Footer from './components/footer'

import NotFound from './components/notFound'

const App = () => {
  const [headerItems, setHeaderItems] = useState([
    { id: 1, link: '/', item: 'home' },
    { id: 2, link: '/products', item: 'products' },
    { id: 3, link: '/login', item: 'login' },
    { id: 4, link: '/inventory', item: <img className='shopping_cart' src={cart} alt='shopping cart' /> }
  ])


  return (
    <div>
      <Router >
        <Header item={headerItems} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />}>
            <Route path='/' element={<DisplayShoes />} />
            <Route path=':id' element={<ShoeDetails />} />
          </Route>
          <Route path='login' element={<Login items={[headerItems, setHeaderItems]} />} />
          <Route path='signup' element={<Signup />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />

      </Router>
    </div>

  )
}

export default App;
