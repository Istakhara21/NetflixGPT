import { useRef, useState } from "react";
import { checkValidateDate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

// src/components/SignInOverlay.jsx
export default function SignInOverlay() {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handlingSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    //Validate teh form data
    //checkValidData(email, password)
    const message = checkValidateDate(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) {
      console.log("Validation error:", message);
      return; // Stop if invalid
    }

    if (isSignIn == true) {
      //Sign in form logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // console.log(errorCode);
        });
    } else {
      //Sign up form logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              //Dispacth an action to add an user profile name
              const { displayName, uid, email } = auth.currentUser;
               dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
              navigate("/browse"); // onAuthStateChanged will fire by then
            })

            .catch((error) => {
              // An error occurred
              // ...
            });
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);

          // ..
        });
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 px-4 mt-25">
      <div className="bg-black/80 px-8 py-10 rounded-lg max-w-md w-full space-y-6 backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        <div className="space-y-4">
          {!isSignIn && (
            <input
              ref={fullName}
              type="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or mobile number"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <p className="text-red-500 font-bold">{errorMessage}</p>

          <button
            onClick={handleButtonClick}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>

        {isSignIn && (
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-sm">OR</p>
          </div>
        )}

        {isSignIn && (
          <button className="w-full bg-gray-700/50 hover:bg-gray-600/50 text-white font-semibold py-3 rounded">
            Use a sign-in code
          </button>
        )}

        {isSignIn && (
          <div className="text-center">
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Forgot password?
            </a>
          </div>
        )}

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="rememberMe"
            className="w-4 h-4 bg-gray-700 border border-gray-600 rounded accent-red-600"
          />
          <label htmlFor="rememberMe" className="text-gray-300 text-sm">
            Remember me
          </label>
        </div>

        <div className="text-center text-gray-400 text-sm">
          {isSignIn ? "New to Netflix?" : "Already Registered."}{" "}
          <a
            href="#"
            className="text-white font-semibold"
            onClick={handlingSignIn}
          >
            {isSignIn ? "Sign Up Now" : "Sign In"}
          </a>
        </div>

        <div className="text-xs text-gray-500 text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-400">
            Learn more.
          </a>
        </div>
      </div>
    </div>
  );
}
