import { Fragment, memo, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../shoes images/logo/1244398-removebg.png'
import cart from './icons for header/iconfinder-icon.svg'
import dropdown from './icons for header/326521-16.png'

const Header = ({ item ,login:[login,setLogin]}) => {
    console.log('header compo - rendering', item);
    console.log('login', login, 'setlogin', setLogin);
    const [logout,setLogout] = useState(false)
    
    return (
        <header>
            <div className='container row'>
                <div className='header__logo'>
                    <Link to='/'> <img className='logo' src={logo} alt='logo of shoe company' /></Link>
                </div>
                <div className='nav__list'>
                    <Fragment >
                        <Link to='/' ><li className='nav__item'>home</li></Link>
                        <Link to='/products' ><li className='nav__item'>products</li></Link>
                        <div className='userNameAndDropdown'>
                            <li className='nav__item userName' onClick={() => setLogout(!logout)}>{item[2].item}</li>
                            <li className='dropDown' onClick={() => setLogout(!logout)}><img className='dropdownIcon' src={dropdown} alt='dropdown icon' /></li>
                            {logout? <div className='logout__div'><p className='logout' onClick={() => setLogin(false)}>Logout</p></div> : null}
                        </div>
                        <Link to='/inventory'><li className='nav__item'><img className='shopping_cart' src={cart} alt='shopping cart' /></li></Link>
                    </Fragment>
                </div>
            </div>
        </header>
    )
}
export default memo(Header)