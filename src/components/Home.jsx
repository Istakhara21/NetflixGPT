import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import {MAIN_BG_IMAGE_URL} from "../utils/constants"

const Home = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <img
        src={MAIN_BG_IMAGE_URL}
        alt="background"
      />
    </div>
  );
};

export default Home;
