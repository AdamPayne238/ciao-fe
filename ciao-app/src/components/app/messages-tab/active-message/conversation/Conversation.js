import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ACTIVE_CHAT, MY_ID } from './Resolvers'
import './Conversation.scss'
import { useStore } from '../../../../../global/context/Store'


function Conversation(){

    const { state } = useStore()

    const { loading: loadingId, data: dataId} = useQuery(MY_ID)

    const { loading, data } = useQuery(ACTIVE_CHAT, {
        variables: {
            id: state.id
        },
        fetchPolicy: 'network-only'
    })
    

    return(
 
    <ul className="messages">

        {!loading && data && !loadingId && dataId &&(
            <>
                {data.chat.messages.map(info => (
                  <div>
                  <li className="msg-wp">
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