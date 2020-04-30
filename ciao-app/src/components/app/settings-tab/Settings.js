import React from 'react'
import './Settings.scss'
import { useLocation } from 'react-router-dom'


const Settings = () => {

    let { pathname } = useLocation()

    return(
        <>
            {pathname.includes('/ciao/settings') && (
                <div className="settings-backdrop">
                    <div className="settings-container">
                        <h1>Settings Tab Coming Soon....</h1>
                    </div>
                </div>
            )}
        </>
    )
}

export default Settings