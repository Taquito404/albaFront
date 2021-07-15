import React from 'react'
import modalStyles from './styles/modalStyles.module.scss';

const Modal = ({ message, title, handleClose, handleConfirm }) => {
    return (
        <div className={modalStyles.container}>
            <div className={modalStyles.modal}>
                <h3>{title}</h3>
                <p>{message}</p>
                <div className={modalStyles.buttonWrapper}>
                    <button type="button" className={modalStyles.confirm} onClick={handleConfirm}>Aceptar</button>
                    <button type="button" className={modalStyles.cancel} onClick={handleClose}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
