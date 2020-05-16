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

                        <div className="ciao-home-info-container">

                            <div className="ciao-home-username">
                                <h1>User</h1>
                            </div>

                            <div className="ciao-home-friend-count">
                                <p>Friends: 12</p>
                            </div>

                            <div className="ciao-home-member-date">
                                <p>Member Since: August, 2020</p>
                            </div>

                        </div>

                        <div className="ciao-home-bio">
                            <h2>Bio</h2>
                            <p>I am a full stack sofware Engineer with experience in mutliple languages and frameworks such as HTML, CSS, JavaScript, React, Node, Python, Apollo, and GraphQL. I am new to Ciao and looking to chat with other developers or catch up with friends. Ciao! </p>
                        </div>

                        <div className="ciao-home-status">
                            <h2>Status</h2>
                            <p>Busy coding by the beach, but not too busy to chat! </p>
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default Home