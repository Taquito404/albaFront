import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import jwt from 'jsonwebtoken'
import axios from 'axios';
import NavbarAdmin from '../NavbarAdmin';

const Layout = ({ children }) => {
    const [role, setRole] = useState('user');

    useEffect(() => {
        const getUser = async () => {
            try {
                window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGRmYThjYzhmZTFhMWU4MmEwMzg5OCIsImlhdCI6MTYyNTQ5NDg4OSwiZXhwIjoxNjI1NTgxMjg5fQ.vhESJgUH2T9gFGNf_hgFbT9O6WcSqIowVaJWYT7shZ8');
                const token = window.localStorage.getItem('token');
                if (!token) {
                    setRole('user');
                    return;
                }
                const today = new Date();
                const decodedToken = jwt.decode(token, { complete: true });

                if (decodedToken.payload.exp * 1000 < today.getTime()) {
                    window.localStorage.removeItem('token');
                    setRole('user');
                    return;
                }

                let options = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        auth: token,
                    }
                }
                const { data } = await axios.get('https://dev-alba.herokuapp.com/users/profile', options);
                data.user.role.map(userRole => {
                    setRole(userRole);
                })
            } catch (error) {
                console.error(error);
            }
        }
        getUser()

        return () => {
            setRole('')
        }
    }, []);

    const setView = (userRole) => {
        switch (userRole) {
            case 'admin':
                return (
                    <div>
                        <Head>
                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous" />
                            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
                            <link
                                rel="stylesheet"
                                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                            />
                        </Head>
                        <div className="w-100 d-flex flex-column flex-lg-row">
                            <NavbarAdmin />
                            <div className="container container-fluid w-100">
                                {children}
                            </div>
                        </div>
                    </div>
                )
            case 'partner':
                // ruta partners
                return (
                    <div>
                        {children}
                    </div>
                )
            case 'user':
                // ruta users
                return (
                    <div>
                        {children}
                    </div>
                )
            default:
                // ruta users
                return (
                    <div>
                        {children}
                    </div>
                )
        }
    }

    return (
        <>
            {
                !role ?
                    <div>Loading...</div>
                    :
                    setView(role)
            }
        </>
    )

}

export default Layout
