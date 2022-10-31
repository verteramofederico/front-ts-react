import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <footer className="pt-8">
            <div className="bg-primary md:px-6 md:py-8 dark:bg-gray-900">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Link to="/">
                            <svg className="fill-current h-8 w-8 mr-2" width="34" height="36" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                        </Link>
                        <Link to="/" className="font-semibold text-xl tracking-tight">RESTAURANT FV</Link>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                        <Link to="/nosotros" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Nosotros
                        </Link>
                        </li>
                        <li>
                        <Link to="/novedades" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Novedades
                        </Link>           
                        </li>
                        <li>
                        <Link to="/contacto" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Contacto
                        </Link>            
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 lg:my-4"> 
                <a href="https://www.linkedin.com/in/federico-verteramo/" target="_blank" rel="noreferrer">© 2022 Federico Verteramo . Web developer.</a> 
                </span>
                <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4"/>
            </div>
        </footer>
    )
}

export default Footer;