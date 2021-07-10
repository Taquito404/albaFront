import React from 'react';
import Image from 'next/image';
import UserImg from '../../src/assets/img/UserImg-2.png'
import AlbaForm from '../../src/assets/img/login-alba-maternidad.png'

import miMembresiaStyles from './styles/miMembresia.module.scss';
const MiMembresia = () => {
    return (
        <div className={miMembresiaStyles.container}>
            <div className={miMembresiaStyles.wrapperSubscription}>
                <div className={miMembresiaStyles.headerUserWrapper}>
                    <div className={miMembresiaStyles.imageWrapper}>
                        <Image src={UserImg} width={100} height={100} />
                    </div>

                    <div className={miMembresiaStyles.buttonWrapper}>
                        <button type="button">Salir</button>
                    </div>
                </div>

                <div className={miMembresiaStyles.userSubInfoWrapper}>
                    <h3>User</h3>

                    <div className={miMembresiaStyles.membresiaWrapper}>
                        <div>
                            <label>Correo:</label>
                            <p>user@mail.com</p>
                        </div>
                        <div>
                            <label>Membresía:</label>
                            <p>Free <span>Cancelar membresía</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={miMembresiaStyles.fixedImage}>
                <Image
                    src={AlbaForm}
                />
            </div>
        </div>
    )
}

export default MiMembresia;
