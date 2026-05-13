import { useState } from 'react'
import './App.css'
import { Card, Footer, Header, Hero } from './component'

import { Allroutes } from './routes/Allroutes'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        
       
        <Allroutes/>
        <Footer/>
      </div>  
    </>
  )
}

export default App
