import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //Dispacth an action to add an user [addUser]
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")
      } else {
        // User is signed out
        //Dispacth an action to remove an user [removeUser]
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, [navigate, dispatch]);

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
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
      </Link>

      {/* Sign Out */}

      {user && (
        <div className="flex h-12">
          <img
            className=""
            src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
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
