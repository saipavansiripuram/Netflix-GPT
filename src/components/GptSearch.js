import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesions from './GptMovieSuggesions'
import { BACKGROUND } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className="fixed w-full -z-10">
        <img
          className=" h-screen object-cover md:w-full"
          src={BACKGROUND}
          alt="background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>
        <div className=''>
     <GptSearchBar/>
     <GptMovieSuggesions/>
    </div>
    </>
  )
}

export default GptSearch