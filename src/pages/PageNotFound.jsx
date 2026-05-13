import React from 'react'
import img from '/src/assets/pnf.jpg'
import { Link } from 'react-router-dom'
export function PageNotFound() {
  return (
    <div>
        <div className='w-screen h-screen relative text-center'>
            
                <img src={img} className='w-full h-full object-cover' />
                <p className='absolute top-26 left-1/2 -translate-x-1/2 text-white text-5xl'>Page Not Found !!!</p>
            <Link to={'/'} className='absolute bottom-15 w-20 bg-red-500 p-2 rounded-xl -translate-x-10 text-white'>Go Back</Link>
        </div>
    </div>
  )
}

