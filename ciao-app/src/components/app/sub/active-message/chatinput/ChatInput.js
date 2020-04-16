import React from 'react'

// Styles
import './ChatInput.scss'

const ChatInput = () => {
    return(
        <div className="chat-input-container">

            <div className="chat-input-icons">
                <p></p>
            </div>

            <input
                type="text"
                placeholder="Type your message..."
            />

            <button>
                Send
            </button>
        </div>
    )
}

export default ChatInput