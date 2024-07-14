import { FaBriefcase, FaHeart, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobsAlert = () => {
  return (
    <main className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Hello, Fahmi Dinsefa</h1>
        <p className="text-gray-600">Here is your daily activities and job alerts</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow-sm flex items-center">
          <div className="text-blue-600">
            <FaBriefcase size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">15</h3>
            <p className="text-gray-600">Applied Jobs</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-sm flex items-center">
          <div className="text-yellow-600">
            <FaHeart size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">4</h3>
            <p className="text-gray-600">Favorite Jobs</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-sm flex items-center">
          <div className="text-green-600">
            <FaBell size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">44</h3>
            <p className="text-gray-600">Job Alerts</p>
          </div>
        </div>
      </div>

      {/* Profile Alert */}
      <div className="bg-red-500 p-4 rounded mb-6">
        <div className="flex items-center">
          <img src="https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=3hNSNk_rbalqc_N2FH2MrtOgJaAOaoDebVnu7x5Qtd0=" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-white font-semibold">Your profile editing is not completed.</h3>
            <p className="text-white">Complete your profile editing & build your custom Resume</p>
          </div>
          <button className="ml-auto bg-white text-red-500 font-semibold py-2 px-4 rounde">
            Edit Profile <span className='text-xl'>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Recently Applied */}
      <div className="bg-white p-4 rounded shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Recently Applied</h3>
          <Link to="/applied-jobs" className="text-blue-600 hover:underline">View All</Link>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Job</th>
              <th className="py-2">Location</th>
              <th className="py-2">Date Applied</th>
              <th className="py-2">Status</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                  Electrician
                </span>
              </td>
              <td className="py-2">Addis Ababa</td>
              <td className="py-2">May 2, 2024 19:28</td>
              <td className="py-2 text-green-600">Active</td>
              <td className="py-2">
                <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                  Electrician
                </span>
              </td>
              <td className="py-2">Addis Ababa</td>
              <td className="py-2">May 2, 2024 19:28</td>
              <td className="py-2 text-green-600">Active</td>
              <td className="py-2">
                <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                  Electrician
                </span>
              </td>
              <td className="py-2">Addis Ababa</td>
              <td className="py-2">May 2, 2024 19:28</td>
              <td className="py-2 text-green-600">Active</td>
              <td className="py-2">
                <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                  Electrician
                </span>
              </td>
              <td className="py-2">Addis Ababa</td>
              <td className="py-2">May 2, 2024 19:28</td>
              <td className="py-2 text-green-600">Active</td>
              <td className="py-2">
                <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                  Electrician
                </span>
              </td>
              <td className="py-2">Addis Ababa</td>
              <td className="py-2">May 2, 2024 19:28</td>
              <td className="py-2 text-green-600">Active</td>
              <td className="py-2">
                <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
                  View Details
                </button>
              </td>
            </tr>
            {/* Repeat for other jobs */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default JobsAlert;
