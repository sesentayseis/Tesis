import React from "react";

function TrajetaItem({clase,num,titulo,children,link}) {
    return (
        <>  {/* py-vh-4 pb-0       py-vh-6 pb-0  */}
            <div className={"col-md-6 col-lg-4"+clase} data-aos="fade-up" data-aos-delay={200} >
                <span className="h5 fw-lighter">{num}</span>
                <h3 className="py-5 border-top border-dark">
                    {titulo}
                    
                </h3>
                {children}
               {/* <a href={link} className="link-fancy">
                    Saber más
    </a>*/}
            </div>
            
        </>
    );
}

export default TrajetaItem;
