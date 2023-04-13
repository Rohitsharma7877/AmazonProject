import React, { useState } from 'react'
import './signin_signup.css'
import { NavLink } from 'react-router-dom'



const SignIn = () => {

const [logdata, setData] = useState({
  email:"",
  password:""
})
console.log(logdata);

const adddata=(e)=>{
  const {name,value}=e.target;
  setData(()=>{
    return {
      ...logdata,
      [name]:value
    }
  })
  // console.log(e.target.value);
}


  return (
    <>
    <section>
      <div className='sign_container'>
      <div className='sign_header'>
      <img src='./blacklogoamazon.png' alt='logo' />
      </div>
      <div className='sign_form'>
      <form>
        <h1>Sign-In</h1>
          <div className='form_date'>
            <label htmlFor='email'>Email</label>
            <input type='text'
            onChange={adddata}
            value={logdata.email}
             placeholder='Enter your email' name='email' id='email'/>

        </div>
        <div className='form_date'>
            <label htmlFor='password'>Password</label>
            <input type='password'
             onChange={adddata}
             value={logdata.password}
             placeholder='At least 6 char' name='password' id='password'/>

        </div>
        <button className='signin_btn'>Continue</button>
      </form>

      </div>
      <div className='create_accountinfo'>
      <p>New To Amazon</p>
      <NavLink to='/register'><button>Create Your amazon account</button></NavLink> 

      </div>

      </div>
    </section>
    </>
  )
}

export default SignIn