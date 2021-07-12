import React from 'react'
import NavbarStyles from './styles/navbar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link'

const NavbarDesktop = ({ user, handleLogOut }) => {
    const router = useRouter();

    return (
        <div className={`d-none d-md-none d-lg-block ${NavbarStyles.navWrapper} bg-primary p-2`}>
            <div className="list-group-item bg-dark text-white d-flex mb-5 shadow-sm">
                <img src={user.urlImage ? user.urlImage : 'https://www.sogapar.info/wp-content/uploads/2015/12/default-user-image.png'} alt="img" className={`${NavbarStyles.avatar}`} />
                <div className="ml-2 d-flex flex-column">
                    <span className=" font-weight-bold">@{user.userName}</span>
                    <span className="text-muted">{user.name}</span>
                </div>
            </div>
            <div className="btn-group-vertical w-100 h-75 d-flex justify-content-between">
                <div className="w-100">
                    <button
                        type="button"
                        className="btn btn-primary w-100 text-left d-flex align-items-center"
                        onClick={() => router.push('/admin/usuarios-partner')}
                    >
                        <span className={`fas fa-chalkboard-teacher ${NavbarStyles.iconSm} mr-4`}></span>Usuarios partner
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary w-100 text-left d-flex align-items-center"
                        onClick={() => router.push('/admin/usuarios')}
                    >
                        <span className={`fas fa-users ${NavbarStyles.iconSm} mr-4`}></span>Usuarios
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary w-100 text-left d-flex align-items-center"
                        onClick={() => router.push('/admin/cursos')}
                    >
                        <span className={`fas fa-video ${NavbarStyles.iconSm} mr-4`}></span>Cursos
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary w-100 text-left d-flex align-items-center"
                        onClick={() => router.push('/admin/categorias')}
                    >
                        <span className={`fas fa-folder-open ${NavbarStyles.iconSm} mr-4`}></span>Agrega categorias
                    </button>
                </div>
                <div className="w-100">
                    <button type="button" onClick={handleLogOut} className="btn btn-outline-danger w-100">Log out</button>
                </div>
            </div>
        </div >
    )
}

export default NavbarDesktop
