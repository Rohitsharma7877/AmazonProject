import React, { useState } from 'react'
import './signin_signup.css'
import { Divider } from '@mui/material'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

const [udata,setData]=useState({
  fname:"",
  email:"",
  mobile:"",
  password:"",
  cpassword:""
})
console.log(udata);


const adddata = (e)=>{
  const {name,value} = e.target;
  
  setData(()=>{
    return{
      ...udata,
      [name]:value
    }
  })
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
        <h1>Create account</h1>
          <div className='form_date'>
            <label htmlFor='fname'>Name</label>
            <input type='text' 
            onChange={adddata}
              // onChange={(e)=>setData({...udata,fname:e.target.value})}
               value={udata.fname}
              name='fname' id='fname'/>
        </div>
        <div className='form_date'>
            <label htmlFor='email'>Email</label>
            <input type='text'
            onChange={adddata}
            // onChange={(e)=>setData({...udata,email:e.target.value})}
             value={udata.email}
             placeholder='Enter your email' name='email' id='email'/>
        </div>
        <div className='form_date'>
            <label htmlFor='number'>Mobile</label>
            <input type='number' 
            onChange={adddata}
            // onChange={(e)=>setData({...udata,mobile:e.target.value})}
             value={udata.mobile}
             name='mobile' id='mobile'/>
        </div>
        <div className='form_date'>
            <label htmlFor='password'>Password</label>
            <input type='password' 
            onChange={adddata}
            // onChange={(e)=>setData({...udata,password:e.target.value})}
             value={udata.password}
             placeholder='At least 6 char' name='password' id='password'/>

        </div>
        <div className='form_date'>
            <label htmlFor='cpassword'>Password Again</label>
            <input type='password'
            onChange={adddata}
          //  onChange={(e)=>setData({...udata,cpassword:e.target.value})}
              value={udata.cpassword}
             name='cpassword' id='cpassword'/>

        </div>
        <button className='signin_btn'>Continue</button>
        
        <Divider />

        <div className="signin_info">
              <p>Already have an account?</p>
                  <NavLink to="/login">Sign in</NavLink>
                            </div>

      </form>

      </div>
      

      </div>
    </section>
    </>
  )
}

export default SignUp