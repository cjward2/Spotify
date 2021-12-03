import React from 'react'
import './SidebarOption.css'

function SidebarOption({ title, Icon }) {
    // note the capital letter Icon, signifying a COMPONENT!
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
