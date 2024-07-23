import Browse from "./Browse";
import Header from "./Header";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import {auth} from "../Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";


const Body=()=>{
    const dispatch=useDispatch();
    const Approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/header",
            element:<Header/>
        },

    ]);


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
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
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());//when sign out user removed from store
            }
          });

    },[]);

    return (
        <div>
            <RouterProvider router={Approuter}/>;
        </div>
    );
};

export default Body;