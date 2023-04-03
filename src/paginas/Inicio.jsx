import React from 'react'
import Footer from '../componentes/Footer'
import Main from '../componentes/Main'
import Navbar from '../componentes/Navbar'
import Top from '../componentes/Top'
import ScrollToTop from "react-scroll-to-top";
import Whatsapp from '../componentes/Whatsapp'
const Inicio = () => {
  return (
    <>
    <Navbar/>
    <Main/>
    <Footer/>
    <Whatsapp/>
    <ScrollToTop smooth color="#ffff" 
            style={{"backgroundColor":"#FD7E14"}} />

    </>
    
  )
}

export default Inicio