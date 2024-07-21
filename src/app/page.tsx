import Image from "next/image"
import Header from '@/app/components/Header'
import SearchBar from "@/app/components/SearchBar"
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-10 justify-center">
      <main className="flex flex-col items-center justify-center px-4 w-80 md:w-[570px] lg:w-[730px]">
        <Header />
        <div className="mt-8">
          <SearchBar />
        </div>
        <div className="mt-8">
          <ProfileCard />
        </div>
      </main>
    </div >
  );
}
