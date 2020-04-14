import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Tabs = () => {
    const { pathname } = useLocation()

    return(
        <TabContainer>
            <div>
                <h1>Profile Pic</h1>
            </div>

            <NavLink to="/home">
                <TabRow>
                <a 
                background={pathname.includes('/home') ? 'black' : 'black'}
                >
                    Home
                </a>
                </TabRow>
            </NavLink>

            <NavLink to="/messages">
                <TabRow>
                <a color={pathname.includes('/messages') ? 'blue' : 'orange'}>
                    Messages
                </a>
                </TabRow>
            </NavLink>

            <NavLink to="/contacts">
                <TabRow>
                <a color={pathname.includes('/contacts') ? '#FB2046' : '#FB2046'}>
                    Contacts
                </a>
                </TabRow>
            </NavLink>

            <NavLink to="/notifications">
                <TabRow>
                <a color={pathname.includes('/notifications') ? '#FB2046' : '#FB2046'}>
                    Notifications
                </a>
                </TabRow>
            </NavLink>

            <NavLink to="/settings">
                <TabRow>
                <a color={pathname.includes('/settings') ? 'black' : 'black'}>
                    Settings
                </a>
                </TabRow>
            </NavLink>

        </TabContainer>
    )
}

export default Tabs

// Styles
const TabContainer = styled.div`
    border: 1px solid black;
    z-index: 900;
    position: fixed;
    // top: 20.5rem;
    left: 0;
    width: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: flex-end;
    background: #E1463E;
    justify-content: center;
    height: 100%;
    a{
        text-decoration: none;
        color: #EFC2C6;
    }
    a:last-of-type {
        // margin-bottom: 0rem;
      }
`

const TabRow = styled.div`
    display: flex;
    width: 18.1rem;
    height: 4.5rem;
    padding-left: 2.4rem;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.2rem;
    text-align: center;
`

const testButton = styled.button`
    color: #fb2046 !important;
    margin-left: 1.6rem;
`