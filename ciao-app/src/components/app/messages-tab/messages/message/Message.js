import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import './Message.scss'
import EmptyProfilePic from '../../../../../images/empty-profile.png'

import { ME } from './Resolvers'

const Message = () => {

    const { error, loading, data } = useQuery(ME)

    const { userId, setUserId } = useState()

    // const { currentChats, setCurrentChats } = useState([))
    const saveId = async () => await setUserId("boop")

    useEffect(() => {
    // console.log("message.js data", data)
      // console.log("message.js data.me.id", data)
    // console.log("userId", userId)

    }, [data, userId])

    // let myId = null
    return(
      <div className="message-container">

        {!loading && data && (
          <div>
            {data.me.chats.map(chatInfo => (
              <>
                {/* REPLACE MAP WITH FILTER AND SET CONSTRAINT TO != userId so only values of other participant will return for rendering */}
                {chatInfo.participants.map(participants => (
                  <div className="message-stack">
                    {/* {console.log("participants", participants)} */}
                    <h1>{participants.first_name}</h1>
                  </div>
                ))}
              </>
            ))}
          </div>
        )}    

      </div>


      // <div className="message-container">
      //   {message.map(() => 
      //   <div className="message-stack">

      //   <div className="message-stack-container">
      //     <div className="message-stack-img">
      //       <img src={EmptyProfilePic} />
      //     </div>
        
      //   <div className="message-img-name-container">
      //     <div className="message-stack-name">
      //       <p>
      //         Random User
      //       </p>
      //     </div>
      //     <div className="message-stack-preview">
      //       <p>
      //         recent message...
      //       </p>
      //     </div>
      //   </div>

      //     <div className="message-stack-time">
      //       <p>5 min</p>
      //     </div>

      //     </div>
      //     </div>
      //     )}
      // </div>
    )
}

export default Message