import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import './Message.scss'
import EmptyProfilePic from '../../../../../images/empty-profile.png'

import { ME, MY_ID } from './Resolvers'

const Message = () => {

    const { error, loading, data } = useQuery(ME)

    const { error: errorId, loading: loadingId, data: dataId} = useQuery(MY_ID)

    const { userId, setUserId } = useState()

    const { friends, setFriends } = useState(null)
    // const saveId = async () => await setUserId("boop")

    useEffect(() => {
    console.log("message.js data", data)
    console.log("dataId", dataId)
      // console.log("message.js data.me.id", data)
  
    // console.log("userId", userId)


    }, [data, userId])

    return(
      <div className="message-container">
      
        {!loading && data && !loadingId && dataId && (
          <div className="message-stack">

        <div className="message-stack-container">

         
            
            <div className="message-img-name-container">
            {data.me.chats.map(chatInfo => (
              
              <>

       

                {chatInfo.participants.map(user => (user.id !== dataId.me.id) && (
                  <div className="message-stack">
                  
            
                  <div className="message-stack-img">
                  <img src={EmptyProfilePic} />
                  </div>
                    
                    {/* <h1>{user.id}</h1> */}

                    <div className="message-stack-name">
                    <p>{user.first_name} {user.last_name}</p>
                    </div>

                    <div className="message-stack-name">
                    <p>{user.email}</p>
                    </div>

                    <div className="message-stack-preview">
                    <p>
                      recent message...
                    </p>
                    </div>
                    
                    <div className="message-stack-time">
                    <p>5 min</p>
                    </div>



                  </div>
                 
                ))}
                
              </>
               
            ))}
              </div>
          </div>
          </div>
          
        )}    

       

      </div>


      // OLD PLACEHOLDERS
      // <div className="message-container">
      //   {message.map(() => 
      //   <div className="message-stack">

        // <div className="message-stack-container">
        //   <div className="message-stack-img">
        //     <img src={EmptyProfilePic} />
        //   </div>
        
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