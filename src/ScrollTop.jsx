    import React, { useEffect } from 'react'
    import { useLocation } from 'react-router-dom'

    export function ScrollTop() {
    const {pathname}=useLocation()
    useEffect(()=>{
        window.scrollTo(10,0)
    },[pathname])

    return null
    }