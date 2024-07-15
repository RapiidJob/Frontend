import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle, FcPhone } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import LanguageSelector from "../components/LanguageSelector";
import { setLoading, setUser, selectIsLoggedIn } from "../features/auth/authSlice";

const LoginScreen = () => {
  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
      dispatch(setLoading(false));
    
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    if (isLoading) return;
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const response = await axios.post(`${BaseUrl}/accounts/login/`, {
        email,
        password,
      });

      const { user, token } = response.data;

      localStorage.setItem("token", token.access);
      dispatch(setUser({ user }));
      dispatch(setLoading(false));
      console.log(user)
      navigate("/");
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors.email){
        setError(error.response.data.errors.email[0])
      }
      if (errors.password){
        setError(error.response.data.errors.password[0])
      }
      if (errors.non_field_errors){
        setError(error.response.data.errors.non_field_errors[0])
      }
      // setError(JSON.stringify(error.response.data.errors));
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="bg-bgColor md:flex justify-center p-10 h-screen">
      <div className="flex-shrink-0 w-1/2 hidden md:block">
        <div className="bg-primary flex gap-1 py-2 px-2 pb-10 rounded-tl-lg rounded-bl-lg">
          <img className="h-10" src="src/assets/logo.png" alt="logo" />
          <img className="mt-2" src="src/assets/text-logo.png" alt="text-logo" />
        </div>
        <img
          className="w-full object-contain"
          src="src/assets/employer_registration.png"
          alt="working worker"
        />
      </div>

      <div className="bg-white rounded-2xl md:ml-[-2rem] px-10 py-5 w-full md:w-1/2">
        <div className="flex flex-row justify-between mb-6">
          <h3 className="font-semibold md:text-4xl text-2xl text-secondary">
            Sign In
          </h3>
          <LanguageSelector />
        </div>
        
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <input
              className="placeholder-text-tertiary px-5 py-3 border-b outline-none rounded-lg"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="placeholder-text-tertiary px-5 py-3 border-b outline-none rounded-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-center text-red-500 font-semibold">{error}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-tertiary text-sm">Remember Me</label>
            </div>
            <Link to="/reset" className="text-blue-600 text-sm">Forgot password?</Link>
          </div>
          <div className="flex justify-end gap-5">
            <button
              type="submit"
              className={`text-white w-full bg-primary font-semibold rounded-lg px-5 py-2 hover:brightness-110 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : (
                <>
                  Sign In <span className="font-bold text-xl">&rarr;</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-3 text-center">Or</div>
        
        <div className="flex justify-center gap-10 mt-10">
          <div className="block">
            <span className="flex items-center gap-2 text-tertiary border bg-bgColor rounded-lg px-5 py-3">
              <FcGoogle /> <span>Login with Google</span>
            </span>
          </div>
          <div className="block">
            <span className="flex items-center gap-2 text-tertiary border bg-bgColor rounded-lg px-5 py-3">
              <FcPhone /> <span>Login with Phone</span>
            </span>
          </div>
        </div>

        <div className="flex justify-end mt-5 md:hidden">
          <LanguageSelector />
        </div>
        
        <div className="flex justify-start gap-2 mt-6">
          <p className="text-tertiary">Don’t have an account?</p>
          <Link to="/worker_register" className="text-primary font-semibold">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
