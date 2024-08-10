import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center justify-center space-y-10 p-20'>
      <input className='bg-transparent border-b w-96 p-3 rounded-lg' required type="text" placeholder='Enter Your First Name' />
      <input className='bg-transparent border-b w-96 p-3 rounded-lg' required type="text" placeholder='Enter Your Last Name' />
      <input className='bg-transparent border-b w-96 p-3 rounded-lg' required type="email" placeholder='Enter Your Email' />
      <textarea  className='bg-transparent border-b w-96 p-3 rounded-md' required name="message" rows={3} id="message" placeholder='Enter Your Message...'></textarea>
      <button type='submit' className='bg-transparent border-2 w-96 rounded-lg border-purple-400 p-2'>Submit</button>
    </div>
  )
}

export default page
