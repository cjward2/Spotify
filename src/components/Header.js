import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar/'
import { useDataLayerValue } from '../DataLayer'

function Header({ spotify }) {
    const [{ user }, dispatch] = useDataLayerValue()

    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="search for something, Jabroni"
                />
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                {/* this syntax, with question marks and dots,
                is known as OPTION CHAINING. it will return undefined instead of throwing an error if any of the things with question marks don't exist */}
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
