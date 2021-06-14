import React from "react";

const DisplayedVideo = ({ video, refe }) => {
  return (
    <div ref={refe} className='displayed-video-container'>
      <div className='video-wrapper'>
        <div className='video-details'>
          <iframe
            title={video.snippet.channelTitle}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder='0'
          ></iframe>
        </div>
      </div>
      <div className='video-description'>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default DisplayedVideo;
