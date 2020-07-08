import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ACTIVE_CHAT, MY_ACTIVE_CHATS } from './Resolvers'
import './Conversation.scss'

import { gql } from 'apollo-boost'

// Required to access client in this component
import { useApolloClient } from "@apollo/react-hooks"

const QUERY_CHAT_ID = gql`
    query{
        chat @client{
            chatId
        }
    }
`



export default function Conversation(){

    // const client = useApolloClient()

    // const  {data}   = useQuery(QUERY_CHAT_ID)
    // const { data: { chatId }} = useQuery(QUERY_CHAT_ID);

    // useEffect(() => {
        
    // }, [])

    // Writes Data to Cache (in placeholder set index.js)
    // onClick={() => client.writeData({ data: {clientState: {defaults: {user: { userId: 'update!'}}}}})}

    return(

    <ul className="messages">


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

// export default Conversation