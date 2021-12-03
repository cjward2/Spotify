import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from '../DataLayer'
// import HomeIcon from '@mui/icons-material/Home'
// import SearchIcon from '@mui/icons-material/Search'
// import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
//the above paths aren't working for some reason, so we'll use the old version of material ui
//npm i @material-ui/icons@4.9.1
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue()
    // notice: we're not getting the ENTIRE STATE, we're just destructuring out PLAYLISTS because that's all we need to display in the sidebar! hooray!
    console.log('yyour playyylsits are: ', playlists)

    return (
        <div className="sidebar">
            {/* <h1>IM THE SIDE BARRR</h1> */}
            <img
                className="sidebar_logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotifyLogo"
            />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <strong className="sidebar_title">Playlists! </strong>

            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}

            {/* <SidebarOption title="Butts" />
            <SidebarOption title="More Butts" />
            <SidebarOption title="Less Butts But Still Some" /> */}
        </div>
    )
}

export default Sidebar
