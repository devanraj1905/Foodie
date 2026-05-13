import React from 'react'
import img from '/src/assets/rest.jpg'
import { Link } from 'react-router-dom'


export function Hero() {
    return (
        <div>

            <div className='relative w-full h-screen'>
                <img src={img} alt="" className='w-full h-screen object-cover ' />
                <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black point-event-none'

                />
                <div className='absolute flex flex-col inset-0 justify-center items-center z-10 px-4 text-center ' >
                    <h3 className='text-white font-bold title text-6xl mb-6 '
                        style={{
                            textShadow: '#ff6200 2px 2px'
                        }}>Foodie</h3>

                    <p className='text-3xl text-white pb-5 mx-w-2xl text-shadow-lg'
                        style={{
                            textShadow: '#ff6200 2px 2px'
                        }}>Taste the craving, love every bite. Foodicted — where every meal feels addictive.</p>
                    <div className='relative'>
                        <input type="text" placeholder='Search' title='click search' className='lg:w-150 w-100 mx-w-xl border-white border-2 rounded-full bg-white/80 h-12 px-5 outline-none' />
                        <Link to={'/search'}><i className="fa-solid fa-magnifying-glass absolute right-4 top-4 "></i></Link>
                    </div>
                </div>



            </div>
        </div>
    )
}

