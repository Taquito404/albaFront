import React from 'react'
import toastStyles from './styles/toastStyles.module.scss';
const Toast = ({ data, handleClose }) => {
    return (
        <div className={toastStyles.containerToast}>
            <div className={toastStyles.toastWrapper}>
                <div className={toastStyles.closeWrapper}>
                    <h3>{data.title}</h3>
                    <span type="text" onClick={handleClose}>x</span>
                </div>
                <p>{data.message}</p>
            </div>
        </div>
    )
}

export default Toast
