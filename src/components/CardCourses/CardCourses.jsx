import React from 'react'
import Styles from '../CardCourses/styles/card.module.scss'
import RoundButton from '../RoundButton/RoundButton'


export default function CardCourses() {
  return (
    <div className={`${Styles.background}`}>
      <div className={`${Styles.band}`}>
        <div className={`${Styles.item1}`}>
          <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" className={`${Styles.card}`}>
          <div className={`${Styles.thumb}`} ></div>
          <article>
            <h1>Título del curso</h1>
            <ul className={Styles.listStyle}>
              <il>
                <svg className={Styles.babyLogo}/>
              </il>
                <svg className={Styles.videoPlayer}/>
              <il>
              </il>
            </ul>
            <span>Descripción del curso.Descripción del curso.Descripción del curso.Descripción del curso.
            </span>
            <RoundButton/>
          </article>
            <div  className={Styles.cardFooter}>
              <span>Por: Nombre partner<br/>Asesor de---certificado
              </span>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  )
}

// style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png);"