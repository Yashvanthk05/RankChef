import { ChevronLeft, LayoutGrid } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='p-6 pt-10 flex flex-row items-center justify-between min-w-full'>
        <ChevronLeft size={36}/>
        <span className='font-bold text-3xl text-black'>Leaderboard</span>
        <LayoutGrid size={36}/>
    </div>
  )
}

export default Navbar