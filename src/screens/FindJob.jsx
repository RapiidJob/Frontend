import { useEffect, useState } from 'react';
import { FiSearch, FiMapPin, FiMap } from 'react-icons/fi';
import { CiGrid41, CiGrid2H } from "react-icons/ci";
import axios from 'axios';
import Header from '../components/dashboard/Header';
import { useDispatch } from 'react-redux';
import { changeJobDetail } from '../features/jobs/jobDetailSlice';
import { useNavigate } from 'react-router-dom';

const FindJob = () => {
  const [display, setDisplay] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null });
  const [filters, setFilters] = useState({
    keyword: '',
    newest: false,
    oldest: false,
    smallest_price: false,
    largest_price: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const queryParams = {
        keyword: filters.keyword,
        newest: filters.newest,
        oldest: filters.oldest,
        smallest_price: filters.smallest_price,
        largest_price: filters.largest_price,
        limit: itemsPerPage,
      };

      if (locationEnabled && userLocation.latitude && userLocation.longitude) {
        queryParams.latitude = userLocation.latitude;
        queryParams.longitude = userLocation.longitude;
      }

      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/jobs/search`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: queryParams,
      });

      setJobs(response.data.results);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          fetchJobs();
        },
        error => {
          console.error('Error getting location:', error);
          setLocationEnabled(false);
          fetchJobs(); // Fetch jobs without location if geolocation fails
        }
      );
    };

    if (locationEnabled) {
      getLocation();
    } else {
      fetchJobs();
    }
  }, [itemsPerPage, locationEnabled, filters]);

  const handleToggle = () => {
    setLocationEnabled(!locationEnabled);
  };

  const handleJobDetail = (data) => {
    dispatch(changeJobDetail(data));
    navigate('/findjob/detail');
  };

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === 'checkbox' ? checked : value;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: val,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchJobs();
  };

  return (
    <>
      <Header />
      <div className='pt-[9rem]'>
        <header className="p-4 bg-[#F1F2F4]">
          <div className='flex justify-between'>
            <h1 className="text-2xl font-bold">Find Job</h1>
            <div className="text-gray-500">
              <p>Home / <span className='font-bold'>Find Job</span></p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-4 flex items-center justify-center gap-4 max-md:grid">
              <div className="relative w-full max-w-xs flex items-center gap-2">
                <FiMap className={`text-2xl ${locationEnabled ? 'text-blue-500' : 'text-gray-400'}`} />
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${locationEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                    onClick={handleToggle}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${locationEnabled ? 'translate-x-4' : ''}`}
                    />
                  </div>
                  <span className="text-gray-700">Search based on my location</span>
                </div>
              </div>
              <div className="relative w-full max-w-xs">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
                <input
                  type="text"
                  name="keyword"
                  value={filters.keyword}
                  onChange={handleFilterChange}
                  placeholder="Job title, keyword, company"
                  className="w-full p-4 border border-gray-300 rounded pl-10"
                />
              </div>

              <div className="relative w-full max-w-xs">
                <select
                  name="newest"
                  value={filters.newest}
                  onChange={handleFilterChange}
                  className="border border-gray-300 bg-white rounded p-4 pl-3 w-full"
                >
                  <option value="">Select filter</option>
                  <option value="true">Latest</option>
                  <option value="false">Oldest</option>
                </select>
              </div>

              <div className="relative w-full max-w-xs">
                <select
                  name="smallest_price"
                  value={filters.smallest_price}
                  onChange={handleFilterChange}
                  className="border border-gray-300 bg-white rounded p-4 pl-3 w-full"
                >
                  <option value="">Select filter</option>
                  <option value="true">Smallest price</option>
                  <option value="false">Largest price</option>
                </select>
              </div>

              <input type="submit" value="Find Job" className="bg-blue-500 text-white p-4 rounded w-full max-w-xs cursor-pointer" />
            </div>
          </form>
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
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className={`grid gap-4 ${display ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {jobs.slice(0, itemsPerPage).map(job => (
                  <div key={job.id} onClick={() => handleJobDetail(job)} className="p-4 border hover:border-primary cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className='flex items-center gap-4'>
                      <img src={job.posted_by.profile_image} alt='avatar' className='h-10 w-10 rounded-full' />
                      <div>
                        <h2 className='font-bold text-lg'>{job.posted_by.first_name} {job.posted_by.last_name}</h2>
                        <div className='flex items-center gap-2 text-gray-500'>
                          <FiMapPin />
                          <p>{job.job_address.city}, {job.job_address.region}, {job.job_address.country}</p>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <h3 className='font-bold'>{job.title}</h3>
                      <p className='text-blue-500'>{job.estimated_price} {job.currency_type}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => fetchJobs(prevUrl)}
                  disabled={!prevUrl}
                  className={`bg-blue-500 text-white px-4 py-2 rounded ${!prevUrl ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'}`}
                >
                  Previous
                </button>
                <button
                  onClick={() => fetchJobs(nextUrl)}
                  disabled={!nextUrl}
                  className={`bg-blue-500 text-white px-4 py-2 rounded ${!nextUrl ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'}`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FindJob;
