import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import NavResponsive from './NavResponsive';
import NavbarDesktop from './NavbarDesktop';
import NavbarStyles from './styles/navbar.module.scss';

const NavbarAdmin = () => {
    const [visibility, setVisibility] = useState(false);
    const [hideNavbar, setHideNavbar] = useState(false);
    const [user, setUser] = useState({});
    const router = useRouter();

    useEffect(() => {
        const getProtection = async () => {
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
                    router.push('/');
                    setHideNavbar(true)
                    return;
                }
            });
        }
        getProtection();
        return () => {
            setHideNavbar(false);
        }
    }, []);

    useEffect(() => {
        const getUser = async () => {
            try {
                const token = window.localStorage.getItem('token');
                let options = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        auth: token,
                    }
                }
                const { data } = await axios.get('https://dev-alba.herokuapp.com/users/profile', options);
                setUser(data.user);
            } catch (error) {
                console.error(error);
            }
        }
        getUser()
        return () => {
            setUser({})
        }
    }, [])

    const handleLogOut = () => {
        window.localStorage.removeItem('token');
        router.push('/');
        setHideNavbar(true);
        return;
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
            {
                hideNavbar === false ?
                    <NavbarDesktop
                        user={user}
                        handleLogOut={handleLogOut}
                    />
                    :
                    null
            }
            {
                visibility === true && hideNavbar === false ?
                    <NavResponsive
                        user={user}
                        setVisibility={setVisibility}
                        visibility={visibility}
                        handleLogOut={handleLogOut}
                    />
                    :
                    null
            }
        </>
    )
}

export default NavbarAdmin;
