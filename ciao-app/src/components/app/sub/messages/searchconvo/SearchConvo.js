import React from 'react'
import './SearchConvo.scss'

//SVG
import Icon from '../../../../../global/Icon'
import { ICONS } from '../../../../../global/IconConstants'

const SearchConvo = () => {
    return(
        <div className="search-convo-container">
            
            <Icon
                icon={ICONS.SEARCH}
                width={32}
                height={32}
                color="#3F4152"
            />
            
            <input
                type="text"
                placeholder="Search"
            />
            
        </div>
    )
}

export default SearchConvo