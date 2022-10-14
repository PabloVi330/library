import React, { useRef } from 'react'
import '../styles/Login.scss'
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
  const form = useRef(null);
  const handleSubmit = (e) => {
      event.preventDefault();
      const formData = new FormData(form.current);
      const data = {
        username: formData.get('email'),
        password: formData.get('password')
      }
      console.log(data);
  }
  return (
    <div className="login-login">
      <div className="login-form-container">
        <img src={logo} alt="logo" className="login-logo" />
        <h1 className="login-title">Wellcomne</h1>
        <form action="/" className="login-form" ref={form}>
          <label htmlFor="email" className="login-label">Email address</label>
          <input type="text" name="email" placeholder="platzi@example.cm" className="login-input input-email" />
          <label htmlFor="password" className="login-label">Password</label>
          <input type="password" name="password" placeholder="*********" className="login-input input-password" />
          <button className="login-primary-button login-button" onClick={handleSubmit} >
               Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="login-secondary-button signup-button">Sign up</button>
      </div>
    </div>
  )
}

export default Login