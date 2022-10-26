import { useState } from "react"
import AdminNovedadModificar from "./AdminNovedadModificar"


type novedadType = {
    key: string;
    id: string;
    title: string;
    subtitle: string;
    image: string;
    body: string;
    setNovedadModificada: any
}

const AdminNovedadItem = (props: novedadType) => {
    const [editNew, setEditNew] = useState(false)
    const { id, title, subtitle, image, body, setNovedadModificada} = props

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setEditNew(true)
        setNovedadModificada(false)   
    }

    return (
        <>
        {editNew === false ? 
            <div className="text-center my-6">
                <h3 className="my-1 text-2xl font-semibold">{title}</h3>
                <h2 className="my-1 text-xl font-medium">{subtitle}</h2>
                <img src={image} className="object-center inline" alt='imagen descriptiva de novedd'/>
                <div className="my-1" dangerouslySetInnerHTML={{__html: body}}></div>
                
                <form onSubmit={handleSubmit}>
                <button type="submit" className="mt-6 mb-8 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"> 
                    Editar novedad: {id} </button>
                </form>
                <hr/>
            </div>
        /* setEditNew true? */ 
        : 
        <>
        <AdminNovedadModificar key={id} id={id}
                    title={title} subtitle={subtitle} image={image} body={body} setEditNew={setEditNew} setNovedadModificada={setNovedadModificada}/>
        </>}
        
        </>
    )
}

export default AdminNovedadItem;
