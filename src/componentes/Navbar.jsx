import React, { useEffect } from 'react'

function Navbar() {
    useEffect(() => {
        let scrollpos = window.scrollY;
  const header = document.querySelector(".navbar");
  const header_height = header.offsetHeight;

  const add_class_on_scroll = () => header.classList.add("scrolled", "shadow-sm");
  const remove_class_on_scroll = () => header.classList.remove("scrolled", "shadow-sm");

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll(); }
    else { remove_class_on_scroll(); }

    //console.log(scrollpos);
  })
    }, [])
    
  return (
    <nav id="navScroll" className="navbar navbar-expand-lg navbar-light fixed-top" tabIndex={0}>
  <div className="container">
    <a className="navbar-brand pe-4 fs-4" href="/">
    <i width={32} height={32} fill="currentColor" className="fa-solid fa-graduation-cap bi bi-layers-half" viewBox="0 0 16 16"/>
      
      <span className="ms-1 fw-bolder">Stride</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#Introduccion" aria-label="Brings you to the frontpage">
            Introducción
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#estructura">
          Estructura de Tesis
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#objetivos">
            Objetivos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#beneficios">
            Beneficios
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#workwithus">
            Work with us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonials">
            Testimonials
          </a>
        </li>
      </ul>
      <a href="https://templatedeck.com" data-splitbee-event="Click Download" aria-label="Download this template" className="link-dark pb-1 link-fancy me-2">
        CONTACTO <i class="fa-regular fa-comment-dots bi bi-download ms-1" width={16} height={16} fill="currentColor" viewBox="0 0 16 16"/>
      </a>
      
    </div>
  </div>
</nav>

  )
}

export default Navbar