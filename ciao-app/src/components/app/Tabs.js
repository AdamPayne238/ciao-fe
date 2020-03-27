import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Tabs = () => {
    const { pathname } = useLocation()

    return(
        <TabContainer>
            <NavLink to="/test">
                <a color={pathname.includes('/test') ? '#FB2046' : '#FB2046'}>
                    TEST
                </a>
            </NavLink>
            <h1>Tabs</h1>
        </TabContainer>
    )
}

export default Tabs

// Styles
const TabContainer = styled.div`
    z-index: 900;
    position: fixed;
    top: 20.5rem;
    left: 0;
    width: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: flex-end;
    a{
        text-decoration: none;
        margin-bottom: 1.8rem;
    }
    a:last-of-type {
        margin-bottom: 0rem;
      }
`

