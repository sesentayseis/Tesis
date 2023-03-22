import React from 'react'

const Estructura1 = ({id,img1,img2,img3,children,titulo,link}) => {
  return (
    <>
   <div className="py-vh-4 bg-gray-100 w-100 overflow-hidden" id={id}>
  <div className="container">
    <div className="row d-flex justify-content-between align-items-center">
      <div className="col-lg-6">
        
        <div className="row gx-5 d-flex">

                <div className="col-md-11">
                  <div className="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end" data-aos="fade-right" style={{filter: 'opacity(0.7)',backgroundColor: 'rgb(248,249,250)',backgroundImage: 'url('+img1+')', "--bs-aspect-ratio": '50%'}}>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end" data-aos="fade-up" style={{filter: 'opacity(0.7',backgroundColor: 'rgb(248,249,250)',backgroundImage: 'url('+img2+')'}}>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="col-12 shadow ratio rounded bg-cover mt-5 bp-center" data-aos="fade-left" style={{filter: 'opacity(0.7)',backgroundColor: 'rgb(248,249,250)',backgroundImage: 'url('+img3+')', "--bs-aspect-ratio": '150%'}}>
                  </div>
                </div>

        </div>
      </div>
      <div className="col-lg-4">
        <h2 className="py-5 border-top border-dark" data-aos="fade-left">{titulo}</h2>
        {children}
        <p data-aos="fade-left" data-aos-delay={200}></p>
        <p>
          <a href={link} className="link-fancy link-dark" data-aos="fade-left" data-aos-delay={400}>Learn more
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Estructura1