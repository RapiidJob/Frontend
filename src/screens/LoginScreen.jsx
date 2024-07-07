import LanguageSelector from "../components/LanguageSelector";
import { FcGoogle, FcPhone } from "react-icons/fc";
const LoginScreen = () => {
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
            Login
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
            placeholder="Email"
          />
          <input
            className="placeholder:text-tertiary px-5 py-3 block w-full border-b outline-none"
            type="text"
            placeholder="Password"
          />
        </form>
        <div className="text-center p-5">
          <input type="checkbox" name="" id="" />
          <span className="text-tertiary text-sm px-2">
            I have read and agreed to the Terms of Service and Privacy Policy
          </span>
        </div>
        <div className="md:flex block justify-end gap-5">
          <button className="text-black hidden md:block  bg-slate-600 font-semibold rounded-lg px-5 py-2 hover:brightness-110">
            Signup
          </button>
          <button className="text-white w-full md:w-auto bg-primary font-semibold rounded-lg px-5 py-2 hover:brightness-110">
            Login
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

export default LoginScreen;
