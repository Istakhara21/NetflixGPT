import { useState } from "react";

// src/components/SignInOverlay.jsx
export default function SignInOverlay() {
  const [isSignIn, setIsSignIn] = useState(true);

  const handlingSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 px-4 mt-25">
      <div className="bg-black/80 px-8 py-10 rounded-lg max-w-md w-full space-y-6 backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-white">{isSignIn ? "Sign In" : "Sign Up"}</h1>

        <div className="space-y-4">
          {!isSignIn && <input
            type="name"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />}
          <input
            type="email"
            placeholder="Email or mobile number"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-gray-400 text-sm">OR</p>
        </div>

        <button className="w-full bg-gray-700/50 hover:bg-gray-600/50 text-white font-semibold py-3 rounded">
          Use a sign-in code
        </button>

        <div className="text-center">
          <a href="#" className="text-gray-300 hover:text-white text-sm">
            Forgot password?
          </a>
        </div>

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
