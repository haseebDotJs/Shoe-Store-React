import { Link } from 'react-router-dom'
import deleteIcon from './inventory-deleteIcon/iconfinder_basket_1814090 (1).svg'

import './inventory.css'
const Inventory = (
    { option: [inventory, setInventory],
      add: [addedToInventory, setAddedToInventory],
      items: [totalItem,setTotalItem]

    }
) => {
    // billing of items
    let subTotal = inventory.reduce((acc, item) => {
        return acc + item.totalPrice
    }, 0)
    let deliveryCharges = inventory.reduce((acc, item) => {
        return acc + item.deliveryCharges
    }, 0)
    let total = subTotal + deliveryCharges
    // billing of items


    const removeThisItem = (remove) => {
        // making a spearate copy of inventory 
        let allItems = [...inventory]
        let indexOfItem = allItems.indexOf(remove);
        let [removedItem] = allItems.splice(indexOfItem, 1)//destructuring removed item from 0 index of array and removing remoed item from allItems array
        setInventory(allItems)
        setTotalItem(totalItem - removedItem.quantity)

        // enabling item to add to inventory again
        setAddedToInventory(Object.assign([], addedToInventory, { [+remove._id - 1]: remove }))
    }
    return (
        < section className='inventory__section' >
            <div className='container inventory--container'>
                <div className='inventory__details__container'>
                    {inventory.length < 1 ?
                        <div className='no__item__inventory'>
                            <h1 style={{ fontSize: '1rem' }}>There is no Item in inventory</h1>
                            <Link to='/products'><button className='continue__shopping'>Continue Shopping</button></Link>
                        </div>
                        :
                        inventory.map(info => {
                            return (
                                <div className='inventory--item--container' key={info._id}>
                                    <div className='inventory--item--image' key={info._id}>
                                        <img className='itemImage' src={info.src} alt="item" />
                                    </div>
                                    <div className='inventory--added--items--detail'>
                                        <div className='specific--item--detail'>
                                            <h2 className='item--title'>{info.title}</h2>
                                            <p className='item--content'>{info.content}</p>
                                        </div>
                                        <div className='specific--item--additional--detail'>
                                            <p className='item--price'>Price: ${info.price}</p>
                                            <p className='item--quantity'>Quantity: {info.quantity}</p>
                                            <p className='item--delivery'>Shipping fee: ${info.deliveryCharges}</p>
                                            <p className='item--total--price'>Total: ${info.totalPrice + info.deliveryCharges}</p>
                                            <img src={deleteIcon} alt='delete button' className='deleteItemFromInventory' onClick={() => removeThisItem(info)} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>

                <aside className='inventory__items__bill'>
                    <h3 className='item__bills__order__summary'>Order Summary</h3>
                    <div className='bill__items'>
                        <h5>Subtotal: <span style={{fontSize: '.75rem'}}>(total {totalItem} items)</span></h5>
                        <h5>${subTotal}</h5>
                    </div>
                    <div className='bill__items'>

                        <h5>Delivery Charges:</h5>
                        <h5>${deliveryCharges}</h5>
                    </div>
                    <div className='bill__items'>

                        <h5>Total:</h5>
                        <h5>${total}</h5>
                    </div>
                    <button className='proceed'>Proceed to checkout</button>
                </aside>


            </div>
        </ section >
    )
}
export default Inventory