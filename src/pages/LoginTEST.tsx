import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginTEST = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const cargarNovedades =async () => {

            const userInfo = { user, password}

            const reponse = await axios.post('http://localhost:3001/api/login', userInfo)
            if (reponse.data.name) {
                localStorage.setItem('user-data', JSON.stringify({ 
                    token: reponse.data.token, 
                    name: reponse.data.name,
                    id: reponse.data.id }))
                window.open("http://localhost:3001/admin/novedades", '_blank', 'noopener,noreferrer');
                navigate('/novedades')
            }
            if (reponse.data.mensaje && reponse.data.mensaje.length > 3) {
                setErrorMessage("Credenciales incorrectas")
            } else {(setErrorMessage(""))}
        }
        cargarNovedades()
        setUser('');
        setPassword('');
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-primary underline">
                    Acceder
                    </h1>
                
                {errorMessage.length > 3 ? 
                <p className="text-red-600 text-2xl mt-10 mb-3 text-center">Credenciales incorrectas</p> : null}
                
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            User 
                        </label>
                        <input
                            onChange={event => setUser(event.target.value)}
                            value={user}
                            name="user"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            name="password"
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginTEST