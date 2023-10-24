import React, { useState, useEffect } from 'react';
import github from "../assets/tag-img/github.png"
import gmail from "../assets/img/linkLogo/gmail.png"
import linkedin from "../assets/img/linkLogo/linkedin-logo.png"
import whatsapp from "../assets/img/linkLogo/whatsapp.png"
import pen from "../assets/img/linkLogo/barbie.png"


export default function Link(){
   
    const [showPen, setShowPen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPen(false);
        }, 7000); // Cambia l'immagine dopo 10 secondi

        return () => {
            clearTimeout(timer); // Cancella il timer quando il componente viene smontato
        };
    }, [ ]);



    return(
<div className="logo-contact_container">
<a href="http://" target="_blank" rel="noopener noreferrer">
                {showPen ? (
                    <>
                    <img className="barbie" src={pen} alt="Write here" />
                    <p className="ops">🤔Oops! wrong icon!😳</p>
                    </>
                ) : (
                    <>
                    <img src= {gmail} alt="Gmail"/>
                    <p className="ops ok">Much better😜</p>
                    </>
                )}
    </a>
   {/*  <a href="mailto:andreagronchi21@gmail.com?subject=Mail from our Website">
    <img src= {gmail} alt="Gmail"/>   
    </a> */}
    <a href="https://www.linkedin.com/in/andrea-gronchi-58399416a/" target="_blank" rel="noopener noreferrer">
    <img src= {linkedin} alt="Linkedl"/>  
    </a>
    <a href="https://wa.me/33631814032">
    <img src= {whatsapp} alt="whaaatsUp bro"/>  
    </a>
    <a  href="https://github.com/AndreaGro21" target="_blank" rel="noopener noreferrer">
      <img className="toosmall" src={github} alt="GitHub"/>  
    </a>
  
</div>
)}