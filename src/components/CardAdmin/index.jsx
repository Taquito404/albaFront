import React from 'react'
import cardStyles from './styles/cardStyles.module.scss';
import { useRouter } from 'next/router';

const CardAdmin = ({title, description, buttonDesc, route}) => {
    const router = useRouter();

    return (
        <div className={`card mt-2 ${cardStyles.hCard}`}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text mb-2">{description}</p>
                <button type="button" className="btn btn-primary w-100" onClick={()=> router.push(route)}>{buttonDesc}</button>
            </div>
        </div>
    )
}

export default CardAdmin;
