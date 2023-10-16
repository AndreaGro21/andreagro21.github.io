import React, { useState, useEffect } from "react"
import Myself from "../assets/img/io.jpg"
import { Link } from "react-router-dom";

function AboutMe() {
    const phrases = {
        english: 'Welcome to my website!',
        french:  'Bienvenue sur mon site!',
        italian: 'Benvenuti nel mio sito!',
        spanish: 'Bienvenidos a mi sitio web!',
    };
    const [currentLanguage, setCurrentLanguage] = useState('english');
    console.log(currentLanguage)
    const [animatedText, setAnimatedText] = useState(phrases.english);
    useEffect(() => {
        const languages = ['english', 'french', 'italian', 'spanish'];
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % languages.length;
            setCurrentLanguage(languages[currentIndex]);
            setAnimatedText(phrases[languages[currentIndex]]);
          
        }, 2000);
       
        return () => clearInterval(intervalId);
    },);

    const [animatedAge, setAnimatedAge] = useState('');
    const ageToDisplay = '33';
    useEffect(() => {
        let currentIndexAge = 0;
        const animationInterval = setInterval(() => {
          currentIndexAge++;
          setAnimatedAge(ageToDisplay.slice(0, currentIndexAge) + getRandomChars(ageToDisplay.length - currentIndexAge));
          if (currentIndexAge >= ageToDisplay.length) {
            clearInterval(animationInterval);
          }
        }, 200);
      }, []);
    
      const getRandomChars = (length) => {
        const chars = '012345678312312123390123456789014534422234567890123456789';
        let randomChars = '';
        for (let i = 0; i < length; i++) {
          randomChars += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return randomChars;
      };


    return (
        <div className="aboutme-container">
            <img src={Myself} alt="Hello, it's me!"></img>
            <div className="presentation-container">

                <h2> {animatedText}</h2>
                <p className="aboutme-presentation">
                    I'm {animatedAge} years old italian living in Bordeaux.<br />
                    After a nice career in Wine buisness,
                    i decide to turned back to my first passion,the web development.<br />
                    Thanks to OpenClassRooms I acquired a diploma as a front-end web developer!
                    <br/>
                    <strong>
                        Can't wait to develop new projects whit you, and continue to grow professionally and personally!
                    </strong>
                </p>
                <p>
                    Curious? You can download my cV here,
                    or continue surfing my site!
                    need to know my service?
                </p>
                <Link to="/services" className="link">My Services</Link>
            </div>
        </div>


    )
}

export default AboutMe