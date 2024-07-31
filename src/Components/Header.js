import React, { useEffect } from 'react'
// import {CDN_IMG} from "../Utils/Constants";
import { useNavigate } from 'react-router-dom';
import {auth} from "../Utils/firebase"; 
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from '../Utils/UserSlice';


const Header = () => {
    const navigate=useNavigate();

    const dispatch=useDispatch();

    // get img of useer an update from store 
    const user=useSelector(store => store.user);
    const handlesignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/"); 
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });

    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid ,email ,displayName ,photoURL}= user;
              dispatch(
                addUser(
                    {uid:uid, 
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL}));
                //dispatch obj to store //when sign in user wiill be stored in app store
              // ...
              navigate("/browse");
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());//when sign out user removed from store
              navigate("/");
            }
          });

          return()=> unsubscribe();
          

    },[]);


  return (
    <div className="absolute flex justify-between items-center  bg-gradient-to-b from-black z-10 w-screen ">
    {/* logo */}
        <div className=" imglogo w-56 h-10 ml-28 ">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt=''/>
        </div>
        {/*  lang,sign in btn  */}
        {/* <div className='flex justify-between  m-2 mt-6 ml-[700px] w-60 text-white mr-28 h-12'>
            <div className="lang border border-white p-1 px-3 rounded-lg m-2">
                <button>Languages</button>
            </div>

            <div className="signin bg-red-600 p-1 px-3 rounded-lg m-2 ">
                <button>Sign in</button>
            </div>

        </div> */}
        {/* only show when sign in  ,*/}
        {user && <div className="pt-10 flex mx-10">
            <img src={user?.photoURL}  className="w-10 h-10 mx-1 " alt="user img" />
            <button className="font-bold bg-red-500 text-white  rounded-lg px-1 " onClick={handlesignout}>Sign out</button>
        </div>}
    </div>
  );
};

export default Header; 