import React from 'react'
import Vimeo from '@u-wave/react-vimeo'
import VideoVimeo from '../VideoVimeo';

const VideoCard = ({ leccionStyles, leccion, hasPurchased, curso }) => {


    return (
        <div className={leccionStyles.videoCard} key={leccion.title}>
            {
                hasPurchased === false ?
                    <img src={Object.keys(curso).length === 0 || !curso ? '' : curso.imgUrl} alt={leccion.title} className={leccionStyles.imgLeccion} />
                    :
                    <Vimeo
                        video={leccion.url}
                        responsive
                        autoplay
                        loop
                        controls={true}
                        showTitle={false}
                    />
            }
            <h3>{leccion.title ? leccion.title : ''}</h3>
            <p>{leccion.description ? leccion.description : ''}</p>
        </div>
    )
}

export default VideoCard
