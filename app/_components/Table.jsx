import React from 'react'
import {tabledata} from '../../data/index'
import { TrendingDown, TrendingUp } from 'lucide-react'

const Table = () => {
  return (
    <div className='flex flex-col min-w-96 bg-cyan-700 rounded-xl p-10 gap-5 text-cyan-50 font-bold'>
      <hr />
      {tabledata.map(data=>(
        <>
        <div key={data.id} className='flex gap-12 p-0 items-center justify-between'>
          <span className='rounded-full border-2 p-2 border-l-blue-200'>#{data.rank}</span>
          <span>{data.name}</span>
          <span><span>{data.points}</span><span>{data.status==1?<TrendingUp color='lawngreen'/>:<TrendingDown color='orangered'/>}</span></span>
        </div>
        <hr />
        </>
      ))}
    </div>
  )
}

export default Table