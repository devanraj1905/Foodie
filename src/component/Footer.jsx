import React from 'react'

export function Footer() {
  return (
    <div className='bg-orange-600 absolute w-full text-white tracking-wider'>
      <div className='flex justify-around'>
        <div className='flex flex-col'>
          <a href="/">Home</a><a href="#category">Categories </a><a href="/category/vegetarian">Veg-Food</a><a href="/category/beef">Non-veg</a>
        </div>
        <div className='flex flex-col'>
          <a href="/category/chicken">Chicken</a>
          <a href="/category/beef">Beef</a>
          <a href="/category/seafood">Seafood</a>
        </div>
        <div className='text-lg'><p>Media:</p>
          <div className=''>
          <i className="fa-brands fa-facebook "></i>
          <i className="fa-brands fa-instagram m-2"></i>
          <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <p className='m-2 text-center border-t'>&copy; Foodie @2026.inc </p>
    </div>
  )
}

