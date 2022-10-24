import axios from 'axios'
import { useState } from "react"

const JwtTEST = () => {
    const [response, setResponse] = useState<string>('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const cargarNovedades =async () => {
                const userData = JSON.parse(localStorage.getItem('user-data')|| '{}') 
                if (userData && userData.token) {
                const jwtReponse = await axios.get('http://localhost:3001/api/test', {
                    headers: {
                        'authorization': `Bearer ${userData.token}`
                    }})
                setResponse(jwtReponse.data)
                } 
                
                /* const jwtReponse = await axios.get('http://localhost:3001/api/test', headers)
                console.log(jwtReponse.data)  */
        }
        cargarNovedades()
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">                             
                {response ? <p>{response}</p>: 
                    <p>Al clickear en el boton la app chequeara si el usuario se encuentra logueado. Solo en caso de estar logueado recibiras un mensaje luego del click. </p>
                }
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Ir
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JwtTEST