import React from "react";
import video from "../assets/world.mp4"
import { useRef } from "react";
import Introduction from "./Introduction";
import BtnMobile from '../components/Base_element/external_element/BtnMobile';
const Landing = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = .8;
  };
  const isDesktop = window.innerWidth > 840;
  return (
    <div className="video-container">
      <video
        onCanPlay={() => setPlayBack()}
        ref={videoRef}
        autoPlay loop muted >
        <source src={video} />
        Sorry, your browser doesn't support videos.
      </video>
      <Introduction />
      {isDesktop ?  <a className="egg" href="https://www.facebook.com/andrea.gronchi.7/" target="_blank" rel="noopener noreferrer">FB</a> : null}
      {!isDesktop ? <BtnMobile /> : null}
    </div>
  );
};

export default Landing;