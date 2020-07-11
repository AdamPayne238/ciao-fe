import React from 'react'
import './Home.scss'
import { useQuery } from '@apollo/react-hooks'
import { useLocation } from 'react-router-dom'
import { ME } from './Resolvers'
import * as moment from 'moment'

// SVG
import Icon from '../../../global/Icon'
import { ICONS } from '../../../global/IconConstants'


const Home = () => {

    const format = 'MMM Do YYYY';

    let { pathname } = useLocation()

    const { refetch, loading, data } = useQuery(ME)

    if(!loading && data){
    //    const date = toDateString(data.me.createdAt)

    }

    return(
        <>
            {pathname.includes('/ciao/home') && (
                <div className="home-backdrop">

                    {!loading && data && (

<div className="home-container">

<div className="ciao-home-info-container">

    <div className="ciao-home-username">
        <h1>{data.me.first_name} {data.me.last_name}</h1>
    </div>

    <div className="ciao-home-friend-count">
        <p>Contacts: {data.me.chats.length} </p>
    </div>

    <div className="ciao-home-member-date">
        <p>Member Since: {moment(data.me.createdAt).format(format)}</p>
    </div>

    <div className="ciao-home-underline"></div>

    <div className="ciao-home-bio">
        <h2>Bio</h2>
        <p> {data.me.bio} </p>
    </div>

    <div className="ciao-home-status">
        <h2>Status</h2>
        <p>{data.me.status} </p>
    </div>

    <div className="ciao-home-svg-contact">

        <div className="ciao-home-github">
            <Icon
                icon={ICONS.GITHUB}
                width={32}
                height={32}
                color={pathname.includes('/home') ? '#E1473E' : '#EFC2C6'}
            />
            <p>{data.me.github}</p>
        </div>

        <div className="ciao-home-linkedin">
            <Icon
                icon={ICONS.LINKEDIN}
                width={32}
                height={32}
                color={pathname.includes('/home') ? '#E1473E' : '#EFC2C6'}
            />
            <p>{data.me.linkedin}</p>
        </div>

        <div className="ciao-home-twitter">
            <Icon
                icon={ICONS.TWITTER}
                width={32}
                height={32}
                color={pathname.includes('/home') ? '#E1473E' : '#EFC2C6'}
            />
            <p>{data.me.twitter}</p>
        </div>

        <div className="ciao-home-email">
            <Icon
                icon={ICONS.EMAIL2}
                width={32}
                height={32}
                color={pathname.includes('/home') ? '#E1473E' : '#EFC2C6'}
            />
            <p>{data.me.email}</p>
        </div>

    </div>
</div>


</div>

                    )}
                    
                    
                    

                </div>
            )}
        </>
    )
}

export default Home