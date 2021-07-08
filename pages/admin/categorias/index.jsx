import React, { useState } from 'react'
import Image from 'next/image';
import axios from 'axios';

import adminStyles from '../styles/adminStyles.module.scss';
import headerImg from '../../../src/assets/img/elemento-ilustrativo-alba-maternidad-1.png';
import FormImage from '../../../src/assets/img/alba-form.png';
import { useRouter } from 'next/router';

const Categories = () => {
    const router = useRouter();

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

    const [category, setCategory] = useState({
        title: '',
        description: ''
    })

    const [visibilityPopUp, setVisibilityPopUp] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState({
        titlePopUp: '',
        bodyPopUp: ''
    });
    const handleChangeValues = ev => setCategory({ ...category, [ev.target.name]: ev.target.value })

    const handleSubmit = async ev => {
        ev.preventDefault();
        try {
            const {
                title,
                description
            } = category;

            const token = window.localStorage.getItem('token');
            let options = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    auth: token
                }
            }

            if (!title || !description) {
                setVisibilityPopUp(true);
                setMessagePopUp({
                    titlePopUp: 'Campos vacios',
                    bodyPopUp: 'Favor de llenar todos los campos.'
                });
                return;
            }
            const { data } = await axios.post('https://dev-alba.herokuapp.com/categories', category, options);
            setVisibilityPopUp(false);
            router.push('/admin');
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
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
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="font-weight-bold">Titulo</label>
                                    <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Titulo de categoria" name="title" onChange={handleChangeValues} value={!category.title ? '' : category.title} />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Descripcion</label>
                                    <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Descripcion de categoria" name="description" onChange={handleChangeValues} value={!category.description ? '' : category.description} />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Agrega categoria</button>
                            </form>
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

export default Categories
