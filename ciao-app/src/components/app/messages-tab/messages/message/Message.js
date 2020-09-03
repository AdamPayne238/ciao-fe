import React from 'react'
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { ME, MY_ID, NEW_CHAT_SUBSCRIPTION } from './Resolvers'
import EmptyProfilePic from '../../../../../images/empty-profile.png'
import './Message.scss'
import { useStore } from '../../../../../global/context/Store'


const Message = () => {

    const { dispatch } = useStore()
    const { loading, data } = useQuery(ME)
    const { loading: loadingId, data: dataId} = useQuery(MY_ID)
    useSubscription(NEW_CHAT_SUBSCRIPTION)

    return(
      
      <div className="message-container">
        {!loading && data && !loadingId && dataId &&(
          <>
            {data.me.chats.map(chatInfo => (
              console.log("chatInfo", chatInfo),
                
              
              <div className="message-stack">

                <div 
                  className="message-stack-container"
                  onClick={() => dispatch({type: 'toggle-on', id: chatInfo.id, participants: chatInfo.participants }) }
                >
            
                  <div className="message-stack-img">
                    <img src={EmptyProfilePic} />
                  </div>

                    <div className="message-img-name-container">
                      {chatInfo.participants.map(par => (par.id !== dataId.me.id) && (
                        <>

                          <div className="message-stack-name">
                            <p>{par.first_name} {par.last_name}</p>
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