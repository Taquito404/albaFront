import React from 'react'
import listStyles from './styles/listStyles.module.scss';

const Leccion = ({video, handleDeleteLeccion}) => {
    return (
        <li key={video.title} className="list-group-item list-group-item-action flex-column align-items-start text-primary">
            <div className="d-flex w-100 justify-content-end">
                <div className="d-flex">
                    <span className={`${listStyles.cursor} fas fa-times-circle text-danger`} onClick={() => handleDeleteLeccion(video._id)} ></span>
                </div>
            </div>
            <div className="d-flex">
                <div className="ml-2">
                    <p className="mb-1 font-weight-bold">Titulo leccion: <small className="text-muted">{!video ? '' : video.title}</small></p>
                    <p className="mb-2 font-weight-bold">Nombre Completo: <small className="text-muted">{!video ? '' : video.description}</small></p>
                </div>
            </div>
        </li>
    )
}

export default Leccion
