import React, { useEffect, useState } from 'react'
import img from '/src/assets/rest.jpg'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
export function CategoryMeals() {
 
  

  const [food, setFood] = useState([])
  const categories = [
    "Vegetarian",
    "Chicken",
    "Beef",
    "Seafood",

  ]
  useEffect(() => {

    categories.forEach((category) => {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => {
          setFood((prev) => ({
            ...prev,
            [category]: res.data.meals,
          }))
        })
        .catch(err => console.log(err)
        )

    }
    )

  }, [])

  return (
    <div className='flex flex-col justify-center items-center bg-gray-200 pt-24 ' id='category'>

      <div className='w-3/4 '>
        <p className='text-center p-5 font-bold text-5xl text-orange-500 '
          style={{
            textShadow: 'black 1px 1px'
          }}>Food Categories</p>
        {
          categories.map((category) => (
            <div key={category}>
              <div className='my-10 bg-white'>
                <p className='font-bold text-orange-600 text-3xl p-4'>{category}</p>
                <div className='shadow-2xl flex '>
                  <div className='flex flex gap-7 overflow-auto justify-center items-center m-6'>
                    {
                      food[category]?.map((foods) => (
                        <Link to={`/category/${category.toLowerCase()}`} className='flex flex-col justify-center items-center'
                          key={foods.idMeal}>
                          <div className='w-50 h-50'>
                            <img src={foods.strMealThumb} alt="" className='rounded-lg' />
                          </div>
                          <p  className='text-overflow1 mx-2 stretched-link'>{foods.strMeal}</p>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>

  )
}

