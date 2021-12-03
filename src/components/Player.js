import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

function Player({ spotify }) {
    // this apparently is the syntax for when you only need one object from your props. cool!
    return (
        <div>
            <h6>This is the player!</h6>

            <div className="player">
                <div className="player_body">
                    <Sidebar />
                    <Body spotify={spotify} />
                </div>
            </div>

            <Footer spotify={spotify} />
        </div>
    )
}

export default Player
