import { useState, useEffect } from "react"
import axios from 'axios'
import AdminNovedadItem from "../components/sections/AdminNovedadItem"

const AdminNovedadesPage = () => {
    type novedadType = {
            id: string;
            title: string;
            subtitle: string;
            image: string;
            body: string;
    } 

    const [loading, setLoading] = useState(false)
    const [novedadModificada, setNovedadModificada] = useState(false)
    const [novedades, setNovedades] = useState<novedadType[]>([])

    useEffect(() => {
        const cargarNovedades =async () => {
            setLoading(true)
            //const reponse = await axios.get('http://localhost:3001/api/novedades')
            const reponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`)
            setNovedades(reponse.data)
            setLoading(false)
        };
        cargarNovedades()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [novedadModificada])

    return (
        <section className="holder text-center">
            <h2 className="text-4xl my-9">Novedades</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <AdminNovedadItem key={item.id} id={item.id}
                    title={item.title} subtitle={item.subtitle} image={item.image} body={item.body} setNovedadModificada={setNovedadModificada}/>
                    ))}
        </section>
    )
}

export default AdminNovedadesPage