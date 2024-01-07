import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  
  const toogleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className=''>
      <Header/>
      <div className="absolute w-full ">
      <img className="w-full hidden md:block" src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      alt='background'/>
      </div>
      <form className='w-11/12 md:w-3/12 absolute p-12 mx-auto my-44 right-0 left-0  bg-[rgba(0,0,0,.75)] bg-opacity-70 rounded-xl text-white'>
      <h1 className='text-3xl text-white font-medium p-4' >{isSignInForm ? "Sign In " : "Sign Up"}</h1>
      {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-2 w-full rounded-lg bg-[#333]"/>)}
      <input type="text" placeholder="Email Address" className="p-4 my-2 w-full rounded-lg bg-[#333]"/>
      <input type="password" placeholder="Password" className="p-4 my-2  w-full rounded-lg bg-[#333]"/>
      <button className="p-4 my-6 bg-[#e50914] hover:bg-red-400 text-white  w-full rounded-lg" >{isSignInForm ? "Sign In " : "Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toogleSignInForm}>{isSignInForm? "New to Netflix? Sign Up now":"Already User? Sign In now"}</p>  
    </form>
    </div>
  )
}

export default Login
