import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.js'

function Login() {

    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to homepage...
                history.push('/');
            })
            .catch(e => alert(e.message))
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // created a user and logged in, redirect to homepage...
            })
            .catch(e => alert(e.message))


    }

    return (
        <div className='login'>
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login