const Press = () => {
    return (
        <section className="relative pt-16 pb-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-5xl sm:text-5xl text-gray-900">
                    Reseñas de prensa
                </h2>
                <p className="mb-16 text-base max-w-md mx-auto text-center text-gray-600">
                    Resumen de articulos de prensa publicados en diversos medios.
                </p>
                
                <div className="flex flex-wrap -m-5">

                <div className="w-full md:w-1/3 p-5">
                    <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                    <div className="h-full px-7 py-8 bg-white rounded-lg">
                        <img className="mb-8" src="/salon.jpg" alt="" />
                        <p className="mb-8 text-lg text-gray-900">&ldquo;
                        Una hallazgo culinario sin igual. Cada uno de los platos ha sido de plena satisfaccion asi como tambien un servicio profesional y amable. Los precios son acordes a lo ofrecido. Recomendable. 
                        &rdquo;</p>
                        <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                            El Tiempo 
                        </h3>
                        <p className="text-sm text-gray-600">
                            Pepe Tito
                        </p>
                    </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 p-5">
                    <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
                    <div className="h-full px-7 py-8 bg-white rounded-lg">
                        <img className="mb-8" src="/roma.jpg" alt="" />
                        <p className="mb-8 text-lg text-gray-900">&ldquo;
                        Una hallazgo culinario sin igual. Cada uno de los platos ha sido de plena satisfaccion asi como tambien un servicio profesional y amable. Los precios son acordes a lo ofrecido. Recomendable. 
                        </p>
                        <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                            La Razon de VillaD
                        </h3>
                        <p className="text-sm text-gray-600">
                            Pedro Liebre
                        </p>
                    </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 p-5">
                    <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                    <div className="h-full px-7 py-8 bg-white rounded-lg">
                        <img className="mb-8" src="/lasana.jpg" alt="" />
                        <p className="mb-8 text-lg text-gray-900">&ldquo;
                        Una hallazgo culinario sin igual. Cada uno de los platos ha sido de plena satisfaccion asi como tambien un servicio profesional y amable. Los precios son acordes a lo ofrecido. Recomendable. 
                        &rdquo;</p>
                        <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                            Diario Voz
                        </h3>
                        <p className="text-sm text-gray-600">
                            Juan Perez
                            </p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
    </section>
    )
}

export default Press;