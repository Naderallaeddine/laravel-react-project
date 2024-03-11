import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const onSubmit=(ev)=>{
        ev.preventDefault();
    }
  return (
    <div className='login-signup-form animated fadeInDown'>
        <div className='form'>
            <form onSubmit={onSubmit}>
                <h1 className='title'>
                    Register for free
                </h1>
                <input type='text' placeholder='Full Name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Password Confrmation'/>
                <button className='btn btn-block'>Login</button>
                <p className='message'>
                    Already Registered? <Link to={'/login'}>SignIn</Link>
                </p>
            </form>
        </div>

    </div>
  )
}
