import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Nav from '../components/layout/Nav'
import ContactoPage from '../pages/ContactoPage'
import HomePage from '../pages/HomePage'
import NosotrosPage from '../pages/NosotrosPage'
import NovedadesPage from '../pages/NovedadesPage'
import JwtTEST from '../pages/JwtTEST'
import LoginTEST from '../pages/Login'
import AdminNovedadesPage from '../pages/AdminNovedadesPage'

function Root() {
  return (
    <>
    
    <Router>
      <Nav/>
      <Header/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contacto"  element={<ContactoPage/>}/>
        <Route path="/nosotros"  element={<NosotrosPage/>}/>
        <Route path="/novedades" element={<NovedadesPage/>}/>
        <Route path="/admin/novedades" element={<AdminNovedadesPage/>}/>
        <Route path="/login" element={<LoginTEST/>}/>
        <Route path="/jwt" element={<JwtTEST/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default Root;