import React,{useEffect, useRef} from "react";
import PropTypes from "prop-types";

import banner from "../../assets/banner.mp4";
import "./index.css";

const index = ({homeRef}) => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    const playVideo = () => {
      if (video) {
        video.play().catch(error => {
          console.error("Failed to play video:", error);
        });
      }
    };
    playVideo();
  },[videoRef]);
  return (
    <div className="home" id="home" ref={homeRef}>
      <div className="banner-container">
        <video ref={videoRef} src={banner} className="banner" autoPlay muted loop></video>
      </div>
    </div>
  );
};

index.prototype= {
  homeRef: PropTypes.object,
};

export default index;
