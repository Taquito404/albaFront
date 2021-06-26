import React from 'react';
import AdminInfo from './AdminInfo';
import NavbarStyles from './styles/navbar.module.scss';

const NavbarAdmin = () => {
    return (
        <nav className={`d-none d-md-block bg-primary text-white p-4 ${NavbarStyles.navWrapper}`}>
            <AdminInfo />

            <div className={`my-4 ${NavbarStyles.separator}`}>
            </div>

            <div className="btn-group-vertical w-100">
                <button type="button" className="btn btn-primary text-left">Usuarios Partners</button>
                <button type="button" className="btn btn-primary text-left">Usuarios</button>
                <button type="button" className="btn btn-primary text-left">Cursos</button>
            </div>
        </nav>
    )
}

export default NavbarAdmin;
