"use client"
import { Crown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TopCards = () => {
  return (
    <div className='flex relative top-10'>
      <div className='flex p-5 text-cyan-50 font-bold items-center flex-col bg-cyan-600 rounded-tl-2xl rounded-bl-2xl h-20'>
        <Image src="/assests/2nd.png" width={70} height={70} className='absolute -top-14'/>
        <span className='absolute -top-0 w-5 h-6 flex justify-center rounded-t-full rounded-b-full' style={{backgroundColor:'grey'}}>2</span>
        <span>Jackson</span>
        <span>1847</span>
      </div>
      <div className='flex p-5 rounded-tr-2xl rounded-tl-2xl text-cyan-50 font-bold items-center flex-col bg-cyan-600 relative border h-32 -top-12'>
        <Image src="/assests/1st.png" width={70} height={70} className='absolute -top-12'/>
        <Crown className='absolute -top-20' size={32} color='#ffbf00'/>
        <span className='relative -top-3 w-5 h-6 flex justify-center rounded-t-full rounded-b-full' style={{backgroundColor:'#ffbf00'}}>1</span>
        <span className='relative top-3'>Eiden</span>
        <span className='relative top-3'>2430</span>
      </div>
      <div className='flex flex-nowrap p-5 text-cyan-50 font-bold flex-col items-center bg-cyan-600 h-20 rounded-br-2xl rounded-tr-2xl'>
        <Image src="/assests/3rd.png" width={70} height={70} className='absolute -top-14'/>
        <span className='absolute -top-0 w-5 h-6 flex justify-center rounded-t-full rounded-b-full' style={{backgroundColor:'brown'}}>3</span>
        <span>Emma Aria</span>
        <span>1674</span>
      </div>
    </div>
  )
}

export default TopCards