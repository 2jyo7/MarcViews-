"use client";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ReactPlayer to prevent SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = () => {
  return (
    <div className="bg-gray-900 py-12 px-4 flex flex-col justify-center">
      <div className="w-full max-w-5xl mx-auto">
        {/* Video Container with Aspect Ratio */}
        <div className="relative pb-[56.25%] overflow-hidden rounded-lg shadow-xl">
          <ReactPlayer
            url="https://player.vimeo.com/video/1016365932?h=10a20f438f"
            controls
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
