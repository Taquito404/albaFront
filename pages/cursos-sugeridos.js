import React from 'react'
import Cover from '../src/components/Cover/Cover'
import CourseBar from '../src/components/CourseBar/CourseBar'
import CardCourses from '../src/components/CardCourses/CardCourses'
import Carussel from '../src/components/CarusselButton/CarusselButton'
import Styles from '../styles/Suggested.module.scss'

export default function sugeridos () {
    return (
        <div className={`${Styles.background}`}>
            <div>
                <Cover/>
            </div>
            <div>
                <CourseBar/>  
            </div>
            <div className={Styles.cardStyle}>
                <CardCourses/>
                <CardCourses/>
                <CardCourses/>
                <CardCourses/>
            </div>
            <div>
                <Carussel/>
            </div>
        </div>
    )
} 