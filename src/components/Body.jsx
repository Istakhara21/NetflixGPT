import React, { useEffect } from "react";
import Header from "./Header";
import Browse from "./Browse";
import { Route, Routes } from "react-router";
import Home from "./Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //Dispacth an action to add an user [addUser]
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        //Dispacth an action to remove an user [removeUser]
        dispatch(removeUser());
      }
    }),
    []
  );
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
