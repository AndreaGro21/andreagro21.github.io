import React, { useState } from 'react';

function ServiceCard({ title, textDescription }) {
    const [isDesktop, setisDesktop] = useState(true);

    const handleTitleClick = () => {
            setisDesktop(!isDesktop); 
            if (!isDesktop) {
                const allTextDescElements = document.querySelectorAll('.textDesc');
                allTextDescElements.forEach((element) => {
                    element.style.display = 'none';
                });
            }else if(isDesktop) {
                const allTextDescElements = document.querySelectorAll('.textDesc');
                allTextDescElements.forEach((element) => {
                    element.style.display = 'block';
                });
            }
    };

    return (
        <article className="service-card_container">
            <button onClick={handleTitleClick} >
            <h3 >{title}</h3>
            </button>
            { isDesktop ? <p className='textDesc'>{textDescription}</p> : <p className='notvisible'></p>}
        </article>
    );
}

export default ServiceCard;