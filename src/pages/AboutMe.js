import React, { useState, useEffect } from "react";
import Myself from "../assets/img/io.webp";
import earth from "../assets/img/BackGround/earth.webp";
import Link from "../components/LogoLinks";
import BtnMobile from '../components/Base_element/external_element/BtnMobile';

const phrases = [
  {
    lang: 'english',
    text: 'Welcome to my website!',
  },
  {
    lang: 'french',
    text: 'Bienvenue sur mon site!',
  },
  {
    lang: 'italian',
    text: 'Benvenuti nel mio sito!',
  },
  {
    lang: 'spanish',
    text: 'Bienvenidos a mi sitio web!',
  },
];

function AboutMe() {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const currentPhrase = phrases[currentLanguageIndex].text;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const intervalDelay = 150;
    let charIndex = 0;

    const timer = setInterval(() => {
      if (charIndex < currentPhrase.length) {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setCurrentLanguageIndex((currentLanguageIndex + 1) % phrases.length);
        charIndex = 0;
      }
    }, intervalDelay);

    return () => {
      clearInterval(timer);
    };
  }, [currentLanguageIndex, currentPhrase]);
  const isDesktop = window.innerWidth > 840;

  return (
    <main className="aboutme-container">
      <img className="my-photo" src={Myself} alt="Hello, it's me!"></img>
      <div className="presentation-container">
        <h1>   {displayedText.split('').map((letter, index) => (
          <span key={index} className="fade-in-text">{letter}</span>
        ))}</h1>
        <p className="aboutme-presentation">
          "I'm a 33-year-old from Italy, currently residing in Bordeaux.<br />
          After a successful career in the wine business, I decided to return to my first passion, digital sciences!<br />
          Thanks to <b>OpenClassRooms</b>,
          I earned a diploma as a front-end web developer!
          <br />
          The skills I gained in my previous journey are highly transferable to this new domain.
          <br />
          For instance, my proficiency in four languages, experience in public relations, strong organizational abilities, and other soft skills set me apart.
          <br />
          <strong>
            Can't wait to develop new projects with you and continue to grow professionally and personally!"
          </strong>
        </p>
        <p className="curious">
          Curious? <br></br>You can reach out to me, visit my LinkedIn or GitHub profiles, or explore more of my website!
        </p>
        <Link />
        {!isDesktop ? <div className="mobile-info">
          <a href="mailto:andreagronchi21@gmial.com">andreagronchi21@gmial.com</a>
          <a href="tel:631-814-032">(+33) 06 31 81 40 32</a>
        </div> : null}
        

        <img className="earth" src={earth} alt="earth"></img>
      </div>
      {!isDesktop ? <BtnMobile /> : null}
    </main>
  )
}

export default AboutMe;
