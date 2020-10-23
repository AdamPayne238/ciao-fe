import React from 'react'
import EmptyProfilePic from '../../../../../images/empty-profile.png'
import { useQuery } from '@apollo/react-hooks'
import { useStore } from '../../../../../global/context/Store'
import { MY_ID } from '../../messages/message/Resolvers'
import './ChatNav.scss'
import Icon from '../../../../../global/Icon'
import { ICONS } from '../../../../../global/IconConstants'

const ChatNav = () => {

    const { state } = useStore()
    const { loading, data } = useQuery(MY_ID)
    console.log("ChatNav useStore State", state.participants)

    return(
        <div className="chat-nav-container">

            {!loading && data && (
                <>

                    <div className="flex">

                        <div className="chat-nav-img">
                            <img src={EmptyProfilePic} />
                        </div>

                        <div className="chat-nav-name-activity">
                            {state.participants.map(par => (par.id !== data.me.id) && (
                                <>
                                    <p>
                                        {par.first_name} {par.last_name}
                                    </p>

                                    <p>
                                        Active
                                    </p>
                                </>
                            ))}
                        </div>

                    </div>

                    <div className="nav-buttons">

                        <Icon
                            icon={ICONS.PHONE}
                            width={32}
                            height={32}
                            color="#BEBECA"
                        />

                        <Icon
                            icon={ICONS.VIDEO}
                            width={32}
                            height={32}
                            color="#BEBECA"
                        />

                        <Icon
                            icon={ICONS.DOTS}
                            width={32}
                            height={32}
                            color="#BEBECA"
                        />

                    </div>
                </>
            )}

        </div>
        
    )
}

export default ChatNav