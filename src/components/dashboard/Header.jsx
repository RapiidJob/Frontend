/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/landingPage/logo.png';
import { FiPhone, FiSearch, FiMenu } from "react-icons/fi";
import { FaBell } from "react-icons/fa";

const Header = ({ ispost }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState('Home');
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const currentPath = location.pathname.substring(1);
        setActive(currentPath || 'Home');
    }, [location]);

    const handleToolbarClick = (data) => {
        setActive(data.toLowerCase());
        navigate(`/${data.toLowerCase()}`);
        setDrawerOpen(false); // Close the drawer when a menu item is clicked
    };

    return (
        <div className="flex flex-col fixed w-full z-10 bg-white shadow-md">
            <div className="flex justify-between items-center bg-gray-200 p-2 flex-wrap">
                <FiMenu className="text-2xl cursor-pointer sm:hidden" onClick={() => setDrawerOpen(true)} />
                <ul className="hidden sm:flex space-x-4 flex-wrap">
                    {['Home', 'findjob', 'FindEmployers', 'Dashboard', 'JobAlerts', 'CustomerSupports'].map(item => (
                        <li key={item} 
                            className={`cursor-pointer ${active === item.toLowerCase() ? 'border-b-4 border-primary text-primary' : ''} transition duration-300 ease-in-out`} 
                            onClick={() => handleToolbarClick(item)}
                        >
                            <div className='p-2'>{item}</div>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 items-center mt-2 sm:mt-0'>
                    <div className="flex items-center space-x-2">
                        <FiPhone />
                        <p>+251940798785</p>
                    </div>
                    <select className="border border-gray-300 rounded p-1">
                        <option value="en">English</option>
                        <option value="am">Amharic</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-between items-center bg-primary p-4 flex-wrap">
                <img src={logo} alt="logo" className="h-10 mb-2 sm:mb-0" />
                <div className="flex items-center space-x-4 w-full sm:w-auto justify-end">
                    <div className="relative w-full sm:w-[40rem] mb-2 sm:mb-0">
                        {ispost ? (
                            <button className="w-full flex justify-end items-end text-white py-2 px-4 rounded"> + Post a Job</button>
                        ) : (
                            <>
                                <input className="w-full border p-[1rem] border-gray-300 rounded pl-10" placeholder="Job title, keyword, company" />
                                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-2xl" />
                            </>
                        )}
                    </div>
                    <FaBell className="text-xl text-white" />
                    <img src="https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=3hNSNk_rbalqc_N2FH2MrtOgJaAOaoDebVnu7x5Qtd0=" alt="avatar" className="h-10 w-10 rounded-full" />
                </div>
            </div>
            {/* Drawer */}
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-20 transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 sm:hidden`} onClick={() => setDrawerOpen(false)}>
                <div className="absolute right-0 w-64 h-full bg-white shadow-md" onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-col p-4">
                        <FiMenu className="text-2xl self-end cursor-pointer" onClick={() => setDrawerOpen(false)} />
                        <ul className="mt-4">
                            {['Home', 'findjob', 'FindEmployers', 'Dashboard', 'JobAlerts', 'CustomerSupports'].map(item => (
                                <li key={item} 
                                    className={`cursor-pointer ${active === item ? 'border-b-4 border-primary text-primary' : ''} transition duration-300 ease-in-out mb-2`} 
                                    onClick={() => handleToolbarClick(item)}
                                >
                                    <div className='p-2'>{item}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
