import React from 'react';

export default function ServiceCard({ title, textDescription, isOpen, toggleParagraph }) {
  const isDesktop = window.innerWidth > 840;
  return (
    <article className="service-card_container">
      {isDesktop ? (<h3 >{title}</h3>) :
        (
          <button onClick={toggleParagraph}>
            <h3>{title}</h3>
          </button>
        )}
      {isOpen || isDesktop ? (
        <p className='textDesc'>{textDescription}</p>
      ) : null}
    </article>
  );
}