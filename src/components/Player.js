import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'

function Player({ spotify }) {
    // this apparently is the syntax for when you only need one object from your props. cool!
    return (
        <div>
            <h6>Butt butt butt</h6>

            <div className="player">
                <div className="player_body">
                    <Sidebar />
                    <Body />
                </div>
            </div>

            {/* FOOTER */}
        </div>
    )
}

export default Player
