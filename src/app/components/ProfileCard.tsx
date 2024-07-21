import React from 'react'
import Image from 'next/image'

export default function ProfileCard() {
    return (
        <div className="bg-[#1E2A47] p-8 rounded-lg shadow-md w-80md:w-[570px] lg:w-[730px]">
            <div className="flex gap-6 items-center">
                <div className="flex justify-items-start w-1/5">
                    <Image
                        src={'/assets/favicon-32x32.png'}
                        alt='user avatar'
                        width={117}
                        height={117}
                        className='rounded-full'
                    />
                </div>
                {/* Card Header */}
                <div className="flex flex-col justify-start w-4/5">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold text-white">
                            The Octocat
                        </h2>
                        <p className="text-white mt-2">Joined 25 Jan 2011</p>
                    </div>
                    <p className='text-[#0079FF]'>@octocat</p>
                    <p className="text-white mt-6 md:mt-0">This profile has no bio</p>
                    {/* Info Grid */}
                    <div className="grid grid-cols-3 gap-4 bg-[#141C2F] p-4 rounded-lg mt-6">
                        <div className="text-center">
                            <p className="text-white text-sm">Repos</p>
                            <p className="text-white text-xl font-bold">8</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-sm">Followers</p>
                            <p className="text-white text-xl font-bold">3938</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-sm">Following</p>
                            <p className="text-white text-xl font-bold">9</p>
                        </div>
                    </div>

                    {/* Social Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-6">
                        <div className="flex items-center">
                            <Image
                                src="/assets/icon-location.svg"
                                alt="Location Icon"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            <p className="text-white">San Francisco</p>
                        </div>
                        <div className="flex items-center">
                            <Image
                                src="/assets/icon-website.svg"
                                alt="Website Icon"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            <p className="text-white">https://github.blog</p>
                        </div>
                        <div className="flex items-center">
                            <Image
                                src="/assets/icon-twitter.svg"
                                alt="Twitter Icon"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            <p className="text-white">Not Available</p>
                        </div>
                        <div className="flex items-center">
                            <Image
                                src="/assets/icon-company.svg"
                                alt="Company Icon"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            <p className="text-white">@github</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}