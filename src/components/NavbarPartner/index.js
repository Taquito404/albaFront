import React from 'react'
import Link from 'next/link'
import NavbarStyles from "./styles/navbarpartner.module.scss";
import NavbarDesktop from './NavbarDesktop'



const NavbarPartner = () => {
    return (
        <nav className={`d-none d-md-block  text-white p-4 ${NavbarStyles.navWrapper}`}>
            <NavbarDesktop/>

            <div className={`${NavbarStyles.separator}`}>
            </div>

            <div className={`row btn-group-vertical w-100 my-0 ${NavbarStyles.buttonElement}`}>
                <Link href="/partner/menu" className= {`text-left link-nav ${NavbarStyles.textDecoration}`}>MENÚ</Link>
            </div>
                
            <div className={`row btn-group-vertical w-100 ${NavbarStyles.buttonElement}`}> 
                <Link href="/partner/cursos" className="text-left link-nav">CURSOS</Link>
            </div>

            <div className={`row btn-group-vertical w-100 ${NavbarStyles.buttonBlank}`}> 
                
            </div>

            <div className={`row btn-group-vertical w-100 ${NavbarStyles.buttonLogout}`}> 
                <Link href="/partner/cursos" className="text-left link-nav">LOG OUT</Link>
            </div>

            

            
        </nav>
    )
}

export default NavbarPartner;

