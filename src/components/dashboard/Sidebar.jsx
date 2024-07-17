import { CiSettings } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {  FaSignOutAlt } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { RiHandbagLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; 
const Sidebar = () => {

  const handleLogout = ()=>{
    localStorage.clear();
    // navigate('/login')
    window.location.reload();
    
    
  }
  return (
    <aside className="w-1/4 mt-40 bg-white p-4 md:block flex-shrink-0 relative border-r border-gray-200 hidden ">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-600">Candidate Dashboard</h2>
      </div>
      <nav className="space-y-2">
        <Link
          to="#overview"
          className="flex items-center text-xl p-2 text-blue-600 bg-gray-100 rounded"
        >
          <GoStack className="mr-2" />
          Overview
        </Link>
        <Link
          to="#appliedjobs"
          className="flex items-center text-xl p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
        >
          <RiHandbagLine className="mr-2" />
          Applied Jobs
        </Link>
        <Link
          to="#favoritejobs"
          className="flex items-center text-xl p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
        >
          <CiBookmark className="mr-2" />
          Favorite Jobs
        </Link>
        <Link
          to="#jobalerts"
          className="flex text-xl items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
        >
          <IoNotificationsOffOutline className="mr-2" />
          Job Alerts
        </Link>
        <Link
          to="#jobpost"
          className="flex items-center p-2 text-xl text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
        >
          <IoMdAddCircleOutline className="mr-2" />
          Post a job
        </Link>
        <Link
          to="#settings"
          className="flex items-center text-xl p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
        >
          <CiSettings className="mr-2" />
          Settings
        </Link>
      </nav>
      <div className="absolute bottom-4 w-full">
        <Link
          className="flex items-center p-2 text-red-600 hover:text-red-800 hover:bg-gray-100 rounded "
          onClick={handleLogout}
        >
          <FaSignOutAlt className="mr-2" />
          Log out
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
