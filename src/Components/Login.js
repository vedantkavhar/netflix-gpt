import React from 'react';
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [signinform ,setsigninform] = useState(true);
  const handlesign=()=>{
    setsigninform(!signinform);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg" alt="bg" />
         </div>
          
         <form className= "absolute bg-black opacity-80 w-3/12 mx-auto my-36 left-0 right-0 rounded-lg  text-white px-14 py-10 ">
            <h1 className='font-bold text-3xl p-2  '> { signinform ? "Sign in" : "Sign up" }</h1>
            {!signinform && <input type="text" placeholder='Full name' className='px-4 p-2 m-2 rounded-md  bg-black border border-white ' />}
            <input type="text" placeholder='Email or mobile number ' className='px-4 p-2 m-2 rounded-md  bg-black border border-white ' />
            <input type="password" placeholder='Password' className='px-4 p-2 m-2 rounded-md  bg-black border border-white ' />
            <button className='bg-red-500 p-2 m-2  rounded-md w-full'>{ signinform ? "Sign in" : "Sign up" }</button>
            <h2 className='p-2 cursor-pointer' onClick={handlesign}>{signinform ? "New to Netflix? Sign up now": "Already registered ? Sign in now"}</h2>
            
         </form> 
    </div>
  )
}

export default Login