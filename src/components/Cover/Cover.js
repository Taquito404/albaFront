import CoverSuggestedCourses from '../CoverSuggestedCourses/CoverSuggestedCourses'
import RoundButton from '../RoundButton/RoundButton'
import PillButtonTrans from '../PillButtonTrans/PillButtonTrans'
import CourseBar from '../CourseBar/CourseBar'
import Styles from '../../../styles/Suggested.module.scss'
import React from 'react'

export default function Cover() {
    return (
        <React.Fragment>
            {
                /*
                    <div className={`${Styles.container}`}>
                <div className={`${Styles.under}`}>
                    <CoverSuggestedCourses/>
                        <div className={`${Styles.ontop}`}>
                            <h1>CURSO SUGERIDO</h1> 
                            <p>Descripción del curso</p>
                        </div>
                        <div className={`${Styles.placing}`}>
                            <RoundButton />
                            <PillButtonTrans/>
                        </div>
                </div>
                    <div></div>
                </div>
                <div></div>
                
                */
            }
            <div className={Styles.headerWrapper}>
                <div>
                    <h3>Tus cursos</h3>
                    <p>Aqui podras encontrar todos los cursos que has seleccionado o comprado.</p>
                    <button>Ver mas</button>
                </div>
            </div>

        </React.Fragment>
    )
}
