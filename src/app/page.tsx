'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Header from '@/app/components/Header'
import SearchBar from "@/app/components/SearchBar"
import ProfileCard from "./components/ProfileCard";

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


export default function Home() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    fetchUserData('octocat')
  }, [])

  const fetchUserData = async (username: string) => {
    setNoResults(false)
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (!response.ok) {
        setNoResults(true)
        setUserProfile(userProfile)
        return
      }
      const data = await response.json()
      setUserProfile({
        login: data.login,
        avatar_url: data.avatar_url,
        name: data.name,
        bio: data.bio,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        location: data.location,
        blog: data.blog,
        twitter_username: data.twitter_username,
        company: data.company,
        created_at: data.created_at,
        html_url: data.html_url
      })
    } catch (error) {
      setNoResults(true)
      setUserProfile(userProfile)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-10 justify-center">
      <main className="flex flex-col items-center justify-center px-4 w-80 md:w-[570px] lg:w-[730px]">
        <Header />
        <div className="mt-8">
          <SearchBar onSearch={fetchUserData} noResults={noResults} />
        </div>
        <div className="mt-8">
          <ProfileCard userProfile={userProfile} />
        </div>
      </main>
    </div >
  );
}
