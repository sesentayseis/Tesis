import React from 'react'

function Texto1({titulo,children}) {
  return (
    <>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8" data-aos="fade-down">
            <h1 className="display-1 fw-bold border-bottom border-dark pb-4">{titulo}</h1>
            <p className="lead py-vh-2">
              {children}
            </p>
          </div>
        </div>
    </>
  )
}

export default Texto1