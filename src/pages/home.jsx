import { Link } from 'react-router-dom'
import heroImage from '../shoes images/hero-page-image/Nike-Shoes-Transparent.png'

import './home.css'
const Home = () => {
    return (

        <main className='hero'>
            <div className='container hero--section'>
                <div className='hero__title'>
                    <h1 style={{margin: 0, padding: 0}}className='hero--title'><span className='fake'>Fake,</span> Best shoe provider in whole US</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officia eveniet obcaecati debitis suscipit quas nisi ex nobis quam! Quae!</p>
                    <Link to='/products'><button className='hero__goto__products'>Go to products</button></Link>
                </div>
                <div className='hero__image'>
                    <Link to='products'>  <img className='hero--image' src={heroImage} alt='shoe on hero page' /></Link>
                </div>
            </div>

        </main >

    )
}
export default Home