'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface SearchBarProps {
    onSearch: (searchTerm: string) => void
    noResults: boolean
}

export default function SearchBar({ onSearch, noResults }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(searchTerm)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch(e as unknown as React.FormEvent)
        }
    }
    return (
        <div className='relative flex justify-center items-center dark:bg-[#1E2A47] shadow-md rounded-lg h-16 w-320 md:w-[570px] lg:w-[730px]'>
            <div className="flex items-center pl-8">
                <Image
                    src={'/assets/icon-search.svg'}
                    alt='search icon'
                    width={24}
                    height={24}
                    className=''
                />
            </div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Search GitHub username...'
                className='flex-grow px-4 py-2 bg-transparent outline-none w-full'
            />
            {noResults && (
                <p className='absolute right-28 text-red-500'>No results</p>
            )}
            <button
                className='bg-[#0079FF] hover:bg-[#60ABFF] text-white py-2 px-4 rounded-lg mr-2'
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    )
}
