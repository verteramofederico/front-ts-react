/* import { useState, useEffect } from 'react';
 */import { useSelector } from 'react-redux';
/* const axios = require('axios').default;
 */
interface UserType {
    user: {
        email: string;
        fullName: string;
        token: string
    };
} 

const Carta = () => {
    const { email } = useSelector((state: UserType) => state.user)

    return (
        <>
        <h1>Bienvenido {email}</h1>
        </>
        
    )
}

export default Carta