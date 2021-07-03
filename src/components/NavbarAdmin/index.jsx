import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import AdminInfo from './AdminInfo';
import NavResponsive from './NavResponsive';
import NavbarDesktop from './NavbarDesktop';
import NavbarStyles from './styles/navbar.module.scss';

const NavbarAdmin = () => {
    const [isProtected, setIsProtected] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const getProtection = async () => {
            window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGRmYThjYzhmZTFhMWU4MmEwMzg5OCIsImlhdCI6MTYyNTI0NTIzOCwiZXhwIjoxNjI1MzMxNjM4fQ.VXx_uSA66ZH1MyyLAJGjhqmsAlfE8DXqjKXzp8alnI0');
            const token = window.localStorage.getItem('token');
            let options = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    auth: token,
                }
            }
            const { data } = await axios.get('https://dev-alba.herokuapp.com/users/profile', options);

            data.user.role.map(userRole => {
                if (userRole !== 'admin') {
                    router.push('/')
                    return;
                }
                setIsProtected(true);
            });
        }
        getProtection()
    }, []);

    if (!isProtected) {
        return (
            <div className="container container-fluid d-flex align-items-center justify-content-center">
                <h1>NO AUTH</h1>
            </div>
        )
    }
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
