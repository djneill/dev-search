import React from 'react'
import { spaceMono } from '@/app/lib/font'

export default function Header() {
    return (
        <div className='flex justify-between  container items-center w-80 md:w-[570px] lg:w-[730px]'>
            <h1 className={`${spaceMono.className}`}>devfinder</h1>
            <div className="flex justify-center items-center">
                <h3 className='text-[#4B6A9B] uppercase mr-4'>dark</h3>
                <img src="./assets/icon-moon.svg" alt="" className='p-2' />
            </div>
        </div>
    )
}
