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

export default function Sugeridos({ data }) {
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [cursos, setCursos] = useState([]);
    const [mentor, setMentor] = useState({});

    const [lecciones, setLecciones] = useState([])
    const [curso, setCurso] = useState({})
    const router = useRouter()


    useEffect(() => {
        const getCursos = async () => {
            try {
                // 'https://dev-alba.herokuapp.com/courses'
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}courses`);
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
                // 'https://dev-alba.herokuapp.com/videos'
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}videos`);
                setLecciones(data.data.videos)
            } catch (error) {
                console.error(error);
            }
        }
        getLeccionesByCurso()


    }, [])

    useEffect(() => {
        const getMentor = async () => {
            try {
                if (Object.keys(curso).length === 0) {
                    return;
                }

                const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + 'users/mentor/' + curso.authorId);
                setMentor(data.data.user)
            } catch (error) {
                console.error(error)
            }
        }
        getMentor()
        return () => {
            setMentor({});
        }
    }, [selectedCourse])

    const handleOpenModal = (curso) => {
        setSelectedCourse(true);
        setCurso(curso);
    }
    const handleCloseModal = () => setSelectedCourse(false);

    return (
        <div className={`${Styles.background}`}>
            <div>
                <Cover cursos={cursos}/>
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
                    <CourseModal handleCloseModal={handleCloseModal} curso={curso} lecciones={lecciones} mentor={mentor} setSelectedCourse={setSelectedCourse} />
                    :
                    null
            }

        </div>
    )
}