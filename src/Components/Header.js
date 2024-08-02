import React, { useEffect } from 'react'
// import {CDN_IMG} from "../Utils/Constants";
import { useNavigate } from 'react-router-dom';
import {auth} from "../Utils/firebase"; 
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from '../Utils/UserSlice';
import { toggleViewSearch } from '../Utils/gptSlice';
import { LOGO_ORG, SUPPORTED_LANGUAGES } from '../Utils/Constants';
import lang from '../Utils/languageConstant';
import { changeLanguage } from '../Utils/configSlice';

const Header = () => {
    const navigate=useNavigate();

    const dispatch=useDispatch();

    // get img of useer an update from store 
    const user=useSelector(store => store.user);

    const showGptSearch= useSelector(store => store.gpt.showGptSearch);

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

    const handletoggleclick=()=>{
      dispatch(toggleViewSearch());
    };

    const handleLanguageChange=(e)=>{
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value));
    }
  return (
    <div className="absolute flex justify-between items-center  bg-gradient-to-b from-black z-10 w-screen ">
    {/* logo */}
        <div className=" imglogo w-56 h-10 ml-16 ">
            <img src={LOGO_ORG} alt=''/>
        </div>

        {/*  lang,sign in btn  */}
        {/* only show when sign in  ,*/}
        {user && <div className="pt-10 flex mx-16">
          {showGptSearch &&
            <select className='rounded-lg px-2 mx-1 bg-gray-700 text-white' onChange={handleLanguageChange} >
              {SUPPORTED_LANGUAGES.map((lang )=> (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))} 
            </select>
          }

            <button className="bg-purple-500 text-white px-2 h-7 rounded-lg font-bold" onClick={handletoggleclick}>{ showGptSearch ? "Homepage" :"GPT Search"}</button>
            <img src={user?.photoURL}  className="w-9  mx-1 rounded-lg h-7" alt="user img" />
            <button className="font-bold bg-red-500 text-white  rounded-lg px-2 h-7" onClick={handlesignout}>Sign out</button>
        </div>}
    </div>
  );
};

export default Header; 