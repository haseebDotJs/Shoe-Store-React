import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { useState } from 'react'

import './App.css'
import Api from './components/api'

import Header from './components/header'

import Home from './pages/home'

import Inventory from './pages/inventory'
import Signup from './pages/signup'
import Login from './pages/login'
// import LoginFirst from './pages/loginFirst'

import Products from './pages/products'
import DisplayShoes from './pages/displayShoes'
import ShoeDetails from './pages/shoeDetails'

import Footer from './components/footer'

import NotFound from './components/notFound'
const App = () => {
  let loggedUserName = JSON.parse(localStorage.getItem('userName'))
  const [headerItems, setHeaderItems] = useState(loggedUserName)

  const [inventory, setInventory] = useState([])
  const [addedToInventory, setAddedToInventory] = useState(
    Api.map(item => {
      return {
        itemId: item._id,
        added: false
      }
    })
  )
  const [totalItem,setTotalItem] = useState(0)
  let isUserLoggedIn = JSON.parse(localStorage.getItem('login'))
  const [login, setLogin] = useState(isUserLoggedIn)

  const routes = login ?
    <>
      <Router>
        <Header item={headerItems} login={[setLogin]} items={[totalItem]} inventory={[setInventory]} total={[setTotalItem]}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />}>
            <Route path='/' element={<DisplayShoes />} />
            <Route path=':id' element={<ShoeDetails option={[inventory, setInventory]} add={[addedToInventory, setAddedToInventory]}  items={[totalItem,setTotalItem]} />} />
          </Route> 
          <Route path='login' element={<Navigate to='/' />} />
          <Route path='signup' element={<Navigate to='/' />} />
          <Route path='inventory' element={<Inventory option={[inventory, setInventory]} add={[addedToInventory, setAddedToInventory]} items={[totalItem,setTotalItem]}  />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />


      </Router>
    </>
    :
    <>
      <Router >
        <Routes>
          <Route path='login' element={<Login items={setHeaderItems} login={[setLogin]} />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </Router>
    </>

  return (
    <div>
      {routes}
    </div>

  )
}

export default App;
