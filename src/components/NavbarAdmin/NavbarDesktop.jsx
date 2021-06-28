import React from 'react'
import NavbarStyles from './styles/navbar.module.scss';

const NavbarDesktop = () => {
    return (
        <div className={`d-none d-md-block ${NavbarStyles.navWrapper} bg-primary p-2`}>
            <div className="list-group-item bg-dark text-white d-flex mb-5 shadow-sm">
                <img src="https://i.ytimg.com/vi/4GPbu19_D1s/0.jpg" alt="img" className={`${NavbarStyles.avatar}`} />
                <div className="ml-2 d-flex flex-column">
                    <span className=" font-weight-bold">@User</span>
                    <span className="text-muted">Alba Admin</span>
                </div>
            </div>
            <div className="btn-group-vertical w-100 h-75 d-flex justify-content-between">
                <div className="w-100">
                    <button type="button" className="btn btn-primary w-100 text-left d-flex align-items-center"><span className={`fas fa-chalkboard-teacher ${NavbarStyles.iconSm} mr-4`}></span>Usuarios partner</button>
                    <button type="button" className="btn btn-primary w-100 text-left d-flex align-items-center"><span className={`fas fa-users ${NavbarStyles.iconSm} mr-4`}></span>Usuarios</button>
                    <button type="button" className="btn btn-primary w-100 text-left d-flex align-items-center"><span className={`fas fa-video ${NavbarStyles.iconSm} mr-4`}></span>Cursos</button>
                </div>
                <span onClick={() => console.log('Saliendo...')} className="w-100 text-left text-danger font-weight-bold">Log out</span>
            </div>
        </div>
    )
}

export default NavbarDesktop
