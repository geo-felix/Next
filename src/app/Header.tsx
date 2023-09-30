import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className=' flex justify-between p-5 bg-blue-500'>
        <p className='font-bold  text-white'>I am a Header</p>
        <Link href="/" className='px-2 py1  bg-white text-blue-500 rounded-lg'>Home</Link>
    </header>
  )
}

export default Header