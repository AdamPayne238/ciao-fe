import React from 'react'

// Styles
import './ChatInput.scss'

//SVG
import Icon from '../../../../../global/Icon'
import { ICONS } from '../../../../../global/IconConstants'

const ChatInput = () => {
    return(
        <div className="chat-input-container">

            <div className="chat-input-icons">
            <div>
            <Icon
                icon={ICONS.MICROPHONE}
                width={32}
                height={32}
                color="#BEBECA"
            />
            </div>
            <div>
            <Icon
                icon={ICONS.PAPERCLIP}
                width={32}
                height={32}
                color="#BEBECA"
            />
            </div>
            <div>
            <Icon
                icon={ICONS.EMOJI}
                width={32}
                height={32}
                color="#BEBECA"
            />
            </div>
            </div>

            <input
                type="text"
                placeholder="Type your message..."
            />

            <button>
            <Icon
                icon={ICONS.PAPERPLANE}
                width={32}
                height={32}
                color="#BEBECA"
            />
            </button>
        </div>
    )
}

export default ChatInput