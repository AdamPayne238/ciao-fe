import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ACTIVE_CHAT, MY_ACTIVE_CHATS, MY_ID } from './Resolvers'
import './Conversation.scss'
import { useStore } from '../../../../../global/context/Store'


function Conversation(){

    const {state, dispatch} = useStore()

    const { loading: loadingId, data: dataId} = useQuery(MY_ID)

    const { refetch, loading, data } = useQuery(ACTIVE_CHAT, {
        variables: {
            id: state.id
        }
    })
    
    if(!loading && data && !loadingId && dataId){
        console.log("QUERY DATA in CONVO", data)
        console.log('dataid', dataId.me.id)
    }



    return(
 
    <ul className="messages">

        {!loading && data && !loadingId && dataId && (
            <>
                {data.chat.messages.map(info => (
                  <div>
                  <li className="msg-wp">
                      <blockquote className={info.user.id === dataId.me.id ? 'msg owner' : "msg"}>
                      <p>{"userId"} {info.user.id}</p>
                      <p>{"Message"} {info.text}</p>
                      <p>{"Created at"} {info.createdAt}</p>
                      </blockquote>
                  </li>
                  </div>
                ))}
            </>
        )}

    {/* <div>
    <li className="msg-wp">
        <blockquote className="msg">
        <p>Hey whats up man hows it going?</p>
        </blockquote>
    </li>
    </div>

    <li className="msg-wp">
        <blockquote className="msg">
        <p>Can we video?</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg owner">
        <p>Just finishing up at work. Cant video chat right now.</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg owner">
        <p>You playing tonight?</p>
        </blockquote>
    </li>
    
    <li className="msg-wp">
        <blockquote className="msg">
        <p>Thats what I was going to ask you! Yea I'll be on.</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg owner">
        <p>Alright cool it shouldn't take me too long to get home.</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg owner">
        <p>I'll message you soon.</p>
        </blockquote>
    </li>

    <li className="msg-wp">
        <blockquote className="msg">
        <p>Sounds good!</p>
        </blockquote>
    </li> */}

    </ul>

        
    )
}

export default Conversation