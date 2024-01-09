import React from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang);

  return (
    <div className='pt-[14%] flex justify-center '>
        <form className='w-1/2  bg-gray-20 bg-transparent grid grid-cols-12 rounded-lg'>
            <input type="text" className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4  rounded-xl bg-red bg-red-700 text-white col-span-3'>{lang[langKey].search}</button>
        </form>
    </div>

  )
}

export default GptSearchBar