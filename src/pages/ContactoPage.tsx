import { useState} from 'react';
import axios from 'axios';

const ContactoPage = () => {

    const initalForm = {
        nombre: '',
        email: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false)
    const [msg, setMsg] = useState('')
    const [formData, setFormData] = useState(initalForm)

    const handleChange = (event: {
        target: { name: any; value: any; }; preventDefault: () => void; 
}) => {
        const { name, value } = event.target
        setFormData(oldData => ({
            ...oldData,
            [name]: value,
        }))
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setMsg('');
        setSending(true)
        //const response = await axios.post('http://localhost:3001/api/contacto', formData)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData)
        setSending(false)
        setMsg(response.data.message)
        if (response.data.error === false) {
            setFormData(initalForm)
        }
    }
    return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary dark:text-white">Contacto</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            No dude en comunicarse con nosotros. Responderemos a la brevedad.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
                
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-primary dark:text-gray-300">
                    Nombre
                    </label>
                    <input name='nombre' value={formData.nombre} onChange={handleChange} 
                    type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="sucorreo@proveedor.com" required />
                </div>
                
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary dark:text-gray-300">
                    Email
                    </label>
                    <input name='email' value={formData.email} onChange={handleChange} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="sucorreo@proveedor.com" required />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary dark:text-gray-400">
                        Su mensaje
                    </label>
                    <textarea name='mensaje' value={formData.mensaje} onChange={handleChange} id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Comentario"></textarea>
                </div>

                <button type="submit" className="py-3 px-3 border-primary border-2 font-medium text-center text-primary rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Enviar mensaje
                </button>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
            </form>
        </div>
    </section>
    )
}

export default ContactoPage