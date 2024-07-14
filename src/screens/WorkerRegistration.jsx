import axios from "axios";
import LanguageSelector from "../components/LanguageSelector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle, FcPhone } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setError } from "../features/auth/authSlice";

const WorkerRegistration = () => {
  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [error, setErrorLocal] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("Worker");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);

  const handleRegistration = async (e) => {
    console.log("clicked")
    e.preventDefault(); // Prevent form submission for manual handling

    // Client-side validation to ensure all fields are filled
    if (!name || !middleName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
      setErrorLocal("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorLocal("Password does not match");
      return;
    }

    dispatch(setLoading(true));

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("first_name", name);
    formData.append("middle_name", middleName);
    formData.append("last_name", lastName);
    formData.append("phone_number", phoneNumber);
    formData.append("account_type", accountType);

    try {
      console.log(formData)
      const res = await axios.post(`${BaseUrl}/accounts/register/`, formData, {
       
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      dispatch(setError(JSON.stringify(error.response.data)));
    } finally {
      dispatch(setLoading(false)); // Reset loading state after request completes
    }
  };

  return (
    <div className="bg-bgColor md:flex justify-center p-10">
      <div className="bg-primary rounded-tl-lg rounded-bl-lg ">
        <div className="bg-primary flex gap-1 py-2 px-2 pb-10">
          <img className="h-10" src="src/assets/logo.png" alt="logo" />
          <img className="mt-2" src="src/assets/text-logo.png" alt="text-logo" />
        </div>
        <img
          className="hidden overflow-hidden object-cover md:block"
          src="src/assets/worker_registration.png"
          alt="working worker"
        />
      </div>

      <div className="bg-white rounded-2xl md:ml-[-2rem] px-10 py-5 ">
        <div className="flex flex-row justify-between ">
          <h3 className="font-semibold md:text-4xl text-2xl px-4 md:mt-10 mt-5 py-1 text-secondary text-center">
            Join Us
          </h3>

          <span className="hidden md:block">
            <LanguageSelector />
          </span>
        </div>
        <form className="space-y-4" >
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border rounded-md outline-none"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border rounded-md outline-none"
            type="text"
            placeholder="Middle Name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            required
          />
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border rounded-md outline-none"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border rounded-md outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border rounded-md outline-none"
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border rounded-md outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border rounded-md outline-none"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className="mb-4">
            <label className="text-tertiary text-gray-800">I am registering as:</label>
            <select
              className="block w-full px-5 py-3 border rounded-md outline-none"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="Worker">Worker</option>
              <option value="Employer">Employer</option>
            </select>
          </div>
        </form>
        <p className="text-center text-red-500 font-semibold w-[400px]">{error}</p>
        <div className="text-center p-5">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
          />
          <label htmlFor="agree" className="text-tertiary text-sm px-2">
            I have read and agreed to the Terms of Service and Privacy Policy
          </label>
        </div>
        <div className="md:flex block justify-end gap-5">
          <button 
            type="submit"
          onClick={handleRegistration}
            disabled={!agreed || isLoading}
            className={`text-white w-full md:w-auto bg-primary font-semibold rounded-lg px-5 py-2 hover:brightness-110 ${
              !agreed ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
        <p className="text-center mt-3">Or</p>
        <div className="flex md:justify-between justify-center gap-10 md:mt-10">
          <div className="block">
            <span className="flex gap-2 justify-center md:border-none text-tertiary border bg-bgColor md:bg-transparent px-5 py-3 md:px-0 md:py-0 rounded-lg md:rounded-none">
              <FcGoogle className="mt-1" />{" "}
              <a href="#">
                <span className="hidden md:inline-block">Sign Up with</span> Google
              </a>
            </span>
          </div>
          <div className="block">
            <span className="flex gap-2 justify-center md:border-none text-tertiary border bg-bgColor md:bg-transparent px-5 py-3 md:px-0 md:py-0 rounded-lg md:rounded-none">
              <FcPhone className="mt-1" />
              <a href="#">
                <span className="hidden md:inline-block">Sign Up with</span> Phone
              </a>
            </span>
          </div>
        </div>

        <div className="flex gap-2 justify-center md:mt-16 relative">
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

export default WorkerRegistration;
