import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Nav from '../components/layout/Nav'
import ContactoPage from '../pages/ContactoPage'
import HomePage from '../pages/HomePage'
import NosotrosPage from '../pages/NosotrosPage'
import NovedadesPage from '../pages/NovedadesPage'
import Carta from '../pages/Carta'

function Root() {
  return (
    <>
    
    <Router>
      <Nav/>
      <Header/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contacto"  element={<ContactoPage/>}/>
        <Route path="/carta"  element={<Carta/>}/>
        <Route path="/nosotros"  element={<NosotrosPage/>}/>
        <Route path="/novedades" element={<NovedadesPage/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default Root;