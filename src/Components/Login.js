import React from 'react';
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from '../Utils/Validate';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/UserSlice";
import { LOGO, USER_AVATAR } from '../Utils/Constants';


const Login = () => {

  const [signinform ,setsigninform] = useState(true);

  //initially no err,if error then show it
  const [errorMessage, seterrorMessage]= useState(null);

  const dispatch=useDispatch();

  const name= useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handlesign=()=>{
    setsigninform(!signinform);
  }

  const handlevalidation=()=>{
    // console.log(email.current.value);
    // console.log(password.current.value);

    //get error
    const message =  checkValidate(email.current.value , password.current.value);
    seterrorMessage(message);
    if(message) return;
    //sign in sign up

    // sign up
    if(!signinform){
      // not sign in==signup 
      createUserWithEmailAndPassword(auth,email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // console.log(user);
        // ...
        updateProfile(user, {
          displayName: name.current.value , photoURL: USER_AVATAR
        }).then(() => {
          // Profile updated!
          // ...
          const {uid ,email ,displayName ,photoURL}= auth.currentUser;
          dispatch(
            addUser(
                {uid:uid, 
                email:email,
                displayName:displayName,
                photoURL:photoURL}));
         
        }).catch((error) => {
          // An error occurred
          // ...
          seterrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode+ "-"+ errorMessage);
        // ..
      });
      
    }
    else{
      // sign in 
      signInWithEmailAndPassword(auth,email.current.value , password.current.value).then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      console.log(user);
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode+ "-"+ errorMessage);
    });
    }
  }

  // let [cnt, setCnt]= useState(0);
  // const handleadd=()=>{
  //   cnt=cnt+1;
  //   setCnt(cnt);
  //   console.log(cnt);
  // };
  // const handlesub=()=>{
  //   cnt=cnt-1;
  //   setCnt(cnt);

  // }

  return (
    <div>
        <Header/>
        <div className='absolute w-[100%] '>
          <img className='h-screen object-cover w-[100%]' src={LOGO} alt="bg" />
         </div>
          
         <form onSubmit={(e)=>e.preventDefault() } className= "absolute bg-black opacity-80 w-full md:w-3/12 mx-auto my-36 left-0 right-0 rounded-lg  text-white px-14 py-10 ">
            <h1 className='font-bold text-3xl p-2  '> { signinform ? "Sign in" : "Sign up" }</h1>

            {!signinform && <input ref={name}
            type="text" 
            placeholder='Full name' 
            className='px-4 p-2 m-2 rounded-md  bg-black border border-white ' />}

            <input ref={email}
            type="text" 
            placeholder='Email or mobile number ' 
            className='px-4 p-2 m-2 rounded-md  bg-black border border-white ' />

            <input ref={password}
            type="password" 
            placeholder='Password' 
            className='px-4 p-2 m-2 rounded-md  bg-black border border-white ' />

            <p className="px-4 p-2 text-red-500">{errorMessage}</p>

            <button className='bg-red-500 p-2 m-2  rounded-md w-full' onClick={handlevalidation}>{ signinform ? "Sign in" : "Sign up" }</button>
            
            <h2 className='p-2 cursor-pointer' onClick={handlesign}>{signinform ? "New to Netflix? Sign up now": "Already registered ? Sign in now"}</h2>
            

            {/* <button onClick={handleadd}>addition :({cnt})</button>
            <button onClick={handlesub}>Subraction </button> */}
         </form> 
    </div>
  )
}

export default Login