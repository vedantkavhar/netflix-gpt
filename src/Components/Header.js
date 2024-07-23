import React from 'react'
// import {CDN_IMG} from "../Utils/Constants";
import { useNavigate } from 'react-router-dom';
import {auth} from "../Utils/firebase"; 
import {  signOut } from "firebase/auth";
import { useSelector } from "react-redux";


const Header = () => {
    const navigate=useNavigate();

    // get img of useer an update from store 
    const user=useSelector(store => store.user);
    const handlesignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/"); 
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });

    }
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
            <img src={user?.photoURL}  className="w-10 h-10 " alt="user img" />
            <button className="font-bold bg-red-500 text-white  rounded-lg " onClick={handlesignout}>Sign out</button>
        </div>}
    </div>
  );
};

export default Header; 