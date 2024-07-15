
import { CiGlobe } from "react-icons/ci";
import { IoPersonCircleOutline, IoSettingsOutline,IoPersonOutline } from "react-icons/io5"
import { NavLink, Outlet } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Setting</h1>
      <nav className="flex space-x-4 border-b pb-2">
        <NavLink to="personal" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}>
        <span className="flex justify-center items-center gap-1"><IoPersonOutline/> Personal</span>
        </NavLink>
        <NavLink to="profile" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}>
          <span className="flex gap-2 justify-center items-center"><IoPersonCircleOutline/>Profile</span>
        </NavLink>
        <NavLink to="social-links" className={ ({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}>
        <span className="flex justify-center items-center gap-1"><CiGlobe /> Social Links</span>
        </NavLink>
        <NavLink to="account-setting" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}>
          <span className="flex justify-center items-center gap-1"><IoSettingsOutline/>Account Setting</span>
        </NavLink>
      </nav>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
