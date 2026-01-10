import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    console.log(langKey)
  return (
    <div className=" pt-[10%] flex justify-center">
        <form className='rounded-lg w-1/2 bg-black grid grid-cols-12' >
            <input type="text" className='p-4 m-4 col-span-9 bg-white' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='cursor-pointer col-span-3 m-4 py-2 px-2 bg-red-700 rounded-lg text-white'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar