import { useEffect } from 'react';
import { FiSearch, FiMapPin, FiMap } from 'react-icons/fi';
import { CiGrid41, CiGrid2H, CiMail, CiBookmark, CiCalendar, CiClock1 } from 'react-icons/ci';
import { MdOutlinePhone } from 'react-icons/md';
import { FaArrowRight, FaTelegramPlane } from 'react-icons/fa';
import { LuFacebook } from 'react-icons/lu';
import { BsSuitcaseLg } from 'react-icons/bs';
import { IoWalletOutline, IoLocationOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/dashboard/Header';

const JobDetailScreen = () => {
  const jobDetail = useSelector((state) => state.jobDetail.jobDetail);


  return (
    <>
      <Header />
      <div className='pt-[9rem]'>
        <header className="p-4 bg-[#F1F2F4]">
          <div className='flex flex-col sm:flex-row justify-between'>
            <h1 className="text-2xl font-bold">Find Job</h1>
            <div className="text-gray-500">
              <p>Home / Find Job /<span className='font-bold'> Job Details</span></p>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center">
          <div className='flex flex-col sm:flex-row items-center justify-between w-full p-4 sm:p-8'>
            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-7'>
              <div className='rounded-full w-[4rem] h-[4rem]'>
                <img src={jobDetail.post_photos.image} className='rounded-full w-full h-full' alt="Job" />
              </div>
              <div className='grid items-center'>
                <h1 className='font-medium text-2xl'>{jobDetail.title}</h1>
                <ul className='flex flex-col sm:flex-row items-center gap-3'>
                  <li className='flex gap-1 items-center'>
                    <CiMail className='text-primary' />
                    <p className='text-[#474C54] text-base'>{jobDetail.posted_by.email}</p>
                  </li>
                  <li className='flex gap-1 items-center'>
                    <MdOutlinePhone className='text-primary' />
                    <p className='text-[#474C54] text-base'>{jobDetail.posted_by.phone_number}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='grid'>
              <div className='flex flex-col sm:flex-row items-center gap-3 h-14 sm:h-16 w-full sm:w-80'>
                <div className='cursor-pointer h-full rounded bg-[#E7F0FA] w-14 sm:w-16 flex items-center justify-center'>
                  <CiBookmark size={28} className='text-primary' />
                </div>
                <div className='cursor-pointer flex items-center gap-1 bg-primary h-full w-full justify-center font-semibold text-base text-white rounded'>
                  {!jobDetail.applied && <p>Apply Now</p>}
                  {jobDetail.applied && <p>Applied</p>}
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row w-full h-full p-4 sm:p-8'>
            <div className='h-full w-full lg:w-2/3 grid gap-3'>
              <div>
                <h1 className='font-medium text-lg'>Job Description</h1>
                <p>{jobDetail.description}</p>
              </div>
              <div>
                <h1 className='font-medium text-lg'>Responsibilities</h1>
                {/* <p>{jobDetail.Responsibilities}</p> */}
              </div>
              <div>
                <div className='flex items-center gap-2'>
                  <p className='text-xl font-medium'>Share this job:</p>
                  <div className='cursor-pointer flex gap-1 items-center border p-1 rounded'>
                    <LuFacebook size={20} className='text-primary' />
                    <p className='text-primary'>Facebook</p>
                  </div>
                  <div className='cursor-pointer flex gap-1 items-center border p-1 rounded'>
                    <FaTelegramPlane className='text-[#e71d1d]' />
                    <p className='text-[#e71d1d]'>Telegram</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/3 grid gap-5'>
              <div className='grid gap-4 p-4 border rounded'>
                <h1 className='font-medium text-xl'>Job Overview</h1>
                <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                  <li className="p-4 rounded-lg grid gap-2">
                    <div className='flex items-center'>
                      <CiCalendar size={40} className="text-primary inline-block align-text-top" />
                    </div>
                    <div className='grid gap-1'>
                      <p className="font-bold text-[#767F8C] text-xs">JOB POSTED:</p>
                      <p className="font-medium text-xs">{jobDetail.created_at}</p>
                    </div>
                  </li>
                  <li className="p-4 rounded-lg grid gap-2">
                    <div className='flex items-center'>
                      <CiClock1 size={40} className="text-primary inline-block align-text-top" />
                    </div>
                    <div className='grid gap-1'>
                      <p className="font-bold text-[#767F8C] text-xs">JOB EXPIRE IN:</p>
                      <p className="font-medium text-xs">{jobDetail.expire_in ? jobDetail.expire_in : ""}</p>
                    </div>
                  </li>
                  <li className="p-4 rounded-lg grid gap-2">
                    <div className='flex items-center'>
                      <BsSuitcaseLg size={40} className="text-primary inline-block align-text-top" />
                    </div>
                    <div className='grid gap-1'>
                      <p className="font-bold text-[#767F8C] text-xs">EDUCATION:</p>
                      <p className="font-medium text-xs">{jobDetail.Education ? jobDetail.Education : ""}</p>
                    </div>
                  </li>
                  <li className="p-4 rounded-lg grid gap-2">
                    <div className='flex items-center'>
                      <IoWalletOutline size={40} className="text-primary inline-block align-text-top" />
                    </div>
                    <div className='grid gap-1'>
                      <p className="font-bold text-[#767F8C] text-xs">SALARY:</p>
                      <p className="font-medium text-xs">{jobDetail.estimated_price ? jobDetail.estimated_price : ""}</p>
                    </div>
                  </li>
                  <li className="p-4 rounded-lg grid gap-2">
                    <div className='flex items-center'>
                      <IoLocationOutline size={40} className="text-primary inline-block align-text-top" />
                    </div>
                    <div className='grid gap-1'>
                      <p className="font-bold text-[#767F8C] text-xs">LOCATION:</p>
                      <p className="font-medium text-xs">{jobDetail.job_address.city}.{jobDetail.job_address.country}</p>
                    </div>
                  </li>
                  <li className="p-4 rounded-lg grid gap-2">
                    <div className='flex items-center'>
                      <IoLocationOutline size={40} className="text-primary inline-block align-text-top" />
                    </div>
                    <div className='grid gap-1'>
                      <p className="font-bold text-[#767F8C] text-xs">JOB TYPE:</p>
                      <p className="font-medium text-xs">{jobDetail.job_type ? jobDetail.job_type : ""}</p>
                    </div>
                  </li>
                  <li className="p-4 rounded-lg grid gap-2">
                    <div className='flex items-center'>
                      <IoLocationOutline size={40} className="text-primary inline-block align-text-top" />
                    </div>
                    <div className='grid gap-1'>
                      <p className="font-bold text-[#767F8C] text-xs">EXPERIENCE:</p>
                      <p className="font-medium text-xs">{jobDetail.experience ? jobDetail.experience : ""}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='grid p-[1rem] gap-6 border rounded'>
                <div className='flex gap-5 '>
                  <div className='w-[4rem] h-[4rem] rounded-full overflow-clip'>
                    <img className='w-[4rem]' src={jobDetail.posted_by.profile_image} alt="Profile" />
                  </div>
                  <div>
                    <p className='font-[500] text-[20px]'>{jobDetail.posted_by.first_name}</p>
                    <p className='font-[500] text-[20px] text-[#767F8C]'>{jobDetail.posted_by.address}</p>
                  </div>
                </div>
                <ul className='grid gap-3'>
                  <li className='flex justify-between'><p className='text-[16px] font-[16px] text-[#767F8C]'>Founded in:</p> <p className='text-[16px] font-[16px]'>{jobDetail.posted_by.created_at}</p></li>
                  <li className='flex justify-between'><p className='text-[16px] font-[16px] text-[#767F8C]'>Phone:</p> <p className='text-[16px] font-[16px]'>{jobDetail.posted_by.phone_number}</p></li>
                  <li className='flex justify-between'><p className='text-[16px] font-[16px] text-[#767F8C]'>Email:</p> <p className='text-[16px] font-[16px]'>{jobDetail.posted_by.email}</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default JobDetailScreen;
