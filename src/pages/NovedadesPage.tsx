import { useState, useEffect } from "react"
import axios from 'axios'
import NovedadItem from "../components/sections/NovedadItem"

const NovedadesPage = () => {
    type novedadType = {
            id: string;
            title: string;
            subtitle: string;
            image: string;
            body: string;
    } 

    const [loading, setLoading] = useState(false)
    const [novedades, setNovedades] = useState<novedadType[]>([])

    useEffect(() => {
        const cargarNovedades =async () => {
            setLoading(true)
            const reponse = await axios.get('http://localhost:3001/api/novedades')
            setNovedades(reponse.data)
            setLoading(false)
        };
        cargarNovedades()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="holder text-center">
            <h2 className="text-4xl my-9">Novedades</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.title} subtitle={item.subtitle} image={item.image} body={item.body}/>
                    ))}
        </section>
    )
}

export default NovedadesPage