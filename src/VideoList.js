import React from "react";
import Video from "./Video";
const VideoList = ({ data, handleSelectedVideo }) => {
  const videos = data.map(({ id, snippet }, index) => (
    <Video
      key={id.videoId}
      data={index}
      title={snippet.title}
      image={snippet.thumbnails.medium.url}
      selectedVideo={handleSelectedVideo}
    />
  ));
  return <div className='item-container'>{videos}</div>;
};

export default VideoList;
