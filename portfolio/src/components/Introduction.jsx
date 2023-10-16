import React, {useEffect} from "react";

function Introduction() {
    useEffect(() => {
        const text = "Andrea Gronchi";
        const matrixContainer = document.querySelector(".matrix-container");
    
        text.split("").forEach((letter, index) => {
          const letterSpan = document.createElement("span");
          letterSpan.textContent = letter;
          letterSpan.className = "matrix-letter";
          letterSpan.style.animationDelay = `${index * 0.3}s`;
          matrixContainer.appendChild(letterSpan);
        });
      }, []);
    
      return (
        <div className="matrix-rain">
          <div className="matrix-container" />
        </div>
      );
    }


export default Introduction