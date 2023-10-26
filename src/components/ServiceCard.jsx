import React from 'react';

export default function ServiceCard({ title, textDescription, isOpen, toggleParagraph, isDesktop }) {

  return (
    <article className="service-card_container">
      {isDesktop ? (
        <h3 onClick={toggleParagraph}>{title}</h3>
      ) : (
        <button onClick={toggleParagraph}>
          <h3>{title}</h3>
        </button>
      )}
      {isOpen && (
        <p className='textDesc'>{textDescription}</p>
      )}
    </article>
  );
}




/* import React, { useState } from 'react';

function ServiceCard({ title, textDescription }) {
    const isDesktop = window.innerWidth > 840; //true
    console.log(isDesktop, "desktop")
    const [showDesc, setshowDesc] = useState(false);
    console.log(showDesc, "text")


    const handleTitleClick = () => {
        if (!isDesktop) {
            setshowDesc(!showDesc)
        }
    }
    return (
        <article className="service-card_container">
            {!isDesktop ?
                <button onClick={handleTitleClick}>
                    <h3>{title}</h3>
                </button> : <h3 >{title}</h3>}
            {isDesktop || showDesc ?
                <p className='textDesc'>{textDescription}</p> :
                <p className='notvisible'></p>}
        </article>
    );
}
export default ServiceCard; */


