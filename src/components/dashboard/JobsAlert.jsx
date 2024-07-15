import { FaRegBookmark } from "react-icons/fa";
import { IoBagRemoveOutline, IoLocationOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "./Header";

const JobsAlert = () => {
  return (
    <>
    <Header/>
    <main className="flex-1 p-6 bg-white mt-40">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Hello, Fahmi Dinsefa</h1>
        <p className="text-gray-600">
          Here is your daily activities and job alerts
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-success p-4 rounded shadow-sm flex justify-between items-center">
          <div className="ml-4">
            <h3 className="text-3xl font-semibold">15</h3>
            <p className=" text-xl">Applied Jobs</p>
          </div>
          <div className="text-blue-600">
            <span className="">
              <IoBagRemoveOutline size={32} />
            </span>
          </div>
        </div>
        <div className="bg-warning p-4 rounded shadow-sm flex justify-between items-center">
          <div className="ml-4">
            <h3 className="text-3xl font-semibold">4</h3>
            <p className="text-gray-600">Favorite Jobs</p>
          </div>
          <div className="text-yellow-600">
            <FaRegBookmark size={32} />
          </div>
        </div>
        <div className="bg-success p-4 rounded shadow-sm flex justify-between items-center">
          <div className="ml-4">
            <h3 className="text-3xl font-semibold">44</h3>
            <p className="text-gray-600">Job Alerts</p>
          </div>
          <div className="text-green-600">
            <MdOutlineNotificationsActive size={32} />
          </div>
        </div>
      </div>

      {/* Profile Alert */}
      <div className="bg-red-500 p-4 rounded mb-6">
        <div className="flex items-center">
          <img
            src="https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=3hNSNk_rbalqc_N2FH2MrtOgJaAOaoDebVnu7x5Qtd0="
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-white font-semibold">
              Your profile editing is not completed.
            </h3>
            <p className="text-white">
              Complete your profile editing & build your custom Resume
            </p>
          </div>
          <button className="ml-auto bg-white text-red-500 font-semibold py-2 px-4 rounde">
            Edit Profile <span className="text-xl">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Recently Applied */}
      <div className="bg-white p-4 rounded shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Recently Applied</h3>
          <Link to="/applied-jobs" className="text-blue-600 hover:underline">
            View All
          </Link>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2">Job</th>
              <th className="py-2">Date Applied</th>
              <th className="py-2">Status</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
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
                  <div className="w-10 h-10 bg-blue-600  mr-2"></div>
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

            {/* Repeat for other jobs */}
          </tbody>
        </table>
      </div>
    </main>
    </>
  );
};

export default JobsAlert;
