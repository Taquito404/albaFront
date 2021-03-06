import React from 'react'
import CardMenu from '../CardMenu';
const MenuCards = ({ userDetailsStyles, Membresia, Cursos, Marketplace, Manos, Servicios }) => {

    return (
        <div className={userDetailsStyles.cardsWrapper}>
            <CardMenu
                userDetailsStyles={userDetailsStyles}
                cardImage={Membresia}
                titleCard='Mi membresia'
                path='/detalles-usuario/mi-membresia'
            />
            <CardMenu
                userDetailsStyles={userDetailsStyles}
                cardImage={Cursos}
                titleCard='Mis cursos'
                path='/mis-cursos'
            />

            <CardMenu
                userDetailsStyles={userDetailsStyles}
                cardImage={Marketplace}
                titleCard='Mis compras'
                isDisable={true}
            />

            <CardMenu
                userDetailsStyles={userDetailsStyles}
                cardImage={Manos}
                titleCard='Mis donaciones'
                isDisable={true}
            />

            <CardMenu
                userDetailsStyles={userDetailsStyles}
                cardImage={Servicios}
                titleCard='Mis citas'
                isDisable={true}
            />
        </div>
    )
}

export default MenuCards
