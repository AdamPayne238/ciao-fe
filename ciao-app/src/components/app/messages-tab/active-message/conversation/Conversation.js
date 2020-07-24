import React, { useRef, useEffect } from 'react'
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { ACTIVE_CHAT, MY_ID, NEW_MESSAGE_SUBSCRIPTION } from './Resolvers'
import './Conversation.scss'
import { useStore } from '../../../../../global/context/Store'


function Conversation(){

    const messageRef = useRef()
    const { state } = useStore()
    const { loading: loadingId, data: dataId} = useQuery(MY_ID)
    useSubscription(NEW_MESSAGE_SUBSCRIPTION)

    const { loading, data } = useQuery(ACTIVE_CHAT, {
        variables: {
            id: state.id
        }
    })

    useEffect(() => {
        if(messageRef.current){
            messageRef.current.scrollIntoView({
                // behavior: 'smooth',
                block: 'start',
            })
        } 
    })


    return(
 
    <ul className="messages">
        {!loading && data && !loadingId && dataId && (
            <>
                {data.chat.messages.map(info => (
                  <div>
                    <li ref={messageRef} id="msg" className="msg-wp">
                        <blockquote className={info.user.id === dataId.me.id ? 'msg owner' : "msg"}>
                        <p>{info.text}</p>
                        {/* <p>{"Created at"} {info.createdAt}</p> */}
                        </blockquote>
                    </li>
                  </div>
                ))}
            </>
        )}
    </ul>

    )
}

export default Conversation