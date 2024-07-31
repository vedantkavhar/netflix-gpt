import Browse from "./Browse";
import Header from "./Header";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const Body=()=>{
    
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


    
    return (
        <div>
            <RouterProvider router={Approuter}/>;
        </div>
    );
};

export default Body;