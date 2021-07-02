import React from 'react'
import Head from 'next/head'
import NavbarPartner  from '../../src/components/NavbarPartner'
import BarChart from '../../src/components/BarChart/BarChart'
import PieChart from '../../src/components/PieChart/PieChart'
import Styles from '../../styles/Partner.module.scss'


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
                
                <div className={`d-flex flex-row justify-content-center  border-dark ${Styles.chartOutContainer}`}>
                    <BarChart/>
                    <PieChart/>
                </div>
            </div>
        </>
    )
}

export default Home;