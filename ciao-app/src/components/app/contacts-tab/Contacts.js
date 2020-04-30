import React from 'react'
import './Contacts.scss'
import { useLocation } from 'react-router-dom'


const Contacts = () => {

    let { pathname } = useLocation()

    return(
        <>

        {pathname.includes('/ciao/contacts') && (
            <div className="contacts-backdrop">
                <div className="contacts-container">
                    <h1>Contacts Tab Coming Soon....</h1>
                </div>
            </div>
        )}
   

        </>
    )
}

export default Contacts