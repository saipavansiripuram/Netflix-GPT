import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesions from './GptMovieSuggesions'
import { BACKGROUND } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className=''>
       <div className="absolute w-full -z-10">
        <img
          className="w-full hidden md:block"
          src={BACKGROUND}
          alt="background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>
     <GptSearchBar/>
     <GptMovieSuggesions/>
    </div>
  )
}

export default GptSearch