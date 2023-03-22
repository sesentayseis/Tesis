import React from "react";
import TrajetaItem2 from "./TrajetaItem2";

const Objetivos = () => {
  return (
    <>
      <div className="py-vh-5 w-100 overflow-hidden" id="objetivos">
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="display-4 fw-bold border-bottom border-dark pb-4 col-lg-8" data-aos="fade-up" data-aos-delay={200} >
              Objetivos 
            </h3>
            <br />
            <TrajetaItem2 clase="col-lx-6" titulo="">
              <ul>
                <li>Que como participante desarrolles las competencias y habilidades necesarias para desarrollar con éxito el proyecto de investigración</li>
                <li>Asesorar en el desarrollo del proyecto de tesis acorde a su línea de investigación.</li>
                <li>Instruir en el usod e las normas Apa y Vancouder en la aplicación de citas y referencias en el trabajo de investigación.</li>
                <li>Levantar observaciones, corregir y perfeccionar el proyecto e informe final de investigación.</li>
              </ul>
            </TrajetaItem2>
            <br />
          </div> 
          <div className="col-lg-6">
           <img src="https://cdn-icons-png.flaticon.com/512/6078/6078781.png" alt="" srcset="" data-aos="fade-up" data-aos-delay={400} style={{ width:"100%" /*filter: 'opacity(0.8)',backgroundColor: 'rgb(248,249,250)'*/}}/>
            
          </div>
        </div>
        </div>
      </div>
      <div className="py-vh-5 w-100 overflow-hidden" id="beneficios">
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
          
          <img src="https://cdn-icons-png.flaticon.com/512/3281/3281323.png" alt="" srcset="" data-aos="fade-up" data-aos-delay={400} style={{ width:"100%" /*filter: 'opacity(0.8)',backgroundColor: 'rgb(248,249,250)'*/}}/>
            <br />
          </div> 
          <br />
          <div className="col-lg-6">
            <h3 className="display-4 fw-bold border-bottom border-dark pb-4 col-lg-8" data-aos="fade-up" data-aos-delay={200} >
              Beneficios 
            </h3>
            <br />

            <TrajetaItem2 clase="col-lx-6" titulo="">
                <ul >
                    <li >Docentes especialistas con amplia experiencia en asesoria de tesis.</li>
                    <li>Apoyo estadístico.</li>
                    <li>Idiomas español/inglés</li>
                    <li>Contenido de alta calidad.</li>
                    <li>Formato con normas <b>APA</b>.</li>
                    <li>libre de plagio.</li>
                    <li>Confidencialidad.</li>
                    <li>Asesoría virtual personalizada.</li>
                    <li>Apoyo en el levantamiento de observaciones.</li>
                    
                </ul>
            </TrajetaItem2>
            
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Objetivos;
