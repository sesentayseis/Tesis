import React from 'react'
import Texto1 from './Texto1';
import TrajetaItem from './TrajetaItem';

function Intro() {
  return (
    <>
      <div className="py-vh-5 w-100 overflow-hidden" id="Introduccion">
        <div className="container">

        <Texto1 titulo="Introducción" >
          <p>La elaboración de la tesis, parece ser un aspecto muy complejo y difícil y es que normalmente 
          nos lo presentan así, con un grado de complejidad y dificultad donde solo los más sabihondos 
          pueden hacerlo. Además, debemos enfrentarnos a otros factores: la falta de motivación, dificultades 
          en la elección del tema, elección del área de investigación, tipo de investigación, elaboración de 
          la propuesta, recopilación de datos, etc.</p>
          <p>Por ello ofrecemos este servicio para ayudar a los tesistas y demostrar que el hacer una tesis en 
            un ejercicio sencillo y al alcance de todos. Como participante contaras con el apoyo y la asesoría 
            personalizada de un experto, podrás contar con su ayuda de manera presencial y virtual.</p>
        </Texto1>

          
          <div className="row d-flex align-items-center">
            <TrajetaItem
              clase=""
              num="01."
              titulo="¿Qué investigar?"              
              link="#"
            >
              <p>Se sugiere seleccionar un tema que sea relevante para el área de estudio y de interés personal, así como también considerar la disponibilidad de recursos y la factibilidad de la investigación.</p> 
              
            </TrajetaItem>
            <TrajetaItem
              clase=" py-vh-4 pb-0"
              num="02."
              titulo="¿Por qué investigar?"              
              link="#"
            >
              <p>La investigación permite profundizar en el conocimiento sobre un tema específico, resolver problemas prácticos y contribuir al desarrollo del área de estudio.</p>
            </TrajetaItem>
            <TrajetaItem
              clase=" py-vh-6 pb-0"
              num="03."
              titulo="¿Para qué investigar?"              
              link="#"
            >
              <p>Los resultados de la investigación pueden tener diversas aplicaciones, tales como mejorar procesos, crear nuevos productos o servicios, generar conocimiento nuevo y aportar al desarrollo de la sociedad.</p>
            </TrajetaItem>
          </div>
          <div className="row d-flex align-items-center">
            <TrajetaItem
              clase=""
              num="04."
              titulo="¿Qué se piensa encontrar?"              
              link="#"
            >
              <p>El objetivo de la investigación debe ser claro y realista, y se espera encontrar información y conclusiones que permitan responder a las preguntas de investigación planteadas.</p>
            </TrajetaItem>
            <TrajetaItem
              clase=" py-vh-4 pb-0"
              num="05."
              titulo="¿Cómo investigar?"              
              link="#"
            >
              <p>Se pueden utilizar diferentes metodologías y técnicas de investigación, dependiendo del tipo de estudio y los objetivos específicos de la investigación. Es importante diseñar un plan de investigación adecuado y riguroso.</p>
            </TrajetaItem>
            <TrajetaItem
              clase=" py-vh-6 pb-0"
              num="06."
              titulo="¿Con qué o cuándo investigar?"              
              link="#"
            >
              <p>El proceso de investigación puede ser largo y laborioso, por lo que es importante planificar el tiempo y los recursos necesarios para llevarlo a cabo. Lo ideal es comenzar a investigar.</p>
            </TrajetaItem>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro