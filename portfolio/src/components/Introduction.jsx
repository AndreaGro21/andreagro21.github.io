import React from "react";
import {Link} from 'react-router-dom';

 function Introduction() {
    return (
        <div className="introduction-container">
            <div className="about-me_title">
                <p className="introduction-container_myself">Let me itroduce myself,my name is:</p>
                <h1>Andrea Gronchi</h1>
                <p><strong>Developpeur front-end</strong></p> {/* hover sul testo :Non sai cosa vuol dire front-end */}
                <div>I build accessible, inclusive products and digital experiences for the web.</div>
            </div>
           <Link to="/AboutMe"> About me 🔎</Link> 
        </div>
    )

}
export default Introduction