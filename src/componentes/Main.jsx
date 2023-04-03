import React from 'react'
import Estructura1 from './Estructura1'
import Intro from './Intro'
import Objetivos from './Objetivos'
import Top from './Top'
import Contacto from './Contacto'
import Videos from './Videos'

function Main() {
  return (
    <>
        <main>
            <Top/>
            <Intro/>
            <Estructura1
              id="estructura"
              img1="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              img2="https://www.bibguru.com/es/guides/img/cita-apa-tesis-400x400.png"
              img3="https://i.pinimg.com/564x/e3/9d/b4/e39db4add53f298ca2d21fa7fbae2661.jpg"
              titulo="Estructura de Tesis"
              
              link=""
            >
              <p><b>PORTADA</b></p>
              <div>
                <ol style={{listStyleType: 'upper-roman'}}>
                  <li>Título del proyecto</li>
                  <li>El problema de investigación
                    <ol style={{listStyleType: 'upper-alpha'}}>
                      <li>Definición del problema</li>
                      <li>Formulación del Problema</li>
                    </ol>
                  </li>
                  <li>Objetivos</li>
                  <li>Justificación (Teórica, Metodológica y práctica)</li>
                  <li>Marco teórico (Estado de la cuestión o antecedentes; Bases teóricas, marco conceptual)</li>
                  <li>Hipótesis</li>
                  <li>Metodología
                    <ul style={{listStyleType: 'disc'}}>
                      <li>Análisis de resultados&nbsp;</li>
                    </ul>
                  </li>
                  <li>Cronograma de actividades</li>
                  <li>Bibliografía</li>
                </ol>
                <p><b>ANEXOS:</b></p>
                <p>Matriz de Consistencia</p>
              </div>

            </Estructura1>
            <Objetivos/>
            <Contacto/>
            <Videos/>
        </main>
    </>
  )
}

export default Main