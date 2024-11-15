import React from "react";

const VideoComponent = ({ videoUrl }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="rounded-lg shadow-md w-full" style={{ height: "550px" }}>
        <video
          controls
          autoPlay
          muted
          className="w-full h-full object-cover shadow-md"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoComponent;
