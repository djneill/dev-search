'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { spaceMono } from '@/app/lib/font'

export default function Header() {
    const [theme, setTheme] = useState('light') // Default to 'light' for server-side rendering
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const initialTheme = localStorage.theme ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(initialTheme);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                document.body.classList.add('dark');
                document.body.classList.remove('light');
            } else {
                document.documentElement.classList.remove('dark');
                document.body.classList.add('light');
                document.body.classList.remove('dark');
            }
            localStorage.theme = theme;
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prevTheme: string) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className='flex justify-between container items-center w-80 md:w-[570px] lg:w-[730px]'>
            <h1 className={`${spaceMono.className}`}>devfinder</h1>
            <div id="theme-selector" className="flex justify-center items-center cursor-pointer hover:text-[#90A4D4] dark:hover:text-black ">
                <h3 onClick={toggleTheme} className={`uppercase mr-4 ${theme === 'dark' ? 'text-[#FFFFFF] hover:text-[#90A4D4]' : 'text-[#4B6A9B] hover:text-black'}`}>
                    {theme === 'dark' ? 'light' : 'dark'}
                </h3>
                <Image
                    src={theme === 'dark' ? "/assets/icon-sun.svg" : "/assets/icon-moon.svg"}
                    alt="Theme Icon"
                    width={16}
                    height={16}
                    className={`cursor-pointer transition duration-300 ${theme === 'dark' ? 'hover:filter hover:brightness-110' : 'hover:filter hover:brightness-75'}`}
                    onClick={toggleTheme}
                />
            </div>
        </div>
    )
}
