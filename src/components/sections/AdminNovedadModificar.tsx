import { useState } from "react"
import axios from 'axios';

type novedadTypeModificar = {
    key: string;
    id: string;
    title: string;
    subtitle: string
    image: string;
    body: string;
    setEditNew: any;
    setNovedadModificada: any
}

const AdminNovedadModificar = (props: novedadTypeModificar) => {
    const { id, title, subtitle, image, body, setEditNew, setNovedadModificada} = props

    const [form, setForm] = useState({
        id: id,
        title: title,
        subtitle: subtitle,
        body: body,
        img_original: image,
        img_delete: ""
    });

    const [newImage, setNewImage] = useState<any>([]);

    const handleChange = (event: { target: { id: any; value: any, files: any }; }) => {
        setForm({
        ...form,
        [event.target.id]: event.target.value
        })
        console.log(form);
    };

    const handleChangeImage = (event: { target: { files: any; }; }) => {
        console.log(event.target.files[0])
        setNewImage(event.target.files[0])
        console.log(newImage)
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const userData = JSON.parse(localStorage.getItem('user-data')|| '{}')   
        
        const formData = new FormData();
        formData.append("selectedFile", newImage);
        await axios.post('http://localhost:3001/api/modificar', 
                {form, data: formData}, 
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

                <div className="mt-8">
                <input
                type="file"
                onChange={handleChangeImage}
                /* onChange={handleChange} */
                />
                </div>

                <label>
                <input 
                className="m-8"
                type="checkbox" 
                name="img_delete" 
                id="img_delete"
                value="1"
                onChange={handleChange}
                /> 
                Eliminar imagen actual?
                </label>

                <input type="hidden" name="img_original" 
                value={form.img_original}/>

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