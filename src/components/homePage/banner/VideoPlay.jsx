import React from "react";
import Style from "./_banner.module.css";
import { AiFillPlayCircle } from "react-icons/ai";
const VideoPlay = () => {
  return (
    <div className={Style.videoSection}>
      <article>
        <h1>Professional IT for private individuals and Companies</h1>
      </article>
      <article className={Style.videoLast}>
        <aside className={Style.videoLastAside}>
          <button>Our Services</button>
        </aside>
        <aside className={Style.playButtonBlock}>
          <span className={Style.playButton}>
            <AiFillPlayCircle />
          </span>
          <span>Video Presentations</span>
        </aside>
      </article>
    </div>
  );
};

export default VideoPlay;
