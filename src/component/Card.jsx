import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Card() {

  const { name } = useParams();
  const [meal , setMeal] = useState([])
  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((res => {
        setMeal(res.data.meals)
      }))
      .catch((res) => console.log(res)
      )
  }, [name])
  if (!meal) {
    return <p>Loading...</p>
  }
  return (
    <div className='p-24  bg-gray-200'>
      <p className='text-5xl text-center p-10 text-orange-600'
       style={{
            textShadow: 'oklch(26.6% 0.079 36.259) 1px 1px'
          }}>Menu Card</p>
   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 ">
   
      {
        meal.map((meals)=>(
          
        <div className='flex items-center justify-center'>
          
         
          <Link to={`/meal/${meals.idMeal}`} className=' shadow-xl w-60 h-80 flex flex-col items-center justify-center'>
            <div className='w-50 h-50'>
              <img src={meals.strMealThumb}className='rounded-xl' />
            </div>

            <p className='text-overflow1'>{meals.strMeal}</p>
            
            <p>{meals.strCountry}</p>
            <p>{meals.strArea}</p>

          </Link>
          </div>
        ))

      }

        </div>


      </div>
    
  )
}

