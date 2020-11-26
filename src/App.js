import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { useState } from 'react'

import './App.css'
import Api from './components/api'

import Header from './components/header'
import cart from './components/icons for header/iconfinder-icon.svg'

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
  console.log('app is rendering');
  let loggedUserName = JSON.parse(localStorage.getItem('userName'))
  const [headerItems, setHeaderItems] = useState([
    { id: 1, item: 'home' },
    { id: 2, item: 'products' },
    { id: 3, item:  loggedUserName},
    { id: 4, item: <img className='shopping_cart' src={cart} alt='shopping cart' /> }
  ])

  console.log('updated header Items', headerItems);

  const [inventory, setInventory] = useState([])
  const [addedToInventory, setAddedToInventory] = useState(
    Api.map(item => {
      return {
        itemId: item._id,
        added: false
      }
    })
  )

  let isUserLoggedIn = JSON.parse(localStorage.getItem('login'))
  // console.log('iseUserLoggedIn?', isUserLoggedIn);

  const [login, setLogin] = useState(isUserLoggedIn)


  let headerChangedItems = JSON.parse(localStorage.getItem('headerItems'))
  console.log('headerChangedItems', headerChangedItems);
  // headerChangedItems && setHeaderItems(headerChangedItems)




  const routes = login ?
    <>
      <Router>
        <Header item={headerItems} login={[login,setLogin]}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />}>
            <Route path='/' element={<DisplayShoes />} />
            <Route path=':id' element={<ShoeDetails option={[inventory, setInventory]} add={[addedToInventory, setAddedToInventory]} />} />
          </Route>
          <Route path='login' element={<Navigate to='/' />} />
          <Route path='signup' element={<Navigate to='/' />} />
          <Route path='inventory' element={<Inventory option={[inventory, setInventory]} add={[addedToInventory, setAddedToInventory]} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />


      </Router>
    </>
    :
    <>
      <Router >
        <Routes>
          <Route path='login' element={<Login items={[headerItems, setHeaderItems]} login={[login, setLogin]} />} />
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
