import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Search() {
  const [search, setSearch] = useState("")
  const [meal, setMeal] = useState([])
  useEffect(() => {
    if (search.trim === "") {
      setMeal([])
    }
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => setMeal(res.data.meals || []))
      .catch(err => console.log(err1

      )
      )
  })

  return (
    <div className='bg-gray-200 pt-25 '>
      <div className='flex items-center justify-center'>
        <div className='relative  flex'>
          <input type="text" placeholder='Search...'
            onChange={(e) => { setSearch(e.target.value) }}  className='shadow-xl rounded-full lg:w-150 sm:w-100 h-10 m-10 p-5 outline-none bg-white/80' />
          <i className="fa-solid fa-magnifying-glass absolute top-13 right-13  "></i></div></div>
      <div className=''>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10 mb-3  m-5'>
          {
                 meal.map((meals) => (
              <div className='flex flex-col  justify-around items-center '>
                <Link to={`/meal/${meals.idMeal}`} className='shadow-xl w-60 h-70 flex flex-col  justify-center items-center '>
                  <div className='w-50 h-50'>
                    <img src={meals.strMealThumb} alt="" className='rounded-xl' />
                  </div>
                  <p>{meals.strMeal}</p>
                  <p>{meals.strCountry}</p>
                  <p>{meals.strArea}</p>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

