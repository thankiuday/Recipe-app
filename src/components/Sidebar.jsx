import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Home, HomeIcon } from 'lucide-react'
const Sidebar = () => {
  return (
    <>
      <DeskTopSideBar />
      <MobileSideBar />
    </>
  )
}

export default Sidebar

// creating Desktop Component
const DeskTopSideBar = () => {
  return (
    <div className='p-3 md:p-3 border-right min-h-screen w-24 md:w-64 hidden sm:block'>
      <div className=' flex flex-col gap-20 sticky top-10 left-0'>
        <div className="w-full">
          <img src="/Mobile-logo.svg" alt="logo" className='hidden  md:block' />
          <img src="/Recipe-logo.svg" alt="logo" className='block md:hidden' />
        </div>
        <div className='flex flex-col items-center md:items-start gap-8'>
          <Link to={"/"} className='flex gap-1 '>
            <Home size={"24"} className='hover:fill-green-500 ' />
            <span className='font-bold hidden md:block hover:text-green-500 '>Home</span>
          </Link>
          <Link to={"/favorites"} className='flex gap-1'>
            <Heart size={"24"} className='hover:fill-green-500' />
            <span className='font-bold hidden md:block  hover:text-green-500' >Favorites</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

const MobileSideBar = () => {
  return (
    <div className='flex justify-center gap-10 border-t fixed w-full
    bottom-0 left-0 bg-white z-10 p-2 sm:hidden'>
      <Link to={"/"}>
        <Home size={"24"} className='cursor-pointer'></Home>
      </Link>
      <Link to={"/favorites"}>
        <Heart size={"24"} className='cursor-pointer'></Heart></Link>
    </div>
  )
}
