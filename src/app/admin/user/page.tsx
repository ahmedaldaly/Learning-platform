import React from 'react'
import Fetch from './Fetch'
import { delay } from '@/components/lip/delay'
const page = async () => {
  await delay(2000)
  return (
    <div className=' w-full grid mt-20  '>
      <h1 className=' text-center my-5 font-bold text-1xl text-gray-500'>All Users</h1>
      <Fetch/>
    </div>
  )
}

export default page