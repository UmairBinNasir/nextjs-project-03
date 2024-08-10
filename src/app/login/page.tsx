import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center justify-center space-y-10 p-20'>
      <input className='bg-transparent border-b w-96 p-3 rounded-lg' required type="text" placeholder='Enter Your Name' />
      <input className='bg-transparent border-b w-96 p-3 rounded-lg' required type="email" placeholder='Enter Your Email' />
      <input className='bg-transparent border-b w-96 p-3 rounded-lg' required type="password" placeholder='Enter Your Password' />
      <Link className='text-blue-600' href="">Forgot Email or Password</Link>
      <button type='submit' className='bg-transparent border-2 w-96 rounded-lg border-purple-400 p-2'>Login</button>
    </div>
  )
}

export default page
