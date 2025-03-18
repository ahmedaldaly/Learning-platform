import React from 'react'
import FetchData from './FetchData'
import { delay } from '@/components/lip/delay'
const page = async() => {
   await delay(2000)
  return (
    <div className='w-full text-center mt-20'>
      <h1 className='text-4xl font-bold text-gray-500'>All Corses</h1>
      <FetchData/>
    </div>
  )
}

export default page
