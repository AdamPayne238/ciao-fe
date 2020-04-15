import React from 'react'
import './Message.scss'

const Message = () => {
    var message = ["message1", "message2", "message3", "message4", "message5", "message6", "message7"]
    return(
      <div className="message-container">
        {message.map((messages) => <div className="message-stack"><p>{messages}</p></div>)}
      </div>
    )
}

export default Message