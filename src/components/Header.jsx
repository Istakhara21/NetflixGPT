import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflix_logo, user_avatar, userAvatar } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //Dispacth an action to add an user [addUser]
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        //Dispacth an action to remove an user [removeUser]
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Cleanup
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error
        navigate("/error");
      });
  };

  return (
    <div className=" flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black">
      <Link to={"/"}>
        <img
          className="w-52"
          src={netflix_logo}
          alt="Logo"
        />
      </Link>

      {/* Sign Out */}

      {user && (
        <div className="flex h-12">
          <img
            className=""
            src={user_avatar}
            alt=""
          />
          <button
            onClick={handleSignOut}
            className="cursor-pointer px-3 mx-7 text-white font-bold"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
