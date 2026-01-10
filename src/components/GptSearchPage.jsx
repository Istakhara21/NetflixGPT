import React from "react";
import GptSearchBar from "./GptSearchBar";
import { MAIN_BG_IMAGE_URL } from "../utils/constants";

const GptSearchpage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={MAIN_BG_IMAGE_URL} alt="" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchpage;
