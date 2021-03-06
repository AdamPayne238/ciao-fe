    import React from 'react'
import { useStore } from '../../../../../global/context/Store'
import { CREATE_MESSAGE, ACTIVE_CHAT, NEW_MESSAGE_SUBSCRIPTION } from './Resolvers'
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks'

import './ChatInput.scss'
import Icon from '../../../../../global/Icon'
import { ICONS } from '../../../../../global/IconConstants'


const ChatInput = () => {

    let input
    const { state } = useStore()
    const [ createMessage ] = useMutation(CREATE_MESSAGE)
    useSubscription(NEW_MESSAGE_SUBSCRIPTION)

    // USE REFETCH TO REFRESH MESSAGES onSubmit
    const { refetch } = useQuery(ACTIVE_CHAT, {
        variables: {
            id: state.id
        }
    })

    return(
        <div className="chat-input-container">

            <div className="chat-input-icons">

                <div>
                    <a href="#">
                        <Icon
                            icon={ICONS.MICROPHONE}
                            width={32}
                            height={32}
                            color=
                            "#BEBECA"
                        />
                    </a>
                </div>

                <div>
                    <a href="#">
                        <Icon
                            icon={ICONS.PAPERCLIP}
                            width={32}
                            height={32}
                            color="#BEBECA"
                        />
                    </a>
                </div>

                <div>
                    <a href="#">
                        <Icon
                            icon={ICONS.EMOJI}
                            width={32}
                            height={32}
                            color="#BEBECA"
                        />
                    </a>
                </div>

            </div>

            <form onSubmit={e => {
                e.preventDefault()
                createMessage({
                    variables: {
                        chatId: state.id,
                        text: input.value
                    }
                })
    
                input.value = ''
                refetch() // refetches query data to update new messages
            }}>
                <input
                    placeholder="Type message..."
                    ref={node => {
                        input = node
                    }}
                />
            </form>

            

            <button>
            <Icon
                icon={ICONS.PAPERPLANE}
                width={30}
                height={30}
                color="#BEBECA"
            />
            </button>
        </div>
    )
}

export default ChatInput