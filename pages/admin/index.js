import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import headerImg from '../../src/assets/img/elemento-ilustrativo-alba-maternidad-1.png';
import NavbarAdmin from '../../src/components/NavbarAdmin';
import adminStyles from './styles/adminStyles.module.scss';

const Home = () => {
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

            <NavbarAdmin />
            <div className="container container-fluid">
                <div className={`w-100 text-center mt-3 shadow-sm border bg-light position-relative rounded p-4`}>
                    <h4 className="font-weight-bold">Alba Adminstración</h4>
                    <div className={adminStyles.imgHeader}>
                        <Image src={headerImg} alt="header" height={100} width={50} />
                    </div>

                    <button type="button" className="btn btn-primary w-75 mt-3">
                        Agrega un curso
                    </button>
                </div>

                <h4 className="font-weight-bold text-center mt-3">Usuarios partner</h4>
                <div className="row d-md-flex justify-content-md-center">
                    <div className="col-12 col-md-4 mt-2">
                        <div className={`card mt-2 ${adminStyles.hCard}`}>
                            <div className="card-body">
                                <h5 className="card-title">Usuarios partner</h5>
                                <p className="card-text">Podras visualizar, eliminar, crear y modificar cada uno de tus usuarios partner</p>
                                <button type="button" className="btn btn-primary w-100">Ir ahora</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-2">
                        <div className={`card mt-2 ${adminStyles.hCard}`}>
                            <div className="card-body">
                                <h5 className="card-title">Usuarios</h5>
                                <p className="card-text">Podras visualizar, eliminar y modificar cada uno de tus usuarios</p>
                                <button type="button" className="btn btn-primary w-100">Ir ahora</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-2">
                        <div className={`card mt-2 ${adminStyles.hCard}`}>
                            <div className="card-body">
                                <h5 className="card-title">Cursos</h5>
                                <p className="card-text">Podras visualizar, crear y modificar tus cursos. Ademas de agregar lecciones a tu curso.</p>
                                <button type="button" className="btn btn-primary w-100">Ir ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
