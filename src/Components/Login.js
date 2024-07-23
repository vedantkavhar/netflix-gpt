import React from 'react';
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from '../Utils/Validate';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/UserSlice";


const Login = () => {
  const navigate=useNavigate();
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
          displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/108593325?v=4"
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
          navigate("/browse");

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
      navigate("/browse");
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
        <div className='absolute'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg" alt="bg" />
         </div>
          
         <form onSubmit={(e)=>e.preventDefault() } className= "absolute bg-black opacity-80 w-3/12 mx-auto my-36 left-0 right-0 rounded-lg  text-white px-14 py-10 ">
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