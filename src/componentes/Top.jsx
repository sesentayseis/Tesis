import React from 'react'

function Top() {
  return (
    <div className="w-100 overflow-hidden bg-gray-100" id="top">
  <div className="container position-relative">
    <div className="col-12 col-lg-8 mt-0 h-100 position-absolute top-0 end-0 bg-cover"  data-aos="fade-left" style={{    filter: 'opacity(0.5)',backgroundColor: 'rgb(248,249,250)',backgroundImage: 'url(https://i.pinimg.com/originals/de/ac/82/deac82db6ba7a4a0152b25a7e32dd490.jpg)'}}>
    </div>
    <div className="row">
      <div className="col-lg-7 py-vh-6 position-relative" data-aos="fade-right">
        <h1 className="display-1 fw-bold mt-5">¡Empieza tu tesis ahora!</h1>
        <p className="lead">Asésoria en la elaboración, diseño y corrección de tu proyecto para la presentación y defensa de tu tesis.</p>
        <a href="#" className="btn btn-dark btn-xl shadow me-3 rounded-0 my-5">Get started free</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Top