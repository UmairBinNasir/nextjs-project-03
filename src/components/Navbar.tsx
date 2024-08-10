import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex items-center justify-center m-10 space-x-3 sm:space-x-10'>
        <Link className='hover:text-slate-400' href="/">Home</Link>
        <Link className='hover:text-slate-400' href="/services">Services</Link>
        <Link className='hover:text-slate-400' href="/blog">Blog</Link>
        <Link className='hover:text-slate-400' href="/about">About</Link>
        <Link className='hover:text-slate-400' href="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar
