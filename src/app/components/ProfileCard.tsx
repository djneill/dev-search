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
}

interface ProfileCardProps {
    userProfile: UserProfile | null
}

const shortenUrl = (url: string) => {
    // Remove the protocol from the URL
    return url.replace(/(^\w+:|^)\/\//, '')
}

export default function ProfileCard({ userProfile }: ProfileCardProps) {
    if (!userProfile) return null

    return (
        <div className="p-8 rounded-lg shadow-md w-80 md:w-[570px] lg:w-[730px] bg-[#FEFEFE] dark:bg-[#1E2A47]">
            <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                    <Image
                        src={userProfile.avatar_url}
                        alt='user avatar'
                        width={117}
                        height={117}
                        className='rounded-full'
                    />
                </div>
                <div className="flex flex-col justify-start w-full">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-2xl font-bold">{userProfile.name}</h2>
                        <p>Joined {new Date(userProfile.created_at).toLocaleDateString()}</p>
                    </div>
                    <p className='text-[#0079FF] mb-4'>@{userProfile.login}</p>
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
                    <div className="grid grid-cols-2 gap-2 mt-6">
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
                                {userProfile.twitter_username ? `@${userProfile.twitter_username}` : 'Not Available'}
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
                                {userProfile.blog ? <a href={userProfile.blog}>{shortenUrl(userProfile.blog)}</a> : 'Not Available'}
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
        </div>
    )
}
