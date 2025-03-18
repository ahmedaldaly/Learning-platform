import React from 'react'
import Form from './Form'
import { delay } from '@/components/lip/delay'
const page = async() => {
  await delay(2000)
  return (
    <div className='w-full text-center mt-20'>
      <h1>Add Category</h1>
      <Form/>
    </div>
  )
}

export default page