import React from 'react'
import Fetch from './FetchData'
import { delay } from '@/components/lip/delay'
const page =async() => {
    await delay(2000)
  return (
    <div className='w-full text-center mt-20'>
      <h1>All Category</h1>
      <Fetch/>
    </div>
  )
}

export default page