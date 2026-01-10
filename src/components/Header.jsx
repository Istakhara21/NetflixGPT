import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  netflix_logo,
  SUPPORTED_LANGUAGES,
  user_avatar,
} from "../utils/constants";
import { toggleChangeClick } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const gptSearchTrue = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptToggle = () => {
    dispatch(toggleChangeClick());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black">
      <Link to={"/"}>
        <img className="w-52" src={netflix_logo} alt="Logo" />
      </Link>

      {/* Sign Out */}
      <div className="flex">
        <div>
          {user && (
            <div className="flex h-12">
              {gptSearchTrue && (
                <select
                  className="bg-white rounded-lg cursor-pointer"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="bg-white rounded-lg mx-2 font-bold px-2 border-4 border-red-900 cursor-pointer"
                onClick={handleGptToggle}
              >
                GPT Search
              </button>
              <img className="" src={user_avatar} alt="" />
              <button
                onClick={handleSignOut}
                className="cursor-pointer px-3 mx-2 text-white font-bold"
              >
                SignOut
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
