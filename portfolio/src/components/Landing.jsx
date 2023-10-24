import React from "react";
import video from "../assets/world.mp4"
import { useRef } from "react";
import Introduction from "./Introduction";
const Landing = () => {
  const videoRef = useRef();
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
      <Introduction />
    </div>
  );
};

export default Landing;