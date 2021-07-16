import React, { useEffect, useState } from 'react';
import Head from "next/head";
import axios from 'axios';
import Image from 'next/image';

import FormCursos from '../../../src/components/FormCursos';
import adminStyles from '../styles/adminStyles.module.scss';
import headerImg from '../../../src/assets/img/elemento-ilustrativo-alba-maternidad-1.png';
import FormImage from '../../../src/assets/img/alba-form.png';
import { useRouter } from 'next/router';

const AgregarCurso = () => {
    const router = useRouter();
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([])
    const [curso, setCurso] = useState({
        authorId: '',
        title: '',
        description: '',
        categoryId: '',
        createdDate: new Date(),
        imgUrl: '',
        price: ''
    });

    const [visibilityPopUp, setVisibilityPopUp] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState({
        titlePopUp: '',
        bodyPopUp: ''
    });

    useEffect(() => {
        const getUsers = async () => {
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
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}users`, options);
                const filteredUser = data.data.users.filter(user => user.role.includes('partner'))
                setUsers(filteredUser);
            } catch (error) {
                console.error(error)
            }
        }
        getUsers();
        return () => {
            setUsers([])
        }
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}categories`
                );
                setCategories(data.data.categories);
                console.log(categories)
            } catch (error) {
                console.error(error)
            }
        }
        getCategories();
        return () => {
            setCategories([])
        }
    }, []);

    const handleChangeValues = ev => setCurso({ ...curso, [ev.target.name]: ev.target.value })

    const handleSubmit = async ev => {
        ev.preventDefault();
        try {
            const {
                authorId,
                title,
                description,
                categoryId,
                createdDate,
                imgUrl,
                price
            } = curso;

            const token = window.localStorage.getItem('token');
            let options = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    auth: token
                }
            }

            if (!authorId || !title || !description || !categoryId || !createdDate || !imgUrl || !price) {
                setVisibilityPopUp(true);
                setMessagePopUp({
                    titlePopUp: 'Campos vacios',
                    bodyPopUp: 'Favor de llenar todos los campos.'
                })
                return;
            }
            // 'https://dev-alba.herokuapp.com/courses'
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}courses`, curso, options);
            setVisibilityPopUp(false);
            router.push('/admin/cursos');
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Head>
                <title>Agregar Curso</title>
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
                        <h4 className="font-weight-bold">Agregar curso</h4>
                        <div className={adminStyles.imgHeader}>
                            <Image src={headerImg} alt="header" height={70} width={50} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 col-md-8">
                            {
                                !users || !categories ?
                                    null
                                    :
                                    <FormCursos
                                        categories={categories}
                                        users={users}
                                        curso={curso}
                                        handleChangeValues={handleChangeValues}
                                        handleSubmit={handleSubmit}
                                    />
                            }
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

export default AgregarCurso;
