import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../shoes images/logo/1244398-removebg.png'
// import cart from './shopping cart for headr/iconfinder-icon.svg'

const Header = ({ item }) => {
    console.log('props ', item);
    return (
        <header>
            <div className='container row'>
                <div className='header__logo'>
                    <Link to='/'> <img className='logo' src={logo} alt='logo of shoe company' /></Link>
                </div>
                <div className='nav__list'>
                    {item.map((headerItem) => {
                        return (
                            <Fragment key={headerItem.id}>
                                <Link to={headerItem.link} ><li className="nav__item">{headerItem.item}</li></Link>
                            </Fragment>
                        )
                    })}

                </div>
            </div>
        </header>
    )
}
export default Header