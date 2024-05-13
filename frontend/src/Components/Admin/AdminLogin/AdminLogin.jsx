import React from 'react'
import './AdminLogin.css'
import { Link } from 'react-router-dom'

export default function AdminLogin() {
  return (
    <div>
      <form onSubmit="" id="adform1">
      <h1 id='adt1'>Admin Login</h1><br /><br />
      <input type="text" name="username" id="adusername" placeholder='Username'/>
      <br /><hr id='adline'/><br />
      <input type="password" name="password" id="adpswd" placeholder='Password'/>
      <br /><hr id='line'/><br />
      <input type="submit" value={"Login"} id="adsubmit"/><br/>
      <Link to={'../register'}><button href="./register" id='adcrt'>Forgot Password</button></Link>
      </form>
    </div>
  )
}