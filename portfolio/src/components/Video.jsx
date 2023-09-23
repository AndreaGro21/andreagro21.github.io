import React from "react";
import video from "../assets/world.mp4"
import { useRef } from "react";
const Video = () => {
  const videoRef= useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = .8;
  };
    return (
      <div className="video-container">
      <video 
        onCanPlay={() => setPlayBack()}
         ref={videoRef}
        autoPlay loop muted >
            <source src={video} />
            Sorry, your browser doesn't support videos.
      </video>
      <div className="title-container">
        <p className="title-container_first-text">Need to boost your business worldwide?</p>
        <p className="title-container_myself">Let me itroduce myself, i am:</p>
        <h1>Andrea Gronchi</h1>
                <p className="title-container_subtitle"><strong>Developpeur front-end</strong></p> {/* hover sul testo :Non sai cosa vuol dire front-end */}
                <div className="title-container_slogan">I build accessible, inclusive products and digital experiences for the web.</div>
    <a href="#my-service">click or scroll</a>
    </div>
      </div>
    );
  };
  
  export default Video;