import React from "react";

const Video = ({ data, title, image, selectedVideo }) => {
  return (
    <div className='single-item' onClick={() => selectedVideo(data)}>
      <img src={image} alt='pioonier' />
      <h5>{title}</h5>
    </div>
  );
};
export default Video;
