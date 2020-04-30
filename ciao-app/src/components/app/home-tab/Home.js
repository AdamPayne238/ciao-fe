import React from 'react'
import './Home.scss'
import { useLocation } from 'react-router-dom'


const Home = () => {

    let { pathname } = useLocation()

    return(
        <>
            {pathname.includes('/ciao/home') && (
                <div className="home-backdrop">
                    <div className="home-container">
                        <h1>Home Tab Coming Soon....</h1>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home