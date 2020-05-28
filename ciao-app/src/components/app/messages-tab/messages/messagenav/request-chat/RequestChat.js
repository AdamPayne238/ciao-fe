// This component will be a pop up model attached to the plus button in the message nav.

import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

// Queries / Mutations
import { GET_USERS } from './Resolvers'

// SVG
import Icon from '../../../../../../global/Icon'
import { ICONS } from '../../../../../../global/IconConstants'

// Styles
import './RequestChat.scss'

const RequestChat = props => {

    const [ open, setOpen ] = useState(false)
    const [ select, setSelect ] = useState(false)
    const { error, loading, data } = useQuery(GET_USERS)

    useEffect(() => {
        console.log('Request Chat Open?', open)
        console.log('GET_USERS Response data', data)
        console.log('Error', error)
        console.log('Loading', loading)
    }, [open, select])

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

            {!loading && data && open && (

                
             
                <div className="request-chat-modal-container">

                <div className="request-chat-modal-close">
                    <button onClick={() => setOpen(false)}>Close</button>
                </div>

                <div className="request-chat-search-filter">
                    
                    {/* <Icon
                        icon={ICONS.SEARCH}
                        width={32}
                        height={32}
                        color="blue"
                        background="blue"
                    /> */}
                    
                    <input
                        type="text"
                        placeholder="Search Email"
                    />
                </div>
                    
                <div className="request-chat-user-list">
                    {data.users.map(info => (
                        <>
                            <p>ID:{info.id}</p>
                            <p>Name: {info.first_name} {info.last_name}</p>
                            <p>Email: {info.email}</p>
                            <button onClick={() => select ? setSelect(false) : setSelect(true), console.log("selected", select) }>Request Chat</button>
                        </>
                    ))}
                </div>

                </div>
            )}


        </div>
    )

}

export default RequestChat

