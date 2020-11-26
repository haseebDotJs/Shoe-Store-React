import {memo} from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
    console.log('products compo - rendering');
    return (
        <Outlet />
    )
}

export default memo(Product)