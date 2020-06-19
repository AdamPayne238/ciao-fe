import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ME, MY_ID } from './Resolvers'
import EmptyProfilePic from '../../../../../images/empty-profile.png'
import './Message.scss'

const Message = () => {

    const { loading, data } = useQuery(ME)
    const { loading: loadingId, data: dataId} = useQuery(MY_ID)

    useEffect(() => {
    console.log("message.js data", data)
    console.log("dataId", dataId)

    }, [data])

    return(
      <div className="message-container">
        {!loading && data && !loadingId && dataId && (
          <>
            {data.me.chats.map(chatInfo => (
              <div className="message-stack">
                <div className="message-stack-container">

                  <div className="message-stack-img">
                    <img src={EmptyProfilePic} />
                  </div>

                    <div className="message-img-name-container">
                      {chatInfo.participants.map(user => (user.id !== dataId.me.id) && (
                        <>

                          <div className="message-stack-name">
                            <p>{user.first_name} {user.last_name}</p>
                          </div>

                          <div className="message-stack-name">
                            <p>{user.email}</p>
                          </div>

                          <div className="message-stack-preview">
                            <p>recent message...</p>
                          </div>

                        </>
                      ))}
                    </div>
                
                  <div className="message-stack-time">
                    <p>5 min</p>
                  </div>

                </div>
              </div>
              ))}
          </>
        )}
    </div>
  )
}

export default Message