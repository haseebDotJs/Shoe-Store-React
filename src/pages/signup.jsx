import { Link } from 'react-router-dom'
import './signup.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

import ShowPassword from './form-images/iconfinder_eye1_6351969.png'
import HidePassword from './form-images/iconfinder_eye2_6351930.png'

const Signup = () => {

    const [password, setPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)
    const navigate = useNavigate();
    let passwordField = {
        type: password ? 'text' : 'password',
        image: password ? ShowPassword : HidePassword
    }
    let confirmPasswordField = {
        type: confirmPassword ? 'text' : 'password',
        image: confirmPassword ? ShowPassword : HidePassword
    }


    const schema = Yup.object().shape({
        username: Yup
            .string()
            .required('Field is required!')
            .min(8, 'Minimum 8 characters')
            .max(12, 'Maximum 12 characters'),

        email: Yup
            .string()
            .required('Field is required!'),
        password: Yup
            .string()
            .required('Field is required!')
            .min(8, 'Minimum 8 characters')
            .max(16, 'Maximum 16 characters')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/, "Password must contain upper lower and special chars"),

        confirmPassword: Yup
            .string()
            .required('Field is required!')
            .oneOf([Yup.ref('password'), null], 'Password do not match')
    })

    const { register, handleSubmit, errors, reset } = useForm({
        // mode: 'onTouched',
        resolver: yupResolver(schema),
    })

    const onSubmit = (e) => {
        localStorage.setItem('user-form', JSON.stringify(e))
        reset()
        navigate('/login')
    }
    const handleChange = (e) => {
        e.target.value = e.target.value.replace(/\s/g, '')
    }
    return (
        <main id='signup--main' >
            <div className='container'>
                <form className='form--wrapper' onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor='user-name'>Username</label>
                    <div className='formField'>
                        <input type="text" name='username' className='signup__form__field' id='user-name' ref={register} onChange={handleChange} />
                        {errors.username && <p className='errorFound'>{errors.username.message}</p>}
                    </div>

                    <label htmlFor='email'>Email</label>
                    <div className='formField'>
                        <input type="email" name='email' className='signup__form__field' id='email' ref={register} onChange={handleChange} />
                        {errors.email && <p className='errorFound'>{errors.email.message}</p>}
                    </div>



                    <label htmlFor='password'>Password</label>
                    <div className='formField'>
                        <div className='password'>
                            <input type={passwordField.type} name='password' className='signup__form__field' id='password' ref={register} onChange={handleChange} />
                            <img src={passwordField.image} style={{ color: 'blue', width: '1em', height: '1em', marginLeft: '.5em' }} alt='Hideshow password' onClick={() => setPassword(!password)} />
                        </div>
                        {errors.password && <p className='errorFound'>{errors.password.message}</p>}
                    </div>


                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <div className='formField'>
                        <div className='password'>
                            <input type={confirmPasswordField.type} name='confirmPassword' className='signup__form__field' id='confirm-password' ref={register} onChange={handleChange} />
                            <img src={confirmPasswordField.image} style={{ color: 'blue', width: '1em', height: '1em', marginLeft: '.5em' }} alt='show password' onClick={() => setConfirmPassword(!confirmPassword)} />
                        </div>
                        {errors.confirmPassword && <p className='errorFound'>{errors.confirmPassword.message}</p>}
                    </div>

                    <button type='submit' className='submit'>Signup</button>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>


                </form>
            </div>
        </main>
    )
}
export default Signup