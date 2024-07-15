import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaBriefcase, FaHeart, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-64 mt-40 bg-white p-4 md:block flex-shrink-0 relative border-r border-gray-200 hidden ">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Worker Dashboard</h2>
      </div>
      <nav className="space-y-2">
        <Link to="#overview" className="flex items-center p-2 text-blue-600 bg-gray-100 rounded">
          <FaBriefcase className="mr-2" />
          Overview
        </Link>
        <Link to="#appliedjobs" className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded">
          <FaBriefcase className="mr-2" />
          Applied Jobs
        </Link>
        <Link to="#favoritejobs" className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded">
          <FaHeart className="mr-2" />
          Favorite Jobs
        </Link>
        <Link to="#jobalerts" className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded">
          <FaBell className="mr-2" />
          Job Alerts
        </Link>
        <Link to="#jobpost" className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded">
          <IoMdAddCircleOutline className="mr-2" />
          Post a job
        </Link>
        <Link to="#settings" className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded">
          <FaCog className="mr-2" />
          Settings
        </Link>
      </nav>
      <div className="absolute bottom-4 w-full">
        <Link to="/logout" className="flex items-center p-2 text-red-600 hover:text-red-800 hover:bg-gray-100 rounded">
          <FaSignOutAlt className="mr-2" />
          Log out
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
