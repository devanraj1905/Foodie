  import React, { useEffect, useRef, useState } from 'react'
  import img from '/src/assets/rest.jpg'
  import axios from 'axios'
  import { Link, useNavigate, useParams } from 'react-router-dom'
  export function CategoryMeals() {
  
    

    const [food, setFood] = useState({})
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
          <p className='text-center p-5 font-bold text-5xl  text-orange-500 '
            style={{
              textShadow: 'black 1px 1px'
            }}>Food Categories</p>
          {
            categories.map((category) => (
              <div key={category}>
                <div className='my-10 bg-white '>
                  <p className='font-bold text-orange-600 text-3xl p-4'>{category}</p>
                  <div className='shadow-2xl  flex '>
                    <div className='flex gap-7  overflow-auto justify-center items-center m-6'>
                      {
                        <AutoScroll foods={food[category] || []} category={category} />
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
  function AutoScroll({foods=[] , category}){
    const sliderRef=useRef()
    
    useEffect(()=>{
  const slider = sliderRef.current
  if(!slider) return
  let interval
  const startScroll=()=>{
    interval=setInterval(()=>{
      slider.scrollLeft +=1
      if(Math.ceil(slider.scrollLeft)
        +slider.clientWidth>=slider.scrollWidth){
        slider.scrollLeft=0
      }

    },10)
    }    
    const stopScroll=()=>{
      clearInterval(interval)
    }
    startScroll()

      slider.addEventListener("mouseenter",stopScroll)
      slider.addEventListener("mouseleave",startScroll)
    },[foods])
  return(
    <div  ref={sliderRef}
    className='flex gap-5 overflow-x-auto  p-4  '
    style={{
      scrollbarWidth:'none',
      msOverflowStyle:'none'
    }}>
        {
          foods.map((foods,index)=>(
          < Link to={`/category/${category.toLowerCase()}`} className='flex flex-col justify-center items-center min-w-[200px]'
                            key={index}>
                            <div className='w-f h-50'>
                              <img src={foods.strMealThumb} alt="" className='rounded-lg w-full h-full object-cover' />
                            </div>
                            <p  className='text-overflow1 mx-2'>{foods.strMeal}</p>
                          </Link>
          ))
        }
    </div>
  )
  }



