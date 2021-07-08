import React from 'react';
import listStyles from './styles/listStyles.module.scss';
import { useRouter } from 'next/router';

const ListElement = ({ user, curso, handleDeleteCurso, handleDeleteUser }) => {
    const router = useRouter();
    console.log(router.pathname);
    if (!curso) {
        return (
            <li key={user.name} className="list-group-item list-group-item-action flex-column align-items-start text-primary">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 font-weight-bold">Username: <small className="text-muted">@{!user ? '' : user.userName}</small></h5>
                    <div className="d-flex">
                        <span
                            className={`${listStyles.cursor} fas fa-edit text-dark mr-3`}
                            onClick={() => router.push(router.pathname === '/admin/usuarios' ? `/admin/usuarios/editar-usuarios/${user._id}` : `/admin/usuarios-partner/editar-partner/${user._id}`)}
                        ></span>
                        <span
                            className={`${listStyles.cursor} fas fa-times-circle text-danger`}
                            onClick={() => handleDeleteUser(user._id)}
                        ></span>
                    </div>
                </div>
                <p className="mb-1 font-weight-bold">Email: <small className="text-muted">{!user ? '' : user.email}</small></p>
                <p className="mb-1 font-weight-bold">Nombre Completo: <small className="text-muted">{!user ? '' : user.name + ' ' + user.lastName}</small></p>
                <p className="mb-1 font-weight-bold">Rol: <small className="text-muted">{!user ? '' : user.role[0]}</small></p>
            </li>
        )
    }
    return (
        <li key={curso.title} className="list-group-item list-group-item-action flex-column align-items-start text-primary">
            <div className="d-flex w-100 justify-content-end">
                <div className="d-flex">
                    <span className={`${listStyles.cursor} fas fa-times-circle text-danger`} onClick={() => handleDeleteCurso(curso._id)} ></span>
                </div>
            </div>
            <div className="d-flex">
                <img src={!curso ? 'https://ak.picdn.net/shutterstock/videos/1039407446/thumb/1.jpg' : curso.imgUrl} alt="hora" className={`img-thumbnail ${listStyles.imgCourse}`} />

                <div className="ml-2">
                    <p className="mb-1 font-weight-bold">Titulo curso: <small className="text-muted">{!curso ? '' : curso.title}</small></p>
                    <p className="mb-2 font-weight-bold">Nombre Completo: <small className="text-muted">{!curso ? '' : curso.description}</small></p>
                    <button type="button" onClick={()=> router.push(`/admin/cursos/agregar-leccion/${curso._id}`)} className="btn btn-primary">Agregar leccion</button>
                </div>
            </div>
        </li>
    )
}

export default ListElement;
