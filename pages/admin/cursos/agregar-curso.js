import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavbarAdmin from '../../../src/components/NavbarAdmin';
import FormCursos from '../../../src/components/FormCursos';

import adminStyles from '../styles/adminStyles.module.scss';
import headerImg from '../../../src/assets/img/elemento-ilustrativo-alba-maternidad-1.png';
import FormImage from '../../../src/assets/img/alba-form.png';
import ModalCursos from '../../../src/components/ModalCursos';

const AgregarCurso = () => {
    const [visibilityModal, setVisibilityModal] = useState(false);
    const [visibilityClass, setVisibilityClass] = useState('');
    const [users, setUsers] = useState([])


    useEffect(() => {
        if (visibilityModal === false) {
            setVisibilityClass('d-none');
            return;
        }
        setVisibilityClass('d-block')
    }, [visibilityModal]);



    const handleShowModal = () => setVisibilityModal(true);
    const handleCloseModal = () => setVisibilityModal(false);


    return (
        <>

            <div className="w-100 d-flex flex-column flex-lg-row">
                <div className="container container-fluid">
                    <div className={`w-100 text-center mt-3 shadow-sm border bg-light position-relative rounded p-4`}>
                        <h4 className="font-weight-bold">Agregar curso</h4>
                        <div className={adminStyles.imgHeader}>
                            <Image src={headerImg} alt="header" height={70} width={50} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 col-md-8">
                            <FormCursos
                                handleShowModal={handleShowModal}
                                handleCloseModal={handleCloseModal}
                            />
                        </div>
                        <div className="d-none d-md-block col-md-4 align-self-end">
                            <Image src={FormImage} alt="form-image" height={550} />
                        </div>
                        <div className="col-12">
                            <h4 className="font-weight-bold">Lecciones de este curso</h4>
                        </div>
                    </div>
                </div>
            </div>

            <ModalCursos
                visibilityClass={visibilityClass}
                handleCloseModal={handleCloseModal}
            />
        </>
    )
}

export default AgregarCurso;
