import { Link } from 'react-router-dom'

const LoginFirst = () => {
    return (
        <div style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '0',
                backgroundColor: 'rgb(230,230,247)',
                textAlign: 'center',
                color: 'rgb(6, 15, 0)'

            }}>
            <h1 >You need to login first to see the products <span style={{ fontWeight: '100', textDecoration: 'underline' }}><Link to='/login'>Login</Link></span></h1>
        </div>
    )
}
export default LoginFirst