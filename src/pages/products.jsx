import {memo} from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <Outlet />
    )
}

export default memo(Product)