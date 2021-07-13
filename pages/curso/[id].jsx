import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios';
import { useRouter } from 'next/router';

import leccionStyles from './styles/leccionStyles.module.scss';
import searchIcon from '../../src/assets/img/iconos/search.png'
import VideoCard from '../../src/components/VideoCard';

const Leccion = () => {
    const router = useRouter();
    const [curso, setCurso] = useState({})
    const [lecciones, setLecciones] = useState([])
    useEffect(() => {
        const getCursoById = async () => {
            try {
                const { id } = router.query
                const { data } = await axios.get(`https://dev-alba.herokuapp.com/courses/${id}`);
                setCurso(data.data.courses);
            } catch (error) {
                console.error(error);
            }
        }
        getCursoById()
        return () => {
            setCurso({})
        }
    }, []);

    useEffect(() => {
        const getLeccionesByCurso = async () => {
            try {
                const { data } = await axios.get('https://dev-alba.herokuapp.com/videos');
                const filteredLecciones = data.data.videos.filter(leccion => leccion.courseId == router.query.id);
                setLecciones(filteredLecciones);
            } catch (error) {
                console.error(error);
            }
        }
        getLeccionesByCurso()
        return () => {
            setLecciones([])
        }
    }, [])

    console.log(curso);

    return (
        <div className={leccionStyles.container}>
            <div className={leccionStyles.headerWrapper} style={{ backgroundImage: `url(${!curso ? '': curso.imgUrl})` }}>
                <h3>Curso</h3>
                <p>Descripcion del curso</p>
                <p>Por: Nombre del Mentor asignado</p>
            </div>

            <div className={leccionStyles.contentWrapper}>
                <div className={leccionStyles.filterWrapper}>
                    <select disabled>
                        <option defaultChecked>Filtrar por</option>
                    </select>

                    <div className={leccionStyles.searchWrapper}>
                        <input type="text" placeholder="Buscar" />
                        <div>
                            <Image src={searchIcon} />
                        </div>
                    </div>
                </div>

                <div className={leccionStyles.videosWrapper}>
                    {
                        !lecciones ?
                            null
                            :
                            lecciones.map(leccion => <VideoCard
                                leccionStyles={leccionStyles}
                                leccion={leccion}
                            />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Leccion
