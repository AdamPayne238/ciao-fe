import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ME, MY_ID } from './Resolvers'
import EmptyProfilePic from '../../../../../images/empty-profile.png'
import './Message.scss'

const Message = () => {

    const { refetch, loading, data } = useQuery(ME)
    const { loading: loadingId, data: dataId} = useQuery(MY_ID)

    useEffect(() => {
      console.log("message.js data", data)
      console.log("dataId", dataId)

    }, [data])

    return(
      
      <div className="message-container">
        {!loading && data && !loadingId && dataId && refetch &&(
          <>
            {data.me.chats.map(chatInfo => (
              
              <div className="message-stack">
                
                <div className="message-stack-container">
            
                  <div className="message-stack-img">
                    <img src={EmptyProfilePic} />
                  </div>

                    <div className="message-img-name-container">
                      {chatInfo.participants.map(par => (par.id !== dataId.me.id) && (
                        <>

                          <div className="message-stack-name">
                            <p>{par.first_name} {par.last_name}</p>
                          </div>

                          {/* <div className="message-stack-name">
                            <p>{par.email}</p>
                          </div> */}

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