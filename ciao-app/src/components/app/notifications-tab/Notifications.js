import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import './Notifications.scss'
import { useLocation } from 'react-router-dom'

import { REQUESTED_CHAT_FRIEND } from './Resolvers'


const Notifications = () => {

    let { pathname } = useLocation()

    const { error, loading, data } = useQuery(REQUESTED_CHAT_FRIEND)

    

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