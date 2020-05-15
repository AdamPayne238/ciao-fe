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

                        <div className="ciao-home-profile-pic"></div>
                        <div className="ciao-home-bio">
                            <p>Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio </p>
                        </div>
                        <div className="ciao-home-status">
                            <p>Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status Status </p>
                        </div>
                        <div className="ciao-home-friend-count">
                            <p>Friends: 12</p>
                        </div>
                        <div className="ciao-home-member-date">
                            <p>Member Since: August, 2020</p>
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default Home