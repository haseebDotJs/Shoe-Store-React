import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import ShowPassword from './form-images/iconfinder_eye1_6351969.png'
import HidePassword from './form-images/iconfinder_eye2_6351930.png'


const Login = ({items: setHeaderItems, login: [setLogin] }) => {
   console.log('headeritems', setHeaderItems);
    const [password, setPassword] = useState(false)
    const [empty, setEmpty] = useState({ condition: false, statement: '' })

    const navigate = useNavigate();
    let passwordField = {
        type: password ? 'text' : 'password',
        image: password ? ShowPassword : HidePassword
    }

    const schema = Yup.object().shape({
        username: Yup.string().required('Field is required!'),
        password: Yup.string().required('Field is required!')
    })

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onSubmit'
    })

    const onSubmit = (e) => {
        let formData = JSON.parse(localStorage.getItem('user-form') || {})
        if (formData) {
            if (formData.username === e.username && formData.password === e.password) {
                navigate('/')
                reset()
                setLogin(true)
                setHeaderItems(formData.username)
                localStorage.setItem('login', JSON.stringify(true))
                localStorage.setItem('userName', JSON.stringify(formData.username))
            }
            else if (formData.username === e.username && formData.password !== e.password) {
                setEmpty({ condition: true, statement: 'Password is not valid' })
            }
            else {
                setEmpty({ condition: true, statement: 'The user is not registered' })
            }
        }
        else {
            setEmpty({ condition: true, statement: 'The user is not registered' })
        }
    }
    const handleChange = (e) => {
        e.target.value = e.target.value.replace(/\s/g, '')
    }

    // console.log('errors ', errors ? '{} is not null' : '{} is null');
    return (
        <main id='login--main' >
            <div className='container'>
                <form className='form--wrapper--login' onSubmit={handleSubmit(onSubmit)}>
                    {empty.condition && <h3 className='errorFound'>{empty.statement}</h3>}

                    <label htmlFor='username'>Username</label>
                    <div className='formField'>
                        <input type="text"
                            name='username'
                            className='login__form__field'
                            id='username' ref={register}
                            onChange={handleChange}
                        />
                        {errors.username && errors.username.type === 'required' && <p className='errorFound'>{errors.username.message}</p>}
                    </div>

                    <label htmlFor='password'>Password</label>
                    <div className='formField'>
                        <div className='password'>
                            <input type={passwordField.type} name='password' className='login__form__field' id='password' ref={register} onChange={handleChange} />
                            <img src={passwordField.image} style={{ color: 'blue', width: '1em', height: '1em', marginLeft: '.5em' }} alt='Hideshow password' onClick={() => setPassword(!password)} />
                        </div>
                        {errors.password && errors.password.type === 'required' && <p className='errorFound'>{errors.password.message}</p>}
                    </div>
                    <button type='submit' className='login'>Login</button>
                    <p>Don't have an account? <Link to='/signup'>Signup</Link></p>

                </form>
            </div>
        </main>
    )
}
export default Login