import { IoLocationOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
const AppliedJobs = () => {
  return (
    <main className="flex-1 p-6 bg-white">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Applied Jobs (23)</h1>
      </div>
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
            <tr>
              <td className="py-2">
                <div className="flex ">
                  <div className="w-10 h-10 bg-black  mr-2"></div>
                  <div>
                    <p>
                      Electrician{" "}
                      <span className="text-xs bg-slate-100 rounded-lg px-2 py-1 text-blue-700">
                        Full Time
                      </span>
                    </p>
                    <span className="flex gap-1  items-center">
                      <IoLocationOutline />
                      <span className="text-slate-500 text-sm">
                        Addis Ababa
                      </span>
                      <span className="text-slate-500 text-sm">
                        ETB 2500/ month
                      </span>
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-2">May 2, 2024 19:28</td>
              <td className="py-2 text-green-600">
                <span className="flex gap-2 justify-start items-center">
                  <TiTick />
                  active
                </span>
              </td>
              <td className="py-2">
                <button className="bg-slate-200  py-1 px-3 rounded text-blue-700 hover:bg-slate-300 hover:text-blue-800">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <div className="flex ">
                  <div className="w-10 h-10 bg-green-600  mr-2"></div>
                  <div>
                    <p>
                      Electrician{" "}
                      <span className="text-xs bg-slate-100 rounded-lg px-2 py-1 text-blue-700">
                        Full Time
                      </span>
                    </p>
                    <span className="flex gap-1  items-center">
                      <IoLocationOutline />
                      <span className="text-slate-500 text-sm">
                        Addis Ababa
                      </span>
                      <span className="text-slate-500 text-sm">
                        ETB 2500/ month
                      </span>
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-2">May 2, 2024 19:28</td>
              <td className="py-2 text-green-600">
                <span className="flex gap-2 justify-start items-center">
                  <TiTick />
                  active
                </span>
              </td>
              <td className="py-2">
                <button className="bg-slate-200  py-1 px-3 rounded text-blue-700 hover:bg-slate-300 hover:text-blue-800">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <div className="flex ">
                  <div className="w-10 h-10 bg-red-600  mr-2"></div>
                  <div>
                    <p>
                      Electrician{" "}
                      <span className="text-xs bg-slate-100 rounded-lg px-2 py-1 text-blue-700">
                        Full Time
                      </span>
                    </p>
                    <span className="flex gap-1  items-center">
                      <IoLocationOutline />
                      <span className="text-slate-500 text-sm">
                        Addis Ababa
                      </span>
                      <span className="text-slate-500 text-sm">
                        ETB 2500/ month
                      </span>
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-2">May 2, 2024 19:28</td>
              <td className="py-2 ">
                <span className="flex gap-2 justify-start items-center">
                  <TiTick />
                  Completed
                </span>
              </td>
              <td className="py-2">
                <button className="bg-slate-200  py-1 px-3 rounded text-blue-700 hover:bg-slate-300 hover:text-blue-800">
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
