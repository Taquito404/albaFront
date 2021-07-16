import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import HomeContent from '../../src/components/HomeContent';
const Home = () => {
    const router = useRouter();

    useEffect(() => {
        try {
            const token = window.localStorage.getItem('token');
            if (!token) {
                router.push('/')
                return;
            }
        } catch (error) {

        }
    }, [])
    
    return (
        <>
            <div className="">
                <HomeContent />
            </div>
        </>
    )
}

export default Home;
