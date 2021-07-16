import React, { useState } from 'react';
import Head from "next/head";
import Image from 'next/image';
import FormAEPartner from '../../../src/components/FormAEPartner';
import { useRouter } from 'next/router';

import adminStyles from '../styles/adminStyles.module.scss';
import headerImg from '../../../src/assets/img/elemento-ilustrativo-alba-maternidad-1.png';
import FormImage from '../../../src/assets/img/alba-form.png';
import axios from 'axios';

const AgregarPartner = () => {
    const [user, setUser] = useState({
        userName: '',
        email: '',
        name: '',
        lastName: '',
        cellphone: '',
        password: '',
    });
    const [visibilityPopUp, setVisibilityPopUp] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState({
        titlePopUp: '',
        bodyPopUp: ''
    });
    const router = useRouter();

    const handleChangeValues = ev => {
        setUser({
            ...user,
            [ev.target.name]: ev.target.value
        })
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const { userName, email, name, lastName, cellphone, password } = user;
            if (!userName || !email || !name || !lastName || !cellphone || !password) {
                setVisibilityPopUp(true);
                setMessagePopUp({
                    titlePopUp: 'Campos vacios',
                    bodyPopUp: 'Favor de llenar todos los campos.'
                })
                return;
            }
            const newUser = {
                userName,
                email,
                name,
                lastName,
                cellphone,
                password,
                role: 'partner'
            };
            const token = window.localStorage.getItem('token');
            let options = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    auth: token
                }
            }
            // https://dev-alba.herokuapp.com/users/signup
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}users/sigup`
                , newUser, options);
            setVisibilityPopUp(false);
            setUser({
                userName: '',
                email: '',
                name: '',
                lastName: '',
                cellphone: '',
                password: '',
            });
            router.push('/admin/usuarios-partner')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Head>
                <title>Agregar partner</title>
            </Head>
            {
                visibilityPopUp === true ?
                    <div className="mt-3 animate__animated animate__backInDown alert alert-dismissible alert-danger position-fixed fixed-top w-50 mx-auto">
                        <span className={`${adminStyles.cursor} fas fa-times mr-2`} onClick={() => setVisibilityPopUp(false)}></span>
                        <strong className="mr-2">{messagePopUp.titlePopUp}!</strong>
                        {messagePopUp.bodyPopUp}
                    </div>
                    :
                    null
            }
            <div className="w-100 d-flex flex-column flex-lg-row">
                <div className="container container-fluid">

                    <div className={`w-100 text-center mt-3 shadow-sm border bg-light position-relative rounded p-4`}>
                        <h4 className="font-weight-bold">Agregar usuario partner</h4>
                        <div className={adminStyles.imgHeader}>
                            <Image src={headerImg} alt="header" height={70} width={50} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 col-md-8">
                            <FormAEPartner
                                buttonDesc="Agregar Usuario"
                                handleChangeValues={handleChangeValues}
                                handleSubmit={handleSubmit}
                                user={user}
                            />
                        </div>
                        <div className="d-none d-md-block col-md-4 align-self-end">
                            <Image src={FormImage} alt="form-image" height={550} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgregarPartner
