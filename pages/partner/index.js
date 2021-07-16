import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from  'axios'
import NavbarPartner  from '../../src/components/NavbarPartner'
import BarChart from '../../src/components/BarChart/BarChart'
import CoursesList from '../../src/components/CoursesList/CoursesList'
import Styles from '../../styles/Partner.module.scss'
import HeaderDesktop from '../../src/components/HeaderPartner/HeaderDesktop'


const Home = () => {
 
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </Head>
            <div className="w-100 d-flex flex-column flex-lg-row justify-content-evenly">
                <NavbarPartner className="m-5"/>
            <div className={`d-flex flex-column justify-content-center  border border-dark ${Styles.chartOutContainer}`}>
                    <HeaderDesktop/>
                    <BarChart/>
                    <CoursesList/>
                </div>
            </div>
        </>
    )
}

export default Home;