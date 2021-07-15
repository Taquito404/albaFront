import Vimeo from '@u-wave/react-vimeo'
import React from 'react'

const VideoVimeo = ({ url, hasPurchased }) => {
    
    return (
        <Vimeo
            video={url}
            responsive
            color="#ff8e80"
            controls={hasPurchased === true ? true : false}
        />
    )
}

export default VideoVimeo

