
const AppliedJobs = () => {
  return (
    <main className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Applied Jobs (23)</h1>
      </div>
      <div className="bg-white p-4 rounded shadow-sm">
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
              <td className="py-2">Feb 2, 2024 19:28</td>
              <td className="py-2 text-green-600">Completed</td>
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
              <td className="py-2">Feb 2, 2024 19:28</td>
              <td className="py-2 text-green-600">Completed</td>
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
              <td className="py-2">Feb 2, 2024 19:28</td>
              <td className="py-2 text-green-600">Completed</td>
              <td className="py-2">
                <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                  Electronics Maintenance
                </span>
              </td>
              <td className="py-2">Adama</td>
              <td className="py-2">Dec 7, 2024 23:26</td>
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
                  <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                  Electronics Maintenance
                </span>
              </td>
              <td className="py-2">Adama</td>
              <td className="py-2">Dec 7, 2024 23:26</td>
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
                  <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                  Electronics Maintenance
                </span>
              </td>
              <td className="py-2">Adama</td>
              <td className="py-2">Dec 7, 2024 23:26</td>
              <td className="py-2 text-green-600">Active</td>
              <td className="py-2">
                <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
                  View Details
                </button>
              </td>
            </tr>
            {/* Add more job rows here */}
          </tbody>
        </table>
        
      </div>
      <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">&lt;</button>
            <button className="bg-blue-600 text-white py-1 px-3 rounded">01</button>
            <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">02</button>
            <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">03</button>
            <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">04</button>
            <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">05</button>
            <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">&gt;</button>
          </div>
        </div>
    </main>
  );
};

export default AppliedJobs;
