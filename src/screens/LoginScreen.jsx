import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle, FcPhone } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import LanguageSelector from "../components/LanguageSelector";

// import {loginUser, selectIsLoggedIn, setError } from ''
import {
  setLoading,
  setUser,
  selectIsLoggedIn,
} from "../features/auth/authSlice";

const LoginScreen = () => {
  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading  = useSelector((state)=>state.auth.loading)

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const response = await axios.post(`${BaseUrl}/accounts/login/`, {
        email,
        password,
      });

      console.log(response.data);

      // Assuming your backend returns user data and token upon successful login
      const { user, token } = response.data;
      console.log(user);
      console.log(token.access);

      // Save token to local storage or cookie for persistent login
      localStorage.setItem("token", token.access);
      dispatch(setUser({ user }));
      dispatch(setLoading(false));
      navigate("/");
    } catch (error) {
      console.log(error.response.data.errors);
      setError(JSON.stringify(error.response.data.errors));
      dispatch(setLoading(false));
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
            Sign In
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
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border-b outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <p className="text-center text-red-500 font-semibold w-[400px]">{error}</p>
        <div className="flex justify-between p-5">
          <div className="text-center">
            <input type="checkbox" />
            <label className="text-tertiary text-sm px-2">Remember Me</label>
          </div>
          <Link to="/reset" className="text-blue-600 text-sm">Forget password</Link>
        </div>
        <div className="flex  justify-end gap-5">
          <button
            type="submit"
            onClick={handleLogin}
            className="text-white w-full  bg-primary font-semibold rounded-lg px-5 py-2 hover:brightness-110 ${
             
           "
          >
            {isLoading?"Signin....":<>Sign In <span className="font-bold text-xl">&rarr;</span></>}
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

        
        <span className="flex justify-end md:hidden">
          <LanguageSelector />
        </span>
      </div>
    </div>
  );
};

export default LoginScreen;
