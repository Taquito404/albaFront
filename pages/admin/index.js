import React from 'react';
import Head from 'next/head'
import NavbarAdmin from '../../src/components/NavbarAdmin';
const Home = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous" />
            </Head>

            <div className="d-flex w-100">
                <NavbarAdmin />
                <div className="w-75 container container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>Content</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;