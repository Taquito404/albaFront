import React, { useState, useEffect } from 'react'
import axios from  'axios'
import Link from 'next/link'
import NavbarStyles from "./styles/navbarpartner.module.scss"
import NavbarDesktop from './NavbarDesktop'
import Image from 'next/image';
import NavBarImg from  '../../assets/img/alba-flor.png'
import NavBarLogo from '../../assets/img/logo-blanco.png'



export default function NavbarPartner ({data})  {

    const [profile, setProfile] = useState({name: "", lastName: "", userName: ""});
    
    useEffect(() => {
        const getProfile = async () => {
            try {
                const token = window.localStorage.getItem('token');
                let options = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        auth: token
                    }
                }
                const { data } = await axios.get('https://dev-alba.herokuapp.com/users', options);
                setProfile(data.user)
                console.log (data)
            } catch (error) {
                console.error(error);
            }
        }
        getProfile();
     
    }, [])
    
    return (
        <nav className={`d-none d-md-block  text-white p-4 ${NavbarStyles.navWrapper}`}>
            
        <NavbarDesktop profile={profile}/>
           

            <div className={`${NavbarStyles.separator}`}>
            </div>

            <div className={`row btn-group-vertical w-100 my-0 ${NavbarStyles.buttonElement}`}>
                <Link href="/partner/menu" className= {`text-left link-nav ${NavbarStyles.textDecoration}`}>CURSOS</Link>
            </div>
                
            <div className={`row btn-group-vertical w-100 ${NavbarStyles.buttonElement}`}> 
                <Link href="/partner/cursos" className="text-left link-nav">SALIR</Link>
            </div>

            <div className={`row btn-group-vertical w-100 ${NavbarStyles.buttonBlank}`}> 
            </div>

            <div className="d-flex mt-5"> 
                <Image src={NavBarImg} height={405} width={200}/>
            </div>
         </nav>
    )
}



