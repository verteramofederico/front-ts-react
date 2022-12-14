import { useState } from "react"
import axios from 'axios';

type novedadTypeModificar = {
    key: string;
    id: string;
    title: string;
    subtitle: string
    body: string;
    setEditNew: any;
    setNovedadModificada: any
}

const AdminNovedadModificar = (props: novedadTypeModificar) => {
    const { id, title, subtitle, body, setEditNew, setNovedadModificada} = props

    const [form, setForm] = useState({
        id: id,
        title: title,
        subtitle: subtitle,
        body: body,
    });


    const handleChange = (event: { target: { id: any; value: any}; }) => {
        setForm({
        ...form,
        [event.target.id]: event.target.value
        })
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const userData = JSON.parse(localStorage.getItem('user-data')|| '{}')   
        await axios.post(`${process.env.REACT_APP_API_URL}/api/modificar`, 
                form, 
                { headers: { 
                    'authorization': `Bearer ${userData.token}`, 
                    "Content-Type": "multipart/form-data" 
                }}
            )
        setEditNew(false)
        setNovedadModificada(true)
}

    return (
        <>
        <form onSubmit={handleSubmit} >     
            <div>
                <div><label className="text-2xl mb-20" htmlFor="title">Titulo</label></div>
                <div> <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                /></div>
            </div>
            <div>
                <div><label className="text-2xl mb-20" htmlFor="subtitle">Subtitulo</label></div>
                <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="subtitle"
                type="text"
                value={form.subtitle}
                onChange={handleChange}
                />
                </div>

                <div>
                <div><label className="text-2xl" htmlFor="body">Cuerpo</label></div>
                <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="body"
                type="text"
                value={form.body}
                onChange={handleChange}
                />
                </div>
                <button type="submit" className="mt-6 mb-8 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-800 focus:outline-none focus:bg-red-600"> 
                    Editar novedad: {id} </button>
                <hr/>
        </form>
        </>
    )
}

export default AdminNovedadModificar;