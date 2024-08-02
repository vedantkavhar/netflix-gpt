import React from 'react';
import 'remixicon/fonts/remixicon.css'
import lang from '../Utils/languageConstant';
import { useSelector } from 'react-redux';
const GptSearchBar=() =>{
    const langKey =useSelector(store => store.config.lang);

    return (
        <div className="pt-[10%] flex justify-center ">
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input 
                type="text" 
                className="p-3 m-3 col-span-9 text-black text-2xl" 
                placeholder={lang[langKey].GptSearchPlaceholder}/>

                <button className='rounded-lg text-white py-2 px-3 bg-red-700 m-3 col-span-3 text-2xl '><i class="ri-search-line"></i>{" "}
                {lang[langKey].search}
                </button> 
            </form>
        
        </div>
    )
};

export default GptSearchBar;