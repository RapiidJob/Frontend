import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import LanguageSelector from "../components/LanguageSelector";
import axios from "axios";
import { FcGoogle, FcPhone } from "react-icons/fc";
import { setLoading } from "../features/auth/authSlice";
const EmployerRegistration = () => {
  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isLoading = useSelector((state)=>state.auth.loading)
  const dispatch = useDispatch()


  const handleRegistration = async (e) => {
    e.preventDefault()

    if (password != confirmPassword) {
      setError("password does not match");
    }
    dispatch(setLoading(true))

    try {
      const res = await axios.post(`${BaseUrl}/accounts/register/`, {
        email,
        password,
        first_name: name,
        account_type: "Employer",
      });
      console.log(res.data);
      navigate("/login");
      dispatch(setLoading(false))
    } catch (error) {
      // console.log(error);
      setError(JSON.stringify(error.response.data));
      dispatch(setLoading(false))
    }
  };
  return (
    <div className="bg-bgColor md:flex  justify-center p-10">
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
            Employer Registration
          </h3>
          {/* language */}
          <span className="hidden md:block">
            <LanguageSelector />
          </span>
        </div>
        <form className="">
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border-b outline-none"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border-b outline-none"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </form>
        <p className="text-center text-red-500 font-semibold w-[400px]">{error}</p>
        <div className="text-center p-5">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="agree" className="text-tertiary text-sm px-2">
            I have read and agreed to the Terms of Service and Privacy Policy
          </label>
        </div>
        <div className="md:flex block justify-end gap-5">
          <button type="submit"
            disabled={!agreed}
            onClick={handleRegistration}
            className={`text-white w-full md:w-auto bg-primary font-semibold rounded-lg px-5 py-2 hover:brightness-110 ${
              !agreed ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {isLoading? "Signup...":<>Signup</>}
          </button>
        </div>
        <p className="text-center mt-3">Or</p>
        <div className="flex md:justify-between justify-center gap-10 md:mt-10 ">
          <div className="block">
            <span className="flex gap-2 justify-center md:border-none text-tertiary border bg-bgColor md:bg-transparent px-5 py-3 md:px-0 md:py-0 rounded-lg md:rounded-none ">
              <FcGoogle className="mt-1" />{" "}
              <a href="">
                <span className="hidden md:inline-block">Signup with</span>{" "}
                Google
              </a>
            </span>
          </div>
          <div className="block">
            <span className="flex gap-2 justify-center md:border-none text-tertiary border bg-bgColor md:bg-transparent px-5 py-3 md:px-0 md:py-0 rounded-lg md:rounded-none ">
              <FcPhone className="mt-1" />
              <a href="">
                <span className="hidden  md:inline-block">Signup with</span>{" "}
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

export default EmployerRegistration;
