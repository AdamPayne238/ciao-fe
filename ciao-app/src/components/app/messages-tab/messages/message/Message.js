import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import './Message.scss'

import EmptyProfilePic from '../../../../../images/empty-profile.png'

import { GET_CHATS } from './Resolvers'

const Message = () => {

    // var message = ["message1", "message2", "message3", "message4", "message5", "message6", "message7", "message8", "message9", "message10", "message11", "message12", "message13", "message14", "message15"]

    const { error, loading, data } = useQuery(GET_CHATS)


    // UseEFFECT
    useEffect(() => {
      console.log("message.js data", data)
      
    }, [data])


    return(
      <div className="message-container">
        {!loading && data && (
          <div>
            {data.chats.map(chatInfo => (
        <div className="message-stack">
        {/* <h1>{chatInfo.id}</h1> */}
            

          <div className="message-stack-container">
            <div className="message-stack-img">
              <img src={EmptyProfilePic} />
            </div>
          
          <div className="message-img-name-container">
            <div className="message-stack-name">
              <p>
                Random User
              </p>
            </div>
            <div className="message-stack-preview">
              <p>
                recent message...
              </p>
            </div>
          </div>

            <div className="message-stack-time">
              <p>5 min</p>
            </div>

            </div>
            </div>
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