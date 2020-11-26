import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './shoeDetails.css'
import Api from '../components/api'
import NotFound from '../components/notFound'

const ShoeDetails = (
    { option: [inventory, setInventory],
        add: [addedToInventory, setAddedToInventory]
    }
) => {
    console.log('shoe details compo - rendering');
    // console.log('added',addedToInventory,'setAdded',setAddedToInventory);
    // const [added, setAdded] = useState(false)
    const { id } = useParams()
    const currentShoePage = Api.find(page => page._id === id)
    const [quantity, setQuantity] = useState(1)
    let addToInventory = () => {
        // disabling item to add to inventory again
        let thisIsAdded = { itemId: currentShoePage._id, added: true }
        setAddedToInventory((prevValue) => Object.assign([], prevValue, { [+currentShoePage._id - 1]: thisIsAdded }))
        let merging = { ...currentShoePage, quantity: quantity, deliveryCharges: 5, totalPrice: currentShoePage.price * quantity }
        setInventory((prevValue) => [...prevValue, merging])
    }
    if (!currentShoePage) {
        return (
            <NotFound />
        )
    }
    let thisItemIndex = +currentShoePage._id - 1

    return (
        <section className='shoePage__container'>
            <div className='container shoePage'>
                <div className='shoeImage'>
                    <img className='shoe--image' src={currentShoePage.src} alt="shoe" />
                </div>
                <div className='shoeDetails'>
                    <h2 className='shoe--title'>{currentShoePage.title}</h2>
                    <p className='shoe--content'><span className='shoe-detail-head'>Details:</span> {currentShoePage.content}</p>
                    <p className='shoe--price'><span className='shoe-detail-head'>Price:</span> ${currentShoePage.price}</p>
                    <div className='shoe--quantity'>
                        <p className='quantity--title'>Quantity:</p>
                        <button className='subtract' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                        <input className='quantity--number' type='text' value={quantity} onChange={() => setQuantity(quantity)} />
                        <button className='add' onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    {addedToInventory[thisItemIndex].added ? <button className='added-to-cart' disabled>Added to cart</button>
                        : <button className='add-to-cart' onClick={addToInventory}>Add to cart</button>
                    }
                    <Link to='/products'><li className='goBackToProducts'>Go back</li></Link>
                </div>
            </div>
        </section>
    )
}
export default ShoeDetails