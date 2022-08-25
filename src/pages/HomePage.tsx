import React from 'react';

const HomePage = () => {
    return (
        <main className="holder">
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>lorem ipsum dolor sit amet lorem, consectetur
                        lorem ipsum dolor sit amet, consectet
                        ectetur
                        lorem ipsum dolor sit amet, consectet
                        ectetur
                        lorem ipsum dolor sit amet, consectet
                    </p>
                </div>
                <div className="testimonios right"></div>
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className='cita'>Simplemente excelente</span>
                    <span className='autor'>Juan Perez</span>
                </div>
            </div>
        </main>
    )
}

export default HomePage