import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/nosotros'>nosotros</Link>
                    </li>
                    <li>
                        <Link to='/carta'>Carta</Link>
                    </li>
                    <li>
                        <Link to='/novedades'>novedades</Link>
                    </li>
                    <li>
                        <Link to='/contacto'>contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;