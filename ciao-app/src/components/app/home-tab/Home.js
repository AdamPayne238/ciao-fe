import React from 'react'
import './Home.scss'
import { useLocation } from 'react-router-dom'


const Home = () => {

    let { pathname } = useLocation()

    return(
        <>

        {pathname.includes('/ciao/home') && (
            <div className="home-backdrop">
            <h1>Home</h1>
            </div>
        )}
   

        </>
    )
}

export default Home