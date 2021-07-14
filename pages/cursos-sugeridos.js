import React, { useState } from 'react'
import Cover from '../src/components/Cover/Cover'
import CourseBar from '../src/components/CourseBar/CourseBar'
import CardCourses from '../src/components/CardCourses/CardCourses'
import Carussel from '../src/components/CarusselButton/CarusselButton'
import DropDown from '../src/components/dropDownMenu/dropDown'
import CourseModal from '../src/components/CourseModal/CourseModal'
import Styles from '../styles/Suggested.module.scss'

const testArray = [
    {
        _id: 1,
        title: "Título 1",
        description: "TEST-1"

    },

    {
        _id: 2,
        title: "Título 2",
        description: "TEST-2"

    },

    {
        _id: 3,
        title: "Título 3",
        description: "TEST-3"

    },

    {
        _id: 4,
        title: "Título 4",
        description: "TEST-4"

    }

    // {
    //     _id: 5,
    //     title: "Título 5 ",
    //     description: "TEST-5"

    // }
]

export default function sugeridos ({data}) {
    const [selectedCourse, setSelectedCourse] = useState (null)

    return (
        <div className={`${Styles.background}`}>
            <div>
                <Cover/>
            </div>
            <div>
                {/* <CourseBar/>   */}
            </div>
            <div className={Styles.cardStyle}>

                {testArray.map ((item) => {
                    return (<CardCourses key={item._id} curso={item} openModal={setSelectedCourse}/>)
                })}
                
            </div>
            <div>
                <Carussel/>
            </div>
            {selectedCourse && (<CourseModal selected={selectedCourse} closeModal={setSelectedCourse} />)}
            
        </div>
    )
}


export async  function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  
    const data = await res.json();
    console.log(data);
  
    return { props: { data } };
  };