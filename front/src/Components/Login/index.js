import React, { useState } from 'react'
import Api from '../../Api'

const Login = ({ setToken }) => {
  const [login, setLogin] = useState({ email: '', password: '' })
  
  const submit = async (e) => {
    e.preventDefault()
    const api = new Api()
    const response = await api.login(login)
    window.localStorage.setItem('likeit_token', response.token)
    setToken(response.token)
  }

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }

  return (
    <div className="login">
      <form onSubmit={submit} className="loginForm">
        <label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={login.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login