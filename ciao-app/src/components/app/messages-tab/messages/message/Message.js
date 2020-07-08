import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ME, MY_ID, TOGGLE_CHAT } from './Resolvers'
import EmptyProfilePic from '../../../../../images/empty-profile.png'
import './Message.scss'

// Context Hooks
import { useActivity, useActivityUpdate } from '../../../../../global/context/ActivityContext'

import { useStore } from '../../../../../global/context/Store'

const Message = () => {

    const {state, dispatch} = useStore()

    const { refetch, loading, data } = useQuery(ME)
    const { loading: loadingId, data: dataId} = useQuery(MY_ID)

    // const [ toggleChat ] = useMutation(TOGGLE_CHAT)

    const [ chatId, setChatId ] = useState(false)


    // const activeChat = useActivity()
    // const toggleChat = useActivityUpdate()
    // console.log("activeChat", activeChat)



    // useEffect(() => {

      // console.log("CHAT ID", chatId)

      // console.log("message.js data", data)
      // console.log("dataId", dataId)

    //   console.log("message.js chatId state", chatId)
    //   if(chatId){
    //     handleToggleOn()
    //   } else {
    //     handleToggleOff()
    //   }
    // }, [])


    // const handleToggleOn = () => {
    //   if(chatId){
    //     toggleChat({
    //       variables: {
    //         id: chatId,
    //         active: true
    //       }
    //     }).then(res => {
    //       console.log("if res On", res)
    //       // client.writeData({ data: {clientState: {defaults: {chat: { chatId: chatId}}}}})
    //     })
    //   }
    // }

    // const handleToggleOff = () => {
    //   if(chatId){
    //     toggleChat({
    //       variables: {
    //         id: chatId,
    //         active: false
    //       }
    //     }).then(res => {
    //       console.log("if res Off", res.data.updateChat.id)
    //       setChatId(false)
    //     })
    //   }
    // }


    


    return(
      
      <div className="message-container">
        {!loading && data && !loadingId && dataId && refetch &&(
          <>

            {/* <button onClick={() => getMyChats()} >Click Me!</button> */}
            {data.me.chats.map(chatInfo => (
              
              <div className="message-stack">
                
                <div 
                  className="message-stack-container"
                  onClick={() => dispatch({type: 'toggle-on', id: chatInfo.id }) }
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

                          <div className="message-stack-name">
                            <p>{par.email}</p>
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
                {/* {chatId === true && (
                  <ActiveMessage />
                )} */}
              </div>
              
          
      

              ))}
          </>
        )}
    </div>
  
  )
}

export default Message