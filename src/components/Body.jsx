import React from "react";
import Header from "./Header";
import Browse from "./Browse";
import { Route, Routes } from "react-router";
import Home from "./Home";

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  );
};

export default Body;
