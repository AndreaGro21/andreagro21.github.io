import React, { useState, useEffect } from 'react';
import github from "../assets/tag-img/github.png"
import gmail from "../assets/img/linkLogo/gmail.png"
import linkedin from "../assets/img/linkLogo/linkedin-logo.png"
import whatsapp from "../assets/img/linkLogo/whatsapp.png"
import pen from "../assets/img/linkLogo/barbie.png"


export default function Link() {

    const [showPen, setShowPen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPen(false);
        }, 7000); // Cambia l'immagine dopo 10 secondi

        return () => {
            clearTimeout(timer); // Cancella il timer quando il componente viene smontato
        };
    }, []);



    return (
        <div className="logo-contact_container">

            <button data-tf-popup="IPk2Zqn4" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Mail Contact Form" data-tf-transitive-search-params data-tf-medium="snippet"
           style={{
            all: 'unset',
            fontFamily: 'Helvetica, Arial, sans-serif',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: '#fff',
            fontSize: '20px',
            borderRadius: '25px',
            padding: '0 33px',
            fontWeight: 'bold',
            cursor: 'pointer',
            lineHeight: '50px',
            textAlign: 'center',
            margin: '0',
            textDecoration: 'none'
          }}
            >
            <script src="//embed.typeform.com/next/embed.js"></script>
                {showPen ? (
                    <>
                        <img className="barbie" src={pen} alt="Write here" />
                        <p className="ops">🤔Oops! wrong icon!😳</p>
                    </>
                ) : (
                    <>
                        <img src={gmail} alt="Gmail" />

                        <p className="ops ok">Much better😜</p>
                    </>
                )}
            </button>

            {/*  <a href="mailto:andreagronchi21@gmail.com?subject=Mail from our Website">
    <img src= {gmail} alt="Gmail"/>   
    </a> */}
            <a href="https://www.linkedin.com/in/andrea-gronchi-58399416a/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Linkedl" />
            </a>
            <a href="https://wa.me/33631814032">
                <img src={whatsapp} alt="whaaatsUp bro" />
            </a>
            <a href="https://github.com/AndreaGro21" target="_blank" rel="noopener noreferrer">
                <img className="toosmall" src={github} alt="GitHub" />
            </a>

        </div>
    )
}

/*  style="width:100%;height:500px;" */





/*
 
<a href="http://" target="_blank" rel="noopener noreferrer">

</a>*/


/*  */