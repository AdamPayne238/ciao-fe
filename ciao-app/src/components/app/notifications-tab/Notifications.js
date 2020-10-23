import React from 'react'
import './Notifications.scss'
import { useLocation } from 'react-router-dom'


const Notifications = () => {

    let { pathname } = useLocation()

    return(
        <>
            {pathname.includes('/ciao/notifications') && (
                <div className="notifications-backdrop">
                    <div className="notifications-container">
                        <h1>Notifications Tab Coming Soon....</h1>
                    </div>
                </div>
            )}
        </>
    )
}

export default Notifications