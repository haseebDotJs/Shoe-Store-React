import {memo} from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <Outlet />
    )
}

export default memo(Products)