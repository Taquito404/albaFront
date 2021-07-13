import Vimeo from '@u-wave/react-vimeo'
import React from 'react'

const VideoVimeo = ({ url }) => {
    return (
        <Vimeo
            video={url}
            responsive
            color="#ff8e80"

        />
    )
}

export default VideoVimeo

