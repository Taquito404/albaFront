import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'
import Cover from '../src/components/Cover/Cover'
import CourseBar from '../src/components/CourseBar/CourseBar'
import CardCourses from '../src/components/CardCourses/CardCourses'
import Carussel from '../src/components/CarusselButton/CarusselButton'
import DropDown from '../src/components/dropDownMenu/dropDown'
import CourseModal from '../src/components/CourseModal/CourseModal'
import Styles from '../styles/Suggested.module.scss'

export default function sugeridos({ data }) {
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [cursos, setCursos] = useState([]);
    const [mentores, setMentores] = useState([])

    const [lecciones, setLecciones] = useState([])
    const router = useRouter()


    useEffect(() => {
        const getCursos = async () => {
            try {
                const { data } = await axios.get('https://dev-alba.herokuapp.com/courses');
                setCursos(data.data.courses)
                // console.log (data)
            } catch (error) {
                console.error(error);
            }
        }
        getCursos();
        return () => {
            setCursos([])
        }
    }, [])


    // Función para obtener las lecciones

    useEffect(() => {
        const getLeccionesByCurso = async () => {
            try {
                const { data } = await axios.get('https://dev-alba.herokuapp.com/videos');
                setLecciones(data.data.videos)
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        }
        getLeccionesByCurso()


    }, [])

    const handleOpenModal = () => {setSelectedCourse(true); console.log(selectedCourse)}
    const handleCloseModal = () => setSelectedCourse(false);

    return (
        <div className={`${Styles.background}`}>
            <div>
                <Cover />
            </div>

            <div className={Styles.cardStyle}>
                {cursos.map((item) => {
                    return (<CardCourses key={item._id} curso={item} lecciones={lecciones} handleOpenModal={handleOpenModal} />)
                })}
            </div>
            <div>
                {/* <Carussel/> */}
            </div>
            {
                selectedCourse === true ?
                <CourseModal handleCloseModal={handleCloseModal} />
                :
                null
            }

        </div>
    )
}



// {/* //  {mentores.map ((mentor) => { */}
//                 //     return (<CardCourses key={item._id} mentor={mentor})
//                 // })}

// {cursos.map ((item) => {
//     return (curso={item})
// })}