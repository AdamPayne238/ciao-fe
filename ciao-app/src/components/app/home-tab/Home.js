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
                        <div>Update Profile Pic</div>
                        <div>Update Bio</div>
                        <div>Update Status</div>
                        <div>Friend Count</div>
                        <div>Member Since..</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home