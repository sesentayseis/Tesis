import React from "react";

const Contacto = () => {
    return (
        <>
            <div
                className="py-vh-6 bg-gray-900 text-light w-100 overflow-hidden"
                id="Contacto"
            >
                <div
                    className="d-flex h-100 w-100"
                    data-bs-spy="scroll"
                    data-bs-target="#navScroll"
                >
                    <div className="h-100 container-fluid">
                        <div className="h-100 row d-flex align-items-stretch">
                            <div className="col-12 col-md-7 col-lg-6 d-flex align-items-start flex-column px-vw-5">
                                <header className="mb-auto py-vh-2 col-12">
                                    <a className="navbar-brand pe-4 fs-4" href="/">
                                    <i width={32} height={32} fill="currentColor" className="fa-solid fa-graduation-cap bi bi-layers-half" viewBox="0 0 16 16"/>
                                        
                                        <span className="ms-1 fw-bolder">Stride</span>
                                    </a>
                                </header>
                                <main className="mb-auto col-12">
                                    <h1>Escribenos al correo</h1>
                                    <form action="https://formsubmit.co/444aqp@gmail.com" method="POST">
                                        <div className="col-12 ">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label" >
                                                     <b>Nombre</b>
                                                </label>
                                                <input type="text" className="form-control form-control-lg"  name="Nombre" id="name" aria-describedby="emailHelp"/>
                                                <div id="emailHelp" className="form-text"  style={{color: "#d1d5db"}}>
                                                    Nunca compartiremos su nombre con nadie más.
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label" >
                                                     <b>Email address</b>
                                                </label>
                                                <input type="email" className="form-control form-control-lg" name="Email" id="email" aria-describedby="emailHelp"/>
                                                <div id="emailHelp" className="form-text" style={{color: "#d1d5db"}}>
                                                Nunca compartiremos su correo electrónico con nadie más.
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label" >
                                                     <b>Asunto</b>
                                                </label>
                                                <input type="text" className="form-control form-control-lg" name="_subject" id="subject" aria-describedby="emailHelp"/>
                                                
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label" >
                                                     <b>Mensaje</b>
                                                </label>
                                                <textarea rows="4" className="form-control form-control-lg" name="Mensaje" id="message" aria-describedby="emailHelp"/>
                                                
                                            </div>
                                            <button type="submit" className="btn btn-warning btn-xl">
                                                Enviar
                                            </button>
                                        </div>
                                        <input type="hidden" name="_captcha" value="false"/>
                                        {/* ----------------------------------------------------------------------------------------CAMBIAR EN UN FUTURO */}
                                        <input type="hidden" name="_next" value="http://localhost:5173/"></input>
                                    </form>
                                </main><br />
                            </div> 
                            <div className="col-12 col-md-5 col-lg-6 bg-cover" style={{background:"#F1E9D7"}}>
                                
                                    <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
                                        <iframe
                                            style={{width:"100%", height:"750px"}}
                                            src="https://maps.google.com/maps?width=700&height=440&hl=en&q=Corvel%5C's+(Corvel%5C's%20S.R.L.)&ie=UTF8&t=&z=10&iwloc=B&output=embed"
                                            frameBorder={0}
                                            scrolling="no"
                                            marginHeight={0}
                                            marginWidth={0}
                                        />
                                        
                                        
                                    </div>
                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacto;
