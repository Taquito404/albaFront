import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image';

const Usuarios = () => {
    const [users, setUsers] = useState([]);
    const [hasRemoved, setHasRemoved] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
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
                
                const filteredUser = data.data.users.filter(user => user.role.includes('user'))
                setUsers(filteredUser);
            } catch (error) {
                console.error(error)
            }
        }
        getUsers();
        return () => {
            setUsers([])
        }
    }, [hasRemoved]);
}

export default Usuarios