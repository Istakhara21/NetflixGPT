import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute py-9 pt-50 pb-30 mt-20 px-12   text-white">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="w-1/2 my-3 text-xl">{overview}</p>
      <div>
        <button className="cursor-pointer hover:bg-gray-500 bg-gray-900 rounded-lg text-white px-10 font-bold text-lg py-4 mx-2">
          Play
        </button>
        <button className="cursor-pointer hover:bg-gray-400 bg-amber-100 rounded-lg text-black px-5 font-bold text-lg py-4 mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
