
import './Whatsapp.css';
import React, { useEffect } from 'react';

const Whatsapp = () => {
    useEffect(() => {
        const btnWsp = document.querySelector('.btn-wsp');
    
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 200) {
            btnWsp.classList.add('active');
          } else {
            btnWsp.classList.remove('active');
          }
        });
      }, []);
        
  return (
    <>
        
        <a href="https://api.whatsapp.com/send?phone=51952870388" className="btn-wsp" target="_blank">
        <i class="fa-brands fa-whatsapp"></i>
        </a>
    </>
    
  )
}

export default Whatsapp