import React from 'react'
import Image from 'next/image'

export default function SearchBar() {
    return (
        <div className='flex justify-center items-center bg-white shadow-md rounded-lg h-16 w-80 md:w-[570px] lg:w-[730px]'>
            <div className="flex items-center px-4">
                <Image
                    src={'/assets/icon-search.svg'}
                    alt='search icon'
                    width={24}
                    height={24}
                    className='w-6 h-6'
                />
            </div>
            <input
                type="text"
                placeholder='Search GitHub username...'
                className='flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none w-full'
            />
            <button className='bg-[#0079FF] text-white py-2 px-4 rounded-lg mr-2'>
                Search
            </button>
        </div>
    )
}
