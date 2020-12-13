import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../shoes images/logo/1244398-removebg.png'
import cart from './icons for header/iconfinder-icon.svg'
import dropdown from './icons for header/326521-16.png'
import hamburger from './icons for header/hamburger.svg'

const Header = ({
    item,
    login: [setLogin],
    items: [totalItem],
    inventory: [setInventory],
    total: [setTotalItem]

}) => {
    const [logout, setLogout] = useState(false)
    const setToFalse = () => {
        localStorage.removeItem('login')
        setLogin(false)
        setInventory([])
        setTotalItem(0)
    }
    const [hideItems,setHideItems] = useState(true)
    return (
        <header>
            <div className='container row'>
                <div className='header__logo'>
                    <img className='hamburgerIcon' src={hamburger} alt='amburger icon' onClick={() => setHideItems(!hideItems)}/>
                    <Link to='/'> <img className='logo' src={logo} alt='logo of shoe company' /></Link>
                </div>
                {/* <button class="nav-toggle" aria-label="open navigation"> */}
                {/* </button> */}
                {hideItems && <div className='nav__list' style={{}}>
                    <Link to='/' ><li className='nav__item'>home</li></Link>
                    <Link to='/products' ><li className='nav__item'>products</li></Link>
                    <div className='userNameAndDropdown'>
                        <li className='nav__item userName' onClick={() => setLogout(!logout)}>{item}</li>
                        <li className='dropDown' onClick={() => setLogout(!logout)}><img className='dropdownIcon' src={dropdown} alt='dropdown icon' /></li>
                        {logout ? <div className='logout__div' onClick={setToFalse}><p className='logout' >Logout</p></div> : null}
                    </div>
                    <Link to='/inventory'><li className='nav__item'><img className='shopping_cart' src={cart} alt='shopping cart' /><span className='item__count__header'>{totalItem}</span></li></Link>
                </div>}
            </div>
        </header>
    )
}
export default memo(Header)