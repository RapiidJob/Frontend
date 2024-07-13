import  { useState } from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { CiGrid41, CiGrid2H } from "react-icons/ci";

const jobs = [
  {
    id: 1,
    avatar: 'https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=3hNSNk_rbalqc_N2FH2MrtOgJaAOaoDebVnu7x5Qtd0=',
    person: 'Person 1',
    location: 'Location 1',
    jobType: 'Full-time',
    price: '$50/hr'
  },
  {
    id: 2,
    avatar: 'https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=3hNSNk_rbalqc_N2FH2MrtOgJaAOaoDebVnu7x5Qtd0=',
    
    person: 'Person 2',
    location: 'Location 2',
    jobType: 'Part-time',
    price: '$40/hr'
  },
  {
    id: 3,
    avatar: 'https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=3hNSNk_rbalqc_N2FH2MrtOgJaAOaoDebVnu7x5Qtd0=',
    
    person: 'Person 3',
    location: 'Location 3',
    jobType: 'Contract',
    price: '$60/hr'
  },
  {
    id: 3,
    avatar: 'https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=3hNSNk_rbalqc_N2FH2MrtOgJaAOaoDebVnu7x5Qtd0=',
    person: 'Person 3',
    location: 'Location 3',
    jobType: 'Contract',
    price: '$60/hr'
  },
  {
    id: 3,
    avatar: 'https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=3hNSNk_rbalqc_N2FH2MrtOgJaAOaoDebVnu7x5Qtd0=',
    person: 'Person 3',
    location: 'Location 3',
    jobType: 'Contract',
    price: '$60/hr'
  },
  // Add more job items as needed
];

const FindJob = () => {
  const [display, setDisplay] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className='pt-[9rem]'>
      <header className="p-4 bg-[#F1F2F4]">
        <div className='flex justify-between'>
          <h1 className="text-2xl font-bold">Find Job</h1>
          <div className="text-gray-500">
            <p>Home / <span className='font-bold'>Find Job</span></p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 max-md:grid">
          <div className="relative w-full max-w-xs">
            <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
            <input type="text" placeholder="Location" className="w-full p-4 border border-gray-300 rounded pl-10" />
          </div>
          <div className="relative w-full max-w-xs">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
            <input type="text" placeholder="Job title, keyword, company" className="w-full p-4 border border-gray-300 rounded pl-10" />
          </div>
          <div className="relative w-full max-w-xs">
            <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
            <input type="text" placeholder="Location" className="w-full p-4 border border-gray-300 rounded pl-10" />
          </div>
          <div className="relative w-full max-w-xs">
            <select className="border border-gray-300 bg-white rounded p-4 pl-3 w-full">
              <option value="">Select filter</option>
              <option value="filter1">Filter 1</option>
              <option value="filter2">Filter 2</option>
            </select>
          </div>
          <input type="submit" value="Find Job" className="bg-blue-500 text-white p-4 rounded w-full max-w-xs cursor-pointer" />
        </div>
      </header>

      <div className="p-4 bg-white">
        <div className='flex justify-between '>
          <div></div>
          <div className="flex  items-center mb-4 gap-3">
            <select 
              className="border border-gray-300 bg-white rounded p-2"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={5}>5 items per page</option>
              <option value={10}>10 items per page</option>
              <option value={20}>20 items per page</option>
            </select>
            <div className="flex justify-end gap-2 border-gray-300 bg-white rounded">
              <CiGrid41 
                className={`text-2xl cursor-pointer ${display ? 'bg-blue-500 rounded text-white' : ''}`} 
                onClick={() => setDisplay(true)} 
              />
              <CiGrid2H 
                className={`text-2xl cursor-pointer ${!display ? 'bg-blue-500 rounded text-white' : ''}`} 
                onClick={() => setDisplay(false)} 
              />
            </div>
          </div>
        </div>
        <div className={`grid gap-4 ${display ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {jobs.slice(0, itemsPerPage).map(job => (
            <div key={job.id} className="p-4 border hover:border-primary rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className='flex items-center gap-4'>
                <img src={job.avatar} alt='avatar' className='h-10 w-10 rounded-full' />
                <div>
                  <h2 className='font-bold text-lg'>{job.person}</h2>
                  <div className='flex items-center gap-2 text-gray-500'>
                    <FiMapPin />
                    <p>{job.location}</p>
                  </div>
                </div>
              </div>
              <div className='mt-4'>
                <h3 className='font-bold'>{job.jobType}</h3>
                <p className='text-blue-500'>{job.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindJob;
