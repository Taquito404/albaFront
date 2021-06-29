import React, { useEffect, useState } from 'react';
import AdminInfo from './AdminInfo';
import Link from 'next/link';

import NavResponsive from './NavResponsive';
import NavbarDesktop from './NavbarDesktop';
import NavbarStyles from './styles/navbar.module.scss';

const NavbarAdmin = () => {
    const [visibility, setVisibility] = useState(false);

    return (
        <>
            <div className="d-lg-none w-100 bg-primary py-4 px-2 d-flex justify-content-end">
                <div>
                    <span
                        onClick={() => setVisibility(!visibility)}
                        className={`text-white mr-3 fas fa-bars ${NavbarStyles.iconMd}`}
                    ></span>
                </div>
            </div>

            <NavbarDesktop />

            {
                visibility === true ?
                    <NavResponsive
                        setVisibility={setVisibility}
                        visibility={visibility}
                    />
                    :
                    null
            }
        </>
    )
}

export default NavbarAdmin;
