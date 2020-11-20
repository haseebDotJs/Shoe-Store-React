import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './shoeDetails.css'
import Api from '../components/api'
import NotFound from '../components/notFound'

const ShoeDetails = () => {
    const { id } = useParams()
    const currentShoePage = Api.find(page => page._id === id)
    const [quantity, setQuantity] = useState(1)
    if (!currentShoePage) {
        return (
            <NotFound />
        )
    }

    return (
        <section className='shoePage__container'>
            <div className='container shoePage'>
                <div className='shoeImage'>
                    <img className='shoe--image' src={currentShoePage.src} alt="shoe" />
                </div>
                <div className='shoeDetails'>
                    <h2 className='shoe--title'>{currentShoePage.title}</h2>
                    <p className='shoe--content'><span className='shoe-detail-head'>Details</span> {currentShoePage.content}</p>
                    <p className='shoe--price'><span className='shoe-detail-head'>Price</span> ${currentShoePage.price}</p>
                    <div className='show--quantity'>
                        <p className='quantity--title'><span className='shoe-detail-head'>Quantity</span></p>
                        <button className='subtract' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                        <input className='quantity--number' type='text' value={quantity} onChange={() => setQuantity(quantity)} />
                        <button className='add' onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <button className='add-to-cart'>Add to cart</button>
                    {/* <Link to={{pathName: '/inventory',aboutProps: {quantity: quantity}}}><button className='add-to-cart'>Add to cart</button></Link> */}
                </div>
            </div>
        </section>
    )
}
export default ShoeDetails