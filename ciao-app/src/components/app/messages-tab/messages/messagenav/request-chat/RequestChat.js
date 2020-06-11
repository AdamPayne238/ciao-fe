import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

// Queries / Mutations
import { GET_USERS, CREATE_CHAT } from './Resolvers'

// SVG
import Icon from '../../../../../../global/Icon'
import { ICONS } from '../../../../../../global/IconConstants'

// Styles
import './RequestChat.scss'

const RequestChat = props => {

    const [ open, setOpen ] = useState(false)
    const [ select, setSelect ] = useState(false)

    // Query => Get All Users
    const { error, loading, data } = useQuery(GET_USERS)

    // Mutation => Create Chat
    const [ requestCreateChat ] = useMutation(CREATE_CHAT)

    const [ submitRequest, setSubmitRequest ] = useState({
        success: false,
        message: '',
    })

    //data.users.id
    const handleSubmit = event => {
        event.preventDefault()
        requestCreateChat({
            variables: {
                friend: select
            }
        })
        .then(res => {
            console.log('Request Chat Response', res)
            setSubmitRequest({
                success: true,
                message: 'Request sent!'
            })
        })
        .catch(err => {
            console.log('Request Chat Error', err)
            setSubmitRequest({
                success: false,
                message: 'You have already requested a chat from that user. Please wait for response.'
            })
        })
    }

    useEffect(() => {

        // console.log('Request Chat Open?', open)
        // console.log('GET_USERS Response data', data)
        // console.log('Error', error)
        // console.log('Loading', loading)
        // console.log('select', select)
        // console.log("requestCreateChat", requestCreateChat)
        console.log("Submit Request State", submitRequest)
        
    }, [open, select, handleSubmit, submitRequest])

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
                    <button onClick={() => (setOpen(false), setSelect(false))}>Close</button>
                </div>

                <div className="request-chat-search-filter">
                    
                    <input
                        type="text"
                        placeholder="Search Email"
                    />

                </div>
                    
                <div className="request-chat-user-list">
                    {data.users.map(info => (
                        <div className="request-chat-single-user">
                            {/* <p>ID:{info.id}</p> */}
                            <p>{info.first_name} {info.last_name}</p>
                            <p>{info.email}</p>
                            {select === false && (
                                <button onClick={() => select ? setSelect(false) : setSelect(info.id)}>Select</button>
                            )}
                            {select === info.id && (
                                <>
                                <button onClick={handleSubmit}>Submit</button>
                                <button onClick={() => setSelect(false)}>Cancel</button>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                </div>
            )}

        </div>
    )
}

export default RequestChat

