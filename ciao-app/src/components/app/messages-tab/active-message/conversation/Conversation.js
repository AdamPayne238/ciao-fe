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

    const { loading, data, refetch } = useQuery(ACTIVE_CHAT, {
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
        {!loading && data && !loadingId && dataId && refetch() && (
            <>
                {data.chat.messages.map(info => (
                    // console.log("conversation shiiiit", info),
                  <div>
                    <li ref={messageRef} id="msg" className="msg-wp">
                        <blockquote className={info.user.id === dataId.me.id ? 'msg owner' : "msg"}>
                        <div className="chat">
                            <p>{info.text.replace(/(.{30})/g, "$1\n")}</p>
                        </div>
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