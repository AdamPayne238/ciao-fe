import React, { useContext, useState } from 'react'

// Context
const ActivityContext = React.createContext()
const ActivityUpdateContext = React.createContext()

// Custom Hooks
export function useActivity() {
    return useContext(ActivityContext)
}

export function useActivityUpdate() {
    return useContext(ActivityUpdateContext)
}

// Provider
export function ActivityProvider({ children }) {

    const [ activeChat, setActiveChat ] = useState(false)

    const toggleChat = () => {
        // setActiveChat(prevActiveChat => !prevActiveChat)
        // setActiveChat()
        
    }

    return (
        <ActivityContext.Provider value={activeChat}>
            <ActivityUpdateContext.Provider value={toggleChat}>
                { children }
            </ActivityUpdateContext.Provider>
        </ActivityContext.Provider>
    )
}