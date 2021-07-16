import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import headerImg from '../../assets/img/elemento-ilustrativo-alba-maternidad-1.png';
import CardAdmin from '../CardAdmin';
import homeStyles from './styles/homeStyles.module.scss';

const HomeContent = () => {
    const router = useRouter();

    return (
        <div className="container container-fluid">
            <div className={`w-100 text-center mt-3 shadow-sm border bg-light position-relative rounded p-4`}>
                <h4 className="font-weight-bold">Alba Adminstración</h4>
                <div className={homeStyles.imgHeader}>
                    <Image src={headerImg} alt="header" height={100} width={50} />
                </div>

                <button type="button" className="btn btn-primary w-75 mt-3" onClick={() => router.push('/admin/cursos/agregar-curso')} >
                    Agrega un curso
                </button>
            </div>

            <h4 className="font-weight-bold text-center mt-5">Tus opciones</h4>
            <div className="row d-md-flex justify-content-md-center">
                <div className="col-12 col-md-4 mt-2">
                    <CardAdmin
                        title="Usuarios partner"
                        description="Podras visualizar, eliminar, crear y modificar cada uno de tus usuarios partner"
                        buttonDesc="Ir ahora"
                        route='/admin/usuarios-partner'
                    />
                </div>
                <div className="col-12 col-md-4 mt-2">
                    <CardAdmin
                        title="Usuarios"
                        description="Podras visualizar, eliminar y modificar cada uno de tus usuarios"
                        buttonDesc="Ir ahora"
                        route='/admin/usuarios'
                    />
                </div>
                <div className="col-12 col-md-4 mt-2">
                    <CardAdmin
                        title="Cursos"
                        description="Podras visualizar, crear y modificar tus cursos. Ademas de agregar lecciones a tu curso."
                        buttonDesc="Ir ahora"
                        route='/admin/cursos'
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeContent;
