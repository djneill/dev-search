import React from 'react'
import Image from 'next/image'

interface UserProfile {
    login: string
    avatar_url: string
    name: string
    bio: string
    public_repos: number
    followers: number
    following: number
    location: string
    blog: string
    twitter_username: string
    company: string
    created_at: string
    html_url: string
}

interface ProfileCardProps {
    userProfile: UserProfile | null
}

const shortenUrl = (url: string) => {
    // Remove the protocol from the URL
    return url.replace(/(^\w+:|^)\/\//, '')
}

export default function Mobile({ userProfile }: ProfileCardProps) {
    if (!userProfile) return null

    return (
        <div className="p-8 rounded-lg shadow-md w-320 md:w-[570px] lg:w-[730px] bg-[#FEFEFE] dark:bg-[#1E2A47]">
            <div className="flex md:gap-10 gap-6 items-start">
                <div className="flex-shrink-0 self-center">
                    <Image
                        src={userProfile.avatar_url}
                        alt='user avatar'
                        width={117}
                        height={117}
                        className='rounded-full w-[70px] h-[70px] md:w-[117px] md:h-[117px]'
                    />
                </div>
                <div className="flex flex-col justify-start w-full">
                    <div className="flex md:flex-col md:justify-start lg:flex-row lg:items-center lg:justify-between  mb-2">
                        <h2 className="text-2xl font-bold md:mb-2">{userProfile.name}</h2>
                        <p className='hidden lg:flex lg:items-center'>Joined {new Date(userProfile.created_at).toLocaleDateString()}</p>
                    </div>
                    <p className='text-[#0079FF] mb-4 md:w-full'><a href={userProfile.html_url} target='_blank'>@{userProfile.login}</a></p>
                    <p className='lg:hidden'>Joined {new Date(userProfile.created_at).toLocaleDateString()}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center w-full mt-2 md:mt-6">
                <p className="mt-6 md:mt-0">{userProfile.bio || 'This profile has no bio'}</p>
                <div className="grid grid-cols-3 gap-4 p-4 bg-[#F6F8FF] dark:bg-[#141D2F] rounded-lg text-center mt-6 mb-4">
                    <div className="text-center">
                        <p className="text-sm">Repos</p>
                        <p className="text-xl font-bold">{userProfile.public_repos}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">Followers</p>
                        <p className="text-xl font-bold">{userProfile.followers}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">Following</p>
                        <p className="text-xl font-bold">{userProfile.following}</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2 mt-6">
                    <div className="flex items-center mb-4">
                        <Image
                            src="/assets/icon-location.svg"
                            alt="Location Icon"
                            width={20}
                            height={20}
                            className="mr-4"
                        />
                        <p className={userProfile.location ? '' : 'text-[#979797]'}>
                            {userProfile.location || 'Not Available'}
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <Image
                            src="/assets/icon-twitter.svg"
                            alt="Twitter Icon"
                            width={20}
                            height={20}
                            className="mr-4"
                        />
                        <p className={userProfile.twitter_username ? '' : 'text-[#979797]'}>
                            {userProfile.twitter_username ? <a href={`https://twitter.com/${userProfile.twitter_username}`} target='_blank'>@{userProfile.twitter_username}</a> : 'Not Available'}
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <Image
                            src="/assets/icon-website.svg"
                            alt="Website Icon"
                            width={20}
                            height={20}
                            className="mr-4"
                        />
                        <p className={userProfile.blog ? '' : 'text-[#979797]'}>
                            {userProfile.blog ? <a href={userProfile.blog} target='_blank'>{shortenUrl(userProfile.blog)}</a> : 'Not Available'}
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <Image
                            src="/assets/icon-company.svg"
                            alt="Company Icon"
                            width={20}
                            height={20}
                            className="mr-4"
                        />
                        <p className={userProfile.company ? '' : 'text-[#979797]'}>
                            {userProfile.company || 'Not Available'}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
