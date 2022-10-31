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
        <div className="text-center my-6 mb-5">
            <h3 className="my-1 text-2xl font-semibold">{title}</h3>
            <h2 className="my-1 mt-5 text-xl font-medium text-primary">{subtitle}</h2>
            <img src={image} className="object-center max-w-sm max-h-60 inline mt-5" alt='imagen descriptiva de novedd'/>
            <div className="my-1 mb-10 mt-10" dangerouslySetInnerHTML={{__html: body}}></div>
            <hr/>
        </div>
    )
}

export default NovedadItem;