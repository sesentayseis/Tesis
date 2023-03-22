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
              titulo="We rented this fancy startup office in an old factory building."              
              link="#"
            >
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus culpa, voluptatibus ex itaque, sapiente a consequatur inventore beatae, ipsam debitis omnis consequuntur iste asperiores. Similique quisquam debitis corrupti deserunt, dolor.</p>
            </TrajetaItem>
            <TrajetaItem
              clase=" py-vh-4 pb-0"
              num="02."
              titulo="We rented this fancy startup office in an old factory building."              
              link="#"
            >
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus culpa, voluptatibus ex itaque, sapiente a consequatur inventore beatae, ipsam debitis omnis consequuntur iste asperiores. Similique quisquam debitis corrupti deserunt, dolor.</p>
            </TrajetaItem>
            <TrajetaItem
              clase=" py-vh-6 pb-0"
              num="03."
              titulo="We rented this fancy startup office in an old factory building."              
              link="#"
            >
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus culpa, voluptatibus ex itaque, sapiente a consequatur inventore beatae, ipsam debitis omnis consequuntur iste asperiores. Similique quisquam debitis corrupti deserunt, dolor.</p>
            </TrajetaItem>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro