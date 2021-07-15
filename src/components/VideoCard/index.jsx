import React from 'react'
import VideoVimeo from '../VideoVimeo'
const VideoCard = ({ leccionStyles, leccion, hasPurchased }) => {
    return (
        <div className={leccionStyles.videoCard} key={leccion.url}>
            <VideoVimeo
                url={leccion.url}
                hasPurchased={hasPurchased}
            />
            <h3>{leccion.title ? leccion.title: ''}</h3>
            <p>{leccion.description ? leccion.description : ''}</p>
        </div>
    )
}

export default VideoCard
