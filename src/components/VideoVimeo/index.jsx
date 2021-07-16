import Vimeo from '@u-wave/react-vimeo'
import React from 'react'

const VideoVimeo = ({ url }) => {
    
    return (
        <Vimeo
            video={url}
            responsive
            autopause
            autoplay
            loop
            showTitle={false}
        />
    )
}

export default VideoVimeo

