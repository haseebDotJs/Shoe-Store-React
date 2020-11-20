import { Outlet } from 'react-router-dom'

const Product = (props) => {
    console.log('props ', props);
    return (
        <Outlet />
    )
}

export default Product