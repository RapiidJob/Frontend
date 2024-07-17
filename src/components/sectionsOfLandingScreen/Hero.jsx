/* eslint-disable react/prop-types */
import people from "../../assets/landingPage/peopleGraphics.png";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import telegramIcon from '../../assets/socialIcons/telegram.svg';
import { useNavigate } from "react-router-dom";
const Hero = ({ id }) => {
  const navigate = useNavigate()
  return (
    <section id={id} className="bg-primary pb-[1rem] flex justify-between h-[100%]">
        <div className="flex flex-col justify-evenly items-center w-[100%] gap-[1rem]">
          <div className="w-[30rem] max-sm:w-[20rem] m-0">
            <h1 className="text-[50px] text-[#fff] font-abhaya font-bold max-sm:text-[20px] m-0">
              Connect with Skilled Blue-Collar Workers
            </h1>
          </div>
          <div className="flex flex-col gap-[1rem] bg-[primary] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-[1rem] rounded-[1rem]">
            <p className="text-[#fff] text-lg max-sm:text-[12px] md:text-base lg:text-sm">
              Discover the best job opportunities that match your skill.
            </p>
            <div className="flex gap-[1rem] max-sm:grid max-sm:m-[1rem]">
              <input
                className="max-sm:w-[100%] w-[200px] h-[50px] rounded-[0.3rem] p-3"
                placeholder="Search here"
              />
              <input
                className="max-sm:w-[100%] w-[200px] h-[50px] rounded-[0.3rem] p-3"
                placeholder="City"
              />
              <button className="max-sm:w-[100%] w-[100px] h-[50px] rounded-[0.3rem] text-white bg-[#263238]">
                Search
              </button>
            </div>
          </div>
          <div className="gap-5 flex max-sm:grid items-center justify-center text-white">
            <div className="flex flex-col items-start justify-center gap-[1rem]">
              <div className="flex text-[21px] items-center gap-3">
                <FaPlus style={{ color: 'white' }} className="" /> <p>Post a Job</p>
              </div>
              <p>Find the Perfect Candidate Quickly</p>
              <button className="bg-white text-[#275ED9] text-[20px] w-[80%] pt-[0.5rem] pb-[0.5rem] font-bold">Post a Job</button>
            </div>
            <div className="flex flex-col items-start justify-center gap-[1rem]">
              <div className="flex text-[21px] items-center gap-3" onClick={()=>navigate('/findjob')}>
                <CiSearch style={{ color: 'white' }} className=""  /> <p>Find a Job</p>
              </div>
              <p>Discover Your Next Opportunity Today</p>
              <button  onClick={()=>navigate('/findjob')} className="bg-white text-[#275ED9] text-[20px] w-[80%] pt-[0.5rem] pb-[0.5rem] font-bold">Find a Job</button>
            </div>
          </div>
        </div>
        <div className="max-xl:hidden flex flex-col justify-evenly items-center w-[100%] gap-[3rem]">
          <img src={people} className="w-[30rem] m-0" alt="People" />
          <div className="clip-custom bg-cover bg-center p-[2rem] rounded-[1rem] text-white bg-black shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <p className="text-[18px]">EASY ACCESS</p>
            <h1 className="text-[34px]">Or Use Telegram for Easy Access</h1>
            <div className="flex gap-[5rem] items-center">
              <button className="bg-white text-[#275ED9] text-[20px] w-[50%] pt-[0.5rem] pb-[0.5rem] font-bold">Telegram Web App</button>
              <img src={telegramIcon} className="w-[4rem]" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero