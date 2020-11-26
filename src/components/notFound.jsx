import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
    console.log('not found - rendering');
    return (
        <div className='container not--found'>
            <h1 style={{ fontSize: '1rem' }}>Page Not Found.</h1>
            <Link to='/' >
                <button className='go--to--home' style={{
              
            }}>Go back to home</button></Link>
        </div >
    )
}
export default NotFound