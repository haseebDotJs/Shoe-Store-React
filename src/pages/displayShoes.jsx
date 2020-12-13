import { memo } from 'react'
import { Link } from 'react-router-dom'
import Api from '../components/api'
import './displayShoes.css'

const DisplayShoes = () => {
    return (
        <main className='main__page'>
            <div className='container products'>
                {
                    Api.map(shoe =>
                        <Link to={shoe._id} key={shoe._id}>
                            <div id={shoe._id} className='home--product'>
                                <img className='home--images' src={shoe.src} alt='shoe' />
                                <h3 className='home--title'>{shoe.title}</h3>
                                <button className='shopNow--button'>Shop Now</button>
                            </div>
                        </Link>)
                }
            </div>
        </main>
    )
}
export default memo(DisplayShoes)