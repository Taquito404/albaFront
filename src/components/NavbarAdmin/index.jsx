import React from 'react';
import AdminInfo from './AdminInfo';
import Link from 'next/link';
import NavbarStyles from './styles/navbar.module.scss';

const NavbarAdmin = () => {
    return (
        <nav className={`d-none d-md-block bg-primary text-white p-4 ${NavbarStyles.navWrapper}`}>
            <AdminInfo />

            <div className={`my-4 ${NavbarStyles.separator}`}>
            </div>

            <div className="btn-group-vertical w-100">
                <Link href="/admin/usuarios-partner" className="text-left link-nav">Usuarios Partners</Link>
                <Link href="/admin/usuarios" className="text-left link-nav">Usuarios</Link>
                <Link href="/admin/cursos" className="text-left link-nav">Cursos</Link>
            </div>
        </nav>
    )
}

export default NavbarAdmin;
