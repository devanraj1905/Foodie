import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Details() {
  const { id } = useParams()
  const [card, setCard] = useState([])
  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) =>
        setCard(res.data.meals[0]))
      .catch((err) => console.log(err)
      )
  }, [id])

  return (
    <div className='tracking-wider p-25  bg-gray-200'>

      <div className='flex flex-col justify-center items-center '>
        <p className='font-bold text-4xl text-orange-600 border-b w-full text-center border-black'>{card.strMeal}</p>

        <div className='lg:w-1/2 md:w-3/4 w-screen  flex flex-col justify-center items-center m-2'>

          <div className='w-100 h-100 m-3'>
            <img src={card.strMealThumb} className=' rounded-xl' />
          </div>
          <div>
            <p className='text-3xl text-left'>Instruction:</p>
            <p className='m-5'>{card.strInstructions}</p>
          </div>

          <table className='border-2  border-collapse w-full m-4 '>
            <tbody className='gap-3'>
              <tr className='border-b'>
                <th className='border border-black p-4 text-left bg-gray-200'>Name</th>
                <td className='border border-black p-4'>{card.strMeal}</td>
              </tr>
              <tr className='border-b'><th className='border border-black p-4 text-left bg-gray-200'>Country</th>
                <td className='border border-black p-4'>{card.strCountry}</td></tr>
              <tr className='border-b'><th className='border border-black p-4 text-left bg-gray-200'>Ingredient</th >
                <td className='border border-black p-4'> {

                  [
                    card.strIngredient1,
                    card.strIngredient2,
                    card.strIngredient3,
                    card.strIngredient4,
                    card.strIngredient5,
                    card.strIngredient6,
                    card.strIngredient7,
                    card.strIngredient8,
                    card.strIngredient9,
                    card.strIngredient10,
                    card.strIngredient11,

                  ]

                    .filter(Boolean)

                    .join(", ")

                }</td></tr>
            </tbody>
          </table>

          <a href={card.strYoutube
            
          } target='_blank' className='text-blue-600'>Youtube Link : {card.strYoutube}</a>


        </div>
      </div>

    </div>
  )
}

