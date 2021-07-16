import Styles from '../../../styles/Suggested.module.scss'
import React from 'react'
import { useRouter } from 'next/router'

export default function Cover({ cursos }) {
    const router = useRouter();
    return (
        <React.Fragment>
            <div className={Styles.headerWrapper}>
                <div>
                    <h3>Curso Recomendado</h3>
                    <p>{cursos.length === 0 ? null : cursos[0].title}</p>
                    <p>{cursos.length === 0 ? null : cursos[0].description}</p>
                    <button type="button" onClick={() => cursos.length === 0 ? null : router.push('/curso/' + cursos[0]._id)}>Ver mas</button>
                </div>
            </div>

        </React.Fragment>
    )
}
