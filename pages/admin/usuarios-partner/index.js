import React, { useEffect, useState } from 'react';
import Head from "next/head";
import axios from 'axios'
import Image from 'next/image';
import ListElement from '../../../src/components/ListElement';

import { useRouter } from 'next/router';
import adminStyles from '../styles/adminStyles.module.scss';
import headerImg from '../../../src/assets/img/elemento-ilustrativo-alba-maternidad-1.png';

const UsuariosPartner = () => {
    const [users, setUsers] = useState([]);
    const [hasRemoved, setHasRemoved] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const getUsersPartner = async () => {
            try {
                const token = window.localStorage.getItem('token');
                let options = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        auth: token
                    }
                }
                // 'https://dev-alba.herokuapp.com/users'
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}`
                    / users, options);
                const partners = data.data.users.filter(user => user.role.includes('partner'));
                setUsers(partners);
            } catch (error) {
                console.error(error)
            }
        }
        getUsersPartner();
        return () => {
            setUsers([])
        }
    }, [hasRemoved]);

    useEffect(() => {
        try {
            const token = window.localStorage.getItem('token');
            if (!token) {
                router.push('/')
                return;
            }
        } catch (error) {

        }
    }, [])

    const handleDeleteUser = async id => {
        try {
            const token = window.localStorage.getItem('token');
            let options = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    auth: token
                }
            }
                `https://dev-alba.herokuapp.com/users/${id}`
            const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, options);
            setHasRemoved(true);
            setHasRemoved(false);
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <>
            <Head>
                <title>Usuarios partner</title>
            </Head>
            <div className="w-100 d-flex flex-column flex-lg-row">
                <div className="container container-fluid">
                    <div className={`w-100 text-center mt-3 shadow-sm border bg-light position-relative rounded p-4`}>
                        <h4 className="font-weight-bold">Usuarios partner</h4>
                        <div className={adminStyles.imgHeader}>
                            <Image src={headerImg} alt="header" height={70} width={50} />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label className="font-weight-bold">Username</label>
                        <input
                            type="text"
                            className="form-control-plaintext border rounded shadow-sm p-1"
                            placeholder="Filtra por usuario"
                            disabled
                        />
                    </div>
                    <div className="p-2 px-4 bg-primary d-flex justify-content-between text-white align-items-center rounded">
                        <p className="font-weight-bold">Tus usuarios partner</p>
                        <span
                            className={`${adminStyles.cursor} fas fa-plus-circle`}
                            onClick={() => router.push('/admin/usuarios-partner/agregar-partner')}
                        ></span>
                    </div>

                    <ul className="list-group mt-3 text-primary">
                        {
                            !users ? <ListElement /> : users.map(user => <ListElement
                                user={user}
                                key={user._id}
                                handleDeleteUser={handleDeleteUser}
                            />)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UsuariosPartner
