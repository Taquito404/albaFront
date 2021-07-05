import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import FormAEPartner from '../../../../src/components/FormAEPartner';

import adminStyles from '../../styles/adminStyles.module.scss';
import headerImg from '../../../../src/assets/img/elemento-ilustrativo-alba-maternidad-1.png';
import FormImage from '../../../../src/assets/img/alba-form.png';
import { useRouter } from 'next/router';

const EditarPartner = () => {
    const [user, setUser] = useState({});
    const router = useRouter();

    useEffect(() => {
        const getUserById = async () => {
            try {
                const token = window.localStorage.getItem('token');
                const { id } = router.query;
                let options = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        auth: token
                    }
                }
                const { data } = await axios.get(`https://dev-alba.herokuapp.com/users/user/${id}`, options);
                //const partners = data.data.users.filter(user => user.role.includes('partner'));
                //setUsers(partners);
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
            getUserById();
        return () => {
            setUser({})
        }
    }, [])

    return (
        <>
            <div className="w-100 d-flex flex-column flex-lg-row">
                <div className="container container-fluid">
                    <div className={`w-100 text-center mt-3 shadow-sm border bg-light position-relative rounded p-4`}>
                        <h4 className="font-weight-bold">Editar usuario partner</h4>
                        <div className={adminStyles.imgHeader}>
                            <Image src={headerImg} alt="header" height={70} width={50} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 col-md-8">
                            {
                                //<FormAEPartner buttonDesc="Editar Usuario" />
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

export default EditarPartner;