import axios from "axios";
import { useState } from "react";

import { FcGoogle, FcPhone } from "react-icons/fc";
import { Link } from "react-router-dom";

import LanguageSelector from "../components/LanguageSelector";

const ResetScreen = () => {
  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLaoding] = useState(false)
  const [success, setSuccess] = useState("")
  
  
  
  const handleLogin = async (e) => {
    setLaoding(true)
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseUrl}/auth/users/reset_password/`, {
        email,
      });

      console.log(response.data);

      setLaoding(false)
      setSuccess("Reset link is sent successfully! check your email")
    } catch (error) {
      console.log(error.response.data.errors);
      setError(JSON.stringify(error.response.data.errors));
      setLaoding(false)
    
    }
  };
  return (
    <div className="bg-bgColor md:flex  justify-center p-10 overflow-hidden h-screen">
      <div className="">
        <div className="bg-primary flex gap-1 py-2 px-2 pb-10 rounded-tl-lg rounded-bl-lg">
          <img className="h-10" src="src/assets/logo.png" alt="logo" />
          <img
            className="mt-2"
            src="src/assets/text-logo.png"
            alt="text-logo"
          />
        </div>
        <img
          className="hidden w-full  object-contain md:block"
          src="src/assets/employer_registration.png"
          alt="working worker"
        />
      </div>

      <div className="bg-white rounded-2xl md:ml-[-2rem] px-10 py-5 ">
        <div className="flex flex-row justify-between ">
          <h3 className="font-semibold md:text-4xl text-2xl px-4 md:mt-10 mt-5 py-1 text-secondary">
            Forget Password
          </h3>
          {/* language */}
          <span className="hidden md:block">
            <LanguageSelector />
          </span>
        </div>
        <div className="flex gap-2 justify-start px-5 md:mt-6 relative ">
          <p className="text-center text-tertiary">
            Don&rsquo;  have an account?
          </p>
          <Link
            to="/worker_register"
            className="no-underline text-primary font-semibold"
          >
            create account
          </Link>
        </div>
        <form className="">
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border-b outline-none"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </form>
        <p className="text-center text-red-500 font-semibold w-[400px]">{error}</p>
        <p className="text-center text-green-700 font-semibold w-[400px]">{success}</p>
        
        <div className="flex  justify-end gap-5">
          <button
            type="submit"
            onClick={handleLogin}
            className="text-white w-full  bg-primary font-semibold rounded-lg px-5 py-2 hover:brightness-110 ${
             
           "
          >
            {loading?"Resetting....":<>Reset Password <span className="font-bold text-xl">&rarr;</span></>}
          </button>
        </div>
        <p className="text-center mt-3">Or</p>
        <div className="flex md:justify-between justify-center gap-10 md:mt-10 ">
          <div className="block">
            <span className="flex gap-2 justify-center md:border-none text-tertiary border bg-bgColor md:bg-transparent px-5 py-3 md:px-0 md:py-0 rounded-lg md:rounded-none ">
              <FcGoogle className="mt-1" />{" "}
              <a href="">
                <span className="hidden md:inline-block">Login with</span>{" "}
                Google
              </a>
            </span>
          </div>
          <div className="block">
            <span className="flex gap-2 justify-center md:border-none text-tertiary border bg-bgColor md:bg-transparent px-5 py-3 md:px-0 md:py-0 rounded-lg md:rounded-none ">
              <FcPhone className="mt-1" />
              <a href="">
                <span className="hidden  md:inline-block">Login with</span>{" "}
                Phone
              </a>
            </span>
          </div>
        </div>
        <div className="flex gap-2 justify-center md:mt-16 relative ">
          <p className="text-center text-tertiary">Already have an account?</p>
          <a href="/login" className="no-underline text-primary font-semibold">
            Login
          </a>
        </div>

        
        <span className="flex justify-end md:hidden">
          <LanguageSelector />
        </span>
      </div>
    </div>
  );
};

export default ResetScreen;
