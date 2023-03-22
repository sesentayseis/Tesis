import React from "react";

function TrajetaItem2({clase,titulo,children}) {
    return (
        <>  
            <div className={clase} data-aos="fade-up" data-aos-delay={200} >
              <div className="card shadow">
                <div className="card-body">
                  <h2 className="card-title">{titulo}</h2>
                  <br/>
                  <p className="card-text">
                    {children}

                  </p>
                  
                </div>
              </div>
            </div>
            
        </>
    );
}

export default TrajetaItem2;
