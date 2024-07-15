import Header from "./Header";

// src/components/Overview.jsx
const jobs = [
  { title: 'Electrician', type: 'Task', remaining: '27 days remaining', status: 'Active', applications: 98 },
  { title: 'Janitor', type: 'Full Time', remaining: '8 days remaining', status: 'Active', applications: 85 },
  { title: 'Construction Worker', type: 'Full Time', remaining: '4 days remaining', status: 'Active', applications: 55 },
  { title: 'Plumbing', type: 'Full Time', remaining: '24 days remaining', status: 'Active', applications: 11 },
  { title: 'Something', type: 'Part Time', remaining: 'Dec 7, 2019', status: 'Expired', applications: 120 },
];

const Overview = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto p-4 mt-40">
      <h1 className="text-2xl font-bold mb-4">Hello, ASTU</h1>
      <p className="mb-4">Here is your daily activities and applications</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <div className="flex-1">
            <p className="text-2xl font-bold">18</p>
            <p>Open Jobs</p>
          </div>
          <div>
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 4a1 1 0 00-1 1v2H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V5a1 1 0 00-1-1H6zM4 9h12v6H4V9zM9 6h2v2H9V6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
          <div className="flex-1">
            <p className="text-2xl font-bold">35</p>
            <p>Saved Workers</p>
          </div>
          <div>
            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12zm2 10a2 2 0 11-4 0 2 2 0 014 0zm0-4a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Recently Posted Jobs</h2>
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6">Jobs</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Applications</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {jobs.map((job, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">{job.title} <span className="text-gray-500">• {job.type}</span> <span className="text-gray-400">{job.remaining}</span></td>
              <td className="py-3 px-6">
                <span className={`text-sm font-medium ${job.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                  {job.status}
                </span>
              </td>
              <td className="py-3 px-6">{job.applications} Applications</td>
              <td className="py-3 px-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Applications</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Overview;
