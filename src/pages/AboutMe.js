import React, { useState, useEffect } from "react"
import Myself from "../assets/img/io.webp"
import earth from "../assets/img/BackGround/earth.jpg"
import Link from "../components/Link";
function AboutMe() {
  const phrases = {
    english: 'Welcome to my website!',
    french: 'Bienvenue sur mon site!',
    italian: 'Benvenuti nel mio sito!',
    spanish: 'Bienvenidos a mi sitio web!',
  };
  const languages = ['english', 'french', 'italian', 'spanish'];
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [animatedText, setAnimatedText] = useState(phrases.english);
  useEffect(() => {
    let currentIndex = 0;
    const intervalDelay = 2000;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % languages.length;
      setCurrentLanguage(languages[currentIndex]);
      setAnimatedText(phrases[languages[currentIndex]]);
    }, intervalDelay);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className="aboutme-container">
      <img className="my-photo" src={Myself} alt="Hello, it's me!"></img>
      <div className="presentation-container">
        <h1>{animatedText}</h1>
        <p className="aboutme-presentation">
          I'm 33 years old italian, actually living in Bordeaux.<br />
          After a nice career in Wine buisness,
          i decide to turned back to my first passion,the web development.<br />
          Thanks to OpenClassRooms I acquired a diploma as a front-end web developer!
          <br />
          <strong>
            Can't wait to develop new projects whit you, and continue to grow professionally and personally!
          </strong>
        </p>
        <p>
          Curious? <br></br>You can download my cV here,
          Look at my Linkedln or Github
          or continue surfing my site!
        </p>
        <Link />
        <img className="earth" src={earth} alt="earth"></img>
      </div>
    </div>


  )
}

export default AboutMe