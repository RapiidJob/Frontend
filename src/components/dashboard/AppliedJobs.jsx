import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { useSelector } from "react-redux";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const user = useSelector((state) => state.auth.user);
  const endpoint = "https://rapidjob-backend.onrender.com/api/application/user_applications/";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(response.data.results);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Ensure loading is set to false on error too
      }
    };
    fetchJobs();
  }, []);

  return (
    <main className="flex-1 p-6 bg-white">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Applied Jobs ({jobs.length})</h1>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          {/* Replace with your loader component */}
          <p>Loading...</p>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400">
                <th className="py-2 uppercase">Jobs</th>
                <th className="py-2 uppercase">Date Applied</th>
                <th className="py-2 uppercase">Status</th>
                <th className="py-2 uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td className="py-2">
                    <div className="flex">
                      {/* Replace with job details rendering */}
                      <div className={`w-10 h-10 bg-${job.job.id % 2 === 0 ? 'green' : 'black'} mr-2`}></div>
                      <div>
                        <p>
                          {job.job.title}{" "}
                          <span className="text-xs bg-slate-100 rounded-lg px-2 py-1 text-blue-700">
                            {job.job.subcategory.name}
                          </span>
                        </p>
                        <span className="flex gap-1 items-center">
                          <IoLocationOutline />
                          <span className="text-slate-500 text-sm">
                            {job.job.job_address.city}, {job.job.job_address.country}
                          </span>
                          <span className="text-slate-500 text-sm">
                            {job.agreed_price} {job.currency_type}/month
                          </span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2">{new Date(job.application_date_time).toLocaleString()}</td>
                  <td className={`py-2 text-${job.status === "Completed" ? 'red' : 'green'}-600`}>
                    <span className="flex gap-2 justify-start items-center">
                      <TiTick />
                      {job.status}
                    </span>
                  </td>
                  <td className="py-2">
                    <button className="bg-slate-200 py-1 px-3 rounded text-blue-700 hover:bg-slate-300 hover:text-blue-800">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">
            &lt;
          </button>
          <button className="bg-blue-600 text-white py-1 px-3 rounded">
            01
          </button>
          <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">
            02
          </button>
          <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">
            03
          </button>
          <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">
            04
          </button>
          <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">
            05
          </button>
          <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded hover:bg-gray-400">
            &gt;
          </button>
        </div>
      </div>
    </main>
  );
};

export default AppliedJobs;
