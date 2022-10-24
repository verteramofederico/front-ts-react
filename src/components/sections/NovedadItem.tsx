type novedadType = {
    key: string;
    title: string;
    subtitle: string;
    image: string;
    body: string;
}

const NovedadItem = (props: novedadType) => {
    const { title, subtitle, image, body} = props
    return (
        <div className="text-center my-6">
            <h3 className="my-1 text-2xl font-semibold">{title}</h3>
            <h2 className="my-1 text-xl font-medium">{subtitle}</h2>
            <img src={image} className="object-center inline" alt='imagen descriptiva de novedd'/>
            <div className="my-1" dangerouslySetInnerHTML={{__html: body}}></div>
            <hr/>
        </div>
    )
}

export default NovedadItem;