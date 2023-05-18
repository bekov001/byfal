import React from 'react'

export default function Register() {
  return (
    <form className="register-form">
    <p className='name'>Register</p>
    <LoginInput type="text" placeholder="Phone or email"/>
    <LoginInput type="password" placeholder="password"/>
    <LoginInput type="password" placeholder="password"/>

    <button>create</button>
    <p className="message">Already registered? <a href="#" onClick={h1}>Sign In</a></p>
    </form> 
  )
}
