import React from 'react'
import './SidebarOption.css'

function SidebarOption({ title, Icon }) {
    // note the capital letter Icon, signifying a COMPONENT!
    return (
        <div className="sidebarOption">
            <p>{title}</p>
        </div>
    )
}

export default SidebarOption
