import { Link } from 'react-router-dom'
import heroImage from '../shoes images/hero-page-image/Nike-Shoes-Transparent.png'

import './home.css'
const Home = () => {
    console.log('home compo - rendering');
    return (

        <main className='hero'>
            <div className='container hero--section'>
                <div className='hero__title'>
                    <h1 className='hero--title'><span className='fake'>Fake,</span> Best shoe provider in whole US</h1>
                </div>
                <div className='hero__image'>
                    <Link to='products'>  <img className='hero--image' src={heroImage} alt='shoe on hero page' /></Link>
                </div>
            </div>

        </main >

    )
}
export default Home