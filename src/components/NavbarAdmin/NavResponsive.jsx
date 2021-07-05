import React from 'react'
import NavbarStyles from './styles/navbar.module.scss';

const NavResponsive = ({ setVisibility, visibility, user }) => {
    const openAnimate = 'animate__animated animate__backInLeft';

    return (
        <div className={`${visibility === true ? openAnimate : ''} ${NavbarStyles.navMenu} position-fixed bg-primary p-2 shadow-lg`}>
            <div className="d-flex justify-content-end mb-5">
                <span
                    onClick={() => setVisibility(!visibility)}
                    className={`text-white fas fa-times ${NavbarStyles.iconSm}`}
                >
                </span>
            </div>
            <div className="list-group-item bg-dark text-white d-flex mb-5 shadow-sm">
                <img src="https://i.ytimg.com/vi/4GPbu19_D1s/0.jpg" alt="img" className={`${NavbarStyles.avatar}`} />
                <div className="ml-2 d-flex flex-column">
                    <span className="font-weight-bold">@{user.userName}</span>
                    <span className="text-muted">{user.name}</span>
                </div>
            </div>
            <div className="btn-group-vertical w-100 h-50 d-flex justify-content-between">
                <div className="w-100">
                    <button type="button" className="btn btn-primary w-100 text-left d-flex align-items-center"><span className={`fas fa-chalkboard-teacher ${NavbarStyles.iconSm} mr-4`}></span>Usuarios partner</button>
                    <button type="button" className="btn btn-primary w-100 text-left d-flex align-items-center"><span className={`fas fa-users ${NavbarStyles.iconSm} mr-4`}></span>Usuarios</button>
                    <button type="button" className="btn btn-primary w-100 text-left d-flex align-items-center"><span className={`fas fa-video ${NavbarStyles.iconSm} mr-4`}></span>Cursos</button>
                </div>
                <div className="w-100">
                    <button type="button" onClick={() => console.log('Saliendo...')} className="btn btn-outline-danger w-100">Log out</button>
                </div>
            </div>
        </div>
    )
}

export default NavResponsive;
