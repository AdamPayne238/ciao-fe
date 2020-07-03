import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ACTIVE_CHAT, MY_ACTIVE_CHATS } from './Resolvers'
// Styles
import './Conversation.scss'




export default function Conversation(){

    const { refetch, loading, data } = useQuery(MY_ACTIVE_CHATS)
    const [myMessages, setMyMessages ] = useState([])

    // const { refetch, loading, data } = useQuery(MY_ACTIVE_CHATS, {
	// 	variables: { userId: false },
    // });
    
    
    
    

    

    useEffect(() => {
        
        activeChatMessages()
        
    }, [myMessages])



    const activeChatMessages = () => {

        if(!loading && data ){
            data.me.chats.map(chat => {
                console.log("chats", chat)
            if (chat.active === true){
                chat.messages.map(msg => {
                    console.log("msg", msg)
                    setMyMessages(msg)
                })
            }
            })
        }
    }


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