import React, { useEffect, useState } from 'react'
import { useDataLayerValue } from '../DataLayer'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import { Grid, Slider } from '@material-ui/core'

function Footer({ spotify }) {
    const [{ token, item, playing }, dispatch] = useDataLayerValue()
    // these two fucking Jabronis didn't finish their fucking tutorial, even after like 4 hours. So for this component I had to go into their github repo and cut and paste all this
    //go to hell, "Clever Programmer."
    //who even calls themself "Clever?" making up your own nickname is tacky as fuck. i digress.
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then(r => {
            console.log(r)

            dispatch({
                type: 'SET_PLAYING',
                playing: r.is_playing
            })

            dispatch({
                type: 'SET_ITEM',
                item: r.item
            })
        })
    }, [spotify])

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause()
            dispatch({
                type: 'SET_PLAYING',
                playing: false
            })
        } else {
            spotify.play()
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        }
    }

    const skipNext = () => {
        spotify.skipToNext()
        spotify.getMyCurrentPlayingTrack().then(r => {
            dispatch({
                type: 'SET_ITEM',
                item: r.item
            })
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        })
    }

    const skipPrevious = () => {
        spotify.skipToPrevious()
        spotify.getMyCurrentPlayingTrack().then(r => {
            dispatch({
                type: 'SET_ITEM',
                item: r.item
            })
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        })
    }
    return (
        <div className="footer">
            <div className="footer_left">
                <img
                    className="footer_albumLogo"
                    src={item?.album.images[0].url}
                    alt={item?.name}
                />
                <div className="footer_songInfo">
                    <h4>{item?.name}</h4>
                    <p>{item?.artists.map(artist => artist.name).join(', ')}</p>
                    {/* in their github repo, these two jabronis forgot to use Optional Chaining on the above lines, aka you need question marks after "item" in order for this to work. At least I think you do 
                    https://github.com/CleverProgrammers/spotify-clone/blob/master/src/Footer.js */}
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon onClick={skipNext} className="footer_icon" />
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer_icon"
                    />
                ) : (
                    <PlayCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer_icon"
                    />
                )}
                <SkipNextIcon onClick={skipPrevious} className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                {/* below is the MATERIAL UI GRID COMPONENT, this is how we'll implement our volume slider */}
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
