import React from 'react';
import Image from 'next/image'
import MenuCards from '../../src/components/MenuCards';

import UserImg from '../../src/assets/img/UserImg.png';
import Membresia from '../../src/assets/img/iconos/DISEÑO-DE-INTERIORES.png';
import Marketplace from '../../src/assets/img/iconos/marketplace-alba-maternidad.png';
import Manos from '../../src/assets/img/iconos/NON-PROFIT.png';
import Servicios from '../../src/assets/img/iconos/servicios-medicos-alba-maternidad.png';
import Cursos from '../../src/assets/img/iconos/cursos-y-talleres-alba-maternidad.png';
import perfil from '../../src/assets/img/perfil-de-usuario-movil.png';

import userDetailsStyles from './styles/detallesUsuario.module.scss';

const DetallesUsuario = () => {
    
    return (
        <div className={userDetailsStyles.container}>
            <div className={userDetailsStyles.userWrapper}>
                <div className={userDetailsStyles.cardUser}>
                    <div className={userDetailsStyles.headerCard}>
                        <Image src={UserImg} alt="no-user-image" />
                        <div className={userDetailsStyles.userInfo}>
                            <h3>User</h3>
                            <p>user@mail.com</p>
                        </div>
                    </div>
                    <ul>
                        <li>Escritorio</li>
                        <li>Pedidos</li>
                        <li>Consultas</li>
                        <li>Descargas</li>
                        <li>Informacion de la cuenta</li>
                    </ul>
                </div>

                <div className={userDetailsStyles.userDetails}>
                    <p>Hola Usuario (¿no eres tú? <span>Cerrar sessión</span>)</p>
                    <p>Desde el escritorio de tu cuenta puedes ver tus <span>pedidos recientes</span>, gestionar tus <span>direcciones de envío</span> y <span>facturación</span> , <span>editar tu contraseña</span> y <span>los detalles de tu cuenta</span> y <span>membresía.</span></p>
                    <MenuCards
                        userDetailsStyles={userDetailsStyles}
                        Membresia={Membresia}
                        Cursos={Cursos}
                        Marketplace={Marketplace}
                        Manos={Manos}
                        Servicios={Servicios}
                    />
                </div>
            </div>

            <MenuCards
                userDetailsStyles={userDetailsStyles}
                Membresia={Membresia}
                Cursos={Cursos}
                Marketplace={Marketplace}
                Manos={Manos}
                Servicios={Servicios}
            />

            <div className={userDetailsStyles.positionFixed}>
                <Image src={perfil} />
            </div>
        </div>
    )
}

export default DetallesUsuario
