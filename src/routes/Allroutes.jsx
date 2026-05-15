import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Hero } from '../component/Hero'
import { Card } from '../component/Card'
import {Details, Search} from '../pages'
import { CategoryMeals } from '../pages/CategoryMeals'
import { PageNotFound } from '../pages/PageNotFound'
import { Footer, Header } from '../component'

export function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<><Header/><Hero/><CategoryMeals/></>} />
      <Route path='/category/:name' element={<><Header/><Card/></>}/>
      <Route path='/meal/:id' element={<><Header/><Details/></>} />
      <Route path='/search' element={<><Header/><Search/></>} />
      <Route path='*' element={<PageNotFound/>} />
   

    </Routes>
  )
}

