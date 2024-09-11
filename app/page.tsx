import React from 'react'
import Navbar from './_components/Navbar'
import Switch from './_components/Switch'
import Table from './_components/Table'
import TopCards from './_components/TopCards'

const page = () => {
  return (
    <div className='bg-teal-50 min-h-screen flex flex-col items-center gap-10'>
      <Navbar/>
      <Switch/>
      <div className='hidden md:flex flex-row items-center justify-evenly w-full p-5'>
        <TopCards />
        <Table />
      </div>
      <div className='md:hidden flex flex-col relative top-20 gap-10 justify-center items-center pb-10'>
        <div className='flex items-center w-full justify-center'>
          <TopCards />
        </div>
          <Table />
      </div>
    </div>
  )
}

export default page