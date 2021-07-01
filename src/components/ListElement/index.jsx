import React from 'react';
import listStyles from './styles/listStyles.module.scss'

const ListElement = ({ user, curso }) => {
    if (!curso) {
        return (
            <li className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Username: <small className="text-muted">@{user.username}</small></h5>
                    <div className="d-flex">
                        <span className="fas fa-edit text-dark mr-3"></span>
                        <span className="fas fa-times-circle text-danger"></span>
                    </div>
                </div>
                <p className="mb-1 font-weight-bold">Email: <small className="text-muted">{user.email}</small></p>
                <p className="mb-1 font-weight-bold">Nombre Completo: <small className="text-muted">{user.firstName + ' ' + user.lastName}</small></p>
            </li>
        )
    }
    return (
        <li className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-end">
                <div className="d-flex">
                    <span className="fas fa-times-circle text-danger mr-2"></span>
                    <span className="fas fa-file-video text-primary"></span>

                </div>
            </div>
            <div className="d-flex">
                <img src={curso.imgCurso} alt="hora" className={`img-thumbnail ${listStyles.imgCourse}`} />

                <div className="ml-2">
                    <p className="mb-1 font-weight-bold">Titulo curso: <small className="text-muted">{curso.titulo}</small></p>
                    <p className="mb-2 font-weight-bold">Nombre Completo: <small className="text-muted">{curso.descripcion}</small></p>
                    <button className="btn btn-primary">Agregar leccion</button>
                </div>
            </div>
        </li>
    )
}

export default ListElement;
