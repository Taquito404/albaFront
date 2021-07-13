import React from 'react'
import VideoVimeo from '../VideoVimeo'
const VideoCard = ({ leccionStyles, leccion }) => {
    return (
        <div className={leccionStyles.videoCard}>
            <VideoVimeo
                url={leccion.url}
            />
            <h3>{leccion.title}</h3>
            <p>{leccion.description}</p>
        </div>
    )
}

export default VideoCard
