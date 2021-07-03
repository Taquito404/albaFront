import React, { useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import NavbarAdmin from '../../../src/components/NavbarAdmin';
import ListElement from '../../../src/components/ListElement';

import adminStyles from '../styles/adminStyles.module.scss';
import headerImg from '../../../src/assets/img/elemento-ilustrativo-alba-maternidad.png';
const Usuarios = () => {
    const [users, setUsers] = useState([{
        username: "demian1",
        email: "ericdemian.martinez@gmail.com",
        firstName: "Eric",
        lastName: "Martinez"
    }])
    return (
        <>
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
                <div className="container container-fluid">
                    <div className={`w-100 text-center mt-3 shadow-sm border bg-light position-relative rounded p-4`}>
                        <h4 className="font-weight-bold">Usuarios</h4>
                        <div className={adminStyles.imgHeader}>
                            <Image src={headerImg} alt="header" height={70} width={50} />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label className="font-weight-bold">Username</label>
                        <input type="text" className="form-control-plaintext border rounded shadow-sm p-1" placeholder="Filtra por usuario" />
                    </div>
                    <div className="p-2 px-4 bg-primary d-flex justify-content-between text-white align-items-center rounded">
                        <p className="font-weight-bold">Tus usuarios</p>
                    </div>

                    <ul className="list-group mt-3 text-primary">
                        <ListElement
                            user={users[0]}
                        />
                        <ListElement
                            user={users[0]}
                        />
                        <ListElement
                            user={users[0]}
                        />
                        <ListElement
                            user={users[0]}
                        />
                        <ListElement
                            user={users[0]}
                        />
                        <ListElement
                            user={users[0]}
                        />
                        <ListElement
                            user={users[0]}
                        />
                        <ListElement
                            user={users[0]}
                        />
                        <ListElement
                            user={users[0]}
                        />
                    </ul>


                </div>
            </div>
        </>
    )
}

export default Usuarios
