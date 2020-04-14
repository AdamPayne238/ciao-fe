import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import './Tabs.scss'


const Tabs = () => {
    const { pathname } = useLocation()

    return(
        <div className="tab-container">
            <div>
                <h1>Profile Pic</h1>
            </div>

            <NavLink to="/home" activeClassName='active'>
                <div className="tab-row">
                <a 
                color={pathname.includes('/home') ? 'black' : 'black'}
                >
                    Home
                </a>
                </div>
            </NavLink>

            <NavLink to="/messages">
                <div className="tab-row">
                <a color={pathname.includes('/messages') ? 'blue' : 'orange'}>
                    Messages
                </a>
                </div>
            </NavLink>

            <NavLink to="/contacts">
                <div className="tab-row">
                <a color={pathname.includes('/contacts') ? '#FB2046' : '#FB2046'}>
                    Contacts
                </a>
                </div>
            </NavLink>

            <NavLink to="/notifications">
                <div className="tab-row">
                <a color={pathname.includes('/notifications') ? '#FB2046' : '#FB2046'}>
                    Notifications
                </a>
                </div>
            </NavLink>

            <NavLink to="/settings">
                <div className="tab-row">
                <a color={pathname.includes('/settings') ? 'black' : 'black'}>
                    Settings
                </a>
                </div>
            </NavLink>

        </div>
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