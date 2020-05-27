// This component will be a pop up model attached to the plus button in the message nav.

import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

// Queries / Mutations
import { GET_USERS } from './Resolvers'

//SVG
import Icon from '../../../../../../global/Icon'
import { ICONS } from '../../../../../../global/IconConstants'


const RequestChat = props => {

    const [ open, setOpen ] = useState(false)
    const { error, loading, data } = useQuery(GET_USERS)

    useEffect(() => {
        console.log('Request Chat Open?', open)
        console.log('GET_USERS Response data', data)
        console.log('Error', error)
        console.log('Loading', loading)
    }, [open])

    return (
        <div>
            
            <div 
                className="request-chat-button"
                onClick={() => open ? setOpen(false) : setOpen(true)}
            >
                <Icon
                    icon={ICONS.PLUS}
                    width={32}
                    height={32}
                    color="#BEBECA"
                />
            </div>

            {open && (
             
                <div className="request-chat-modal-container">

                    <h1>CLICKED!!</h1>
       
                </div>
            )}


        </div>
    )

}

export default RequestChat

