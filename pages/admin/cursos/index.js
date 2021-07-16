import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image';
import { useRouter } from 'next/router';

import ListElement from '../../../src/components/ListElement';
import adminStyles from '../styles/adminStyles.module.scss';
import headerImg from '../../../src/assets/img/elemento-ilustrativo-alba-maternidad.png';

const Cursos = () => {
    const [cursos, setCursos] = useState([]);
    const [users, setUsers] = useState([]);

    const [hasRemoved, setHasRemoved] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const getCursos = async () => {
            try {
                // 'https://dev-alba.herokuapp.com/courses'
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}courses`);
                setCursos(data.data.courses);
            } catch (error) {
                console.error(error)
            }
        }
        getCursos();
        return () => {
            setCursos([])
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

    const handleDeleteCurso = async id => {
        try {
            const token = window.localStorage.getItem('token');
            let options = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    auth: token
                }
            }
            // `https://dev-alba.herokuapp.com/courses/${id}`
            const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}courses/${id}`, options);
            setHasRemoved(true);
            setHasRemoved(false);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>

            <div className="w-100 d-flex flex-column flex-lg-row">
                <div className="container container-fluid">
                    <div className={`w-100 text-center mt-3 shadow-sm border bg-light position-relative rounded p-4`}>
                        <h4 className="font-weight-bold">Cursos</h4>
                        <div className={adminStyles.imgHeader}>
                            <Image src={headerImg} alt="header" height={70} width={50} />
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label className="font-weight-bold">Username</label>
                        <input type="text" className="form-control-plaintext border rounded shadow-sm p-1" placeholder="Filtra por curso" disabled />
                    </div>
                    <div className="p-2 px-4 bg-primary d-flex justify-content-between text-white align-items-center rounded">
                        <p className="font-weight-bold">Tus Cursos</p>
                        <span
                            className={`${adminStyles.cursor} fas fa-plus-circle`}
                            onClick={() => router.push('/admin/cursos/agregar-curso')}
                        ></span>
                    </div>

                    <ul className="list-group mt-3 text-primary">
                        {
                            !cursos ? <ListElement /> : cursos.map(curso => <ListElement curso={curso} key={curso._id} handleDeleteCurso={handleDeleteCurso} />)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Cursos;
