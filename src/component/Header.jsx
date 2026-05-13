import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div className='fixed w-screen z-15'>
      <div className='flex justify-between p-5 bg-orange-600 text-white items-center'>
        <h3 className='text-white font-bold title text-6xl'>Foodie</h3>
        <Link to={'/'} className='text-xl font-sans'><i className  ="fa-regular fa-house m-2"></i>Home</Link>
      </div>
    </div>
  )
}

