import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../shoes images/logo/1244398-removebg.png'
import cart from './icons for header/iconfinder-icon.svg'
import dropdown from './icons for header/326521-16.png'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => (
    {
        hamburger: {
            fontSize: '2.25rem',
            display: 'none',
            cursor: 'pointer',
            fill: '#ffffff',
            [theme.breakpoints.down('xs')]: {
                display: 'block',
            }
        }
    }
));




// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';



const Header = ({
    item,
    login: [setLogin],
    items: [totalItem],
    inventory: [setInventory],
    total: [setTotalItem]

}) => {
    const classes = useStyles()
    const [logout, setLogout] = useState(false)
    const setToFalse = () => {
        localStorage.removeItem('login')
        setLogin(false)
        setInventory([])
        setTotalItem(0)
    }
    const [hideItems, setHideItems] = useState(true)
    const small = useMediaQuery('(max-width: 599px)');
    useEffect(() => {
        small ? setHideItems(false) : setHideItems(true)
    }, [small])

    return (
        <header>
            <div className='container row'>
                <div className='header__logo'>
                    <IconButton onClick={() => setHideItems(!hideItems)}>
                        <MenuRoundedIcon className={classes.hamburger}  />
                    </IconButton>
                    {/* <img src={hamburger} className='hamburgerIcon' alt='amburger icon' onClick={() => setHideItems(!hideItems)} /> */}
                    <Link to='/'> <img className='logo' src={logo} alt='logo of shoe company' /></Link>
                </div>
                {/* <button class="nav-toggle" aria-label="open navigation"> */}
                {/* </button> */}
                {hideItems && <div className='nav__list'>
                    <Link to='/' ><li className='nav__item'>home</li></Link>
                    <Link to='/products' ><li className='nav__item'>products</li></Link>
                    <div >
                        <div className='userNameAndDropdown'>
                            <li className='nav__item userName' onClick={() => setLogout(!logout)}>{item}</li>
                            <li className='dropDown' onClick={() => setLogout(!logout)}><img className='dropdownIcon' src={dropdown} alt='dropdown icon' /></li>
                        </div>
                        {logout && <div className='logout__div' onClick={setToFalse}><p className='logout' >Logout</p></div>}
                    </div>
                    {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item onClick={setToFalse}>Logout</Dropdown.Item>
                    </DropdownButton> */}

                    <Link to='/inventory'><li className='nav__item'><img className='shopping_cart' src={cart} alt='shopping cart' /><span className='item__count__header'>{totalItem}</span></li></Link>
                </div>}
            </div>
        </header>
    )
}
export default memo(Header)