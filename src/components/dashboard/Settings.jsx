import { CiGlobe } from "react-icons/ci";
import { IoPersonCircleOutline, IoSettingsOutline, IoPersonOutline, IoCloudUploadOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import Header from "./Header";
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Settings = () => {
  const [files, setFiles] = useState([]);
  const [cvs, setCvs] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })))
  });

  const thumbs = files.map(file => (
    <div key={file.name} className="mt-2">
      <img
        src={file.preview}
        alt={file.name}
        className="w-20 h-20 rounded"
      />
    </div>
  ));

  const handleAddCv = () => {
    if (cvs.length < 5) {
      setCvs([...cvs, { id: cvs.length, name: `CV Option ${cvs.length + 1}`, file: null }]);
    }
  };

  const handleCvChange = (e, index) => {
    const newCvs = cvs.map((cv, i) => (i === index ? { ...cv, name: e.target.value } : cv));
    setCvs(newCvs);
  };

  const handleCvDelete = index => {
    setCvs(cvs.filter((_, i) => i !== index));
  };

  const handleCvFileChange = (e, index) => {
    const file = e.target.files[0];
    const newCvs = cvs.map((cv, i) => (i === index ? { ...cv, file } : cv));
    setCvs(newCvs);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 mt-[10rem] max-sm:mt-[12rem]">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        {/* <nav className="flex space-x-4 border-b pb-2">
          <NavLink to="personal" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}>
            <span className="flex justify-center items-center gap-1"><IoPersonOutline /> Personal</span>
          </NavLink>
          <NavLink to="profile" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}>
            <span className="flex gap-2 justify-center items-center"><IoPersonCircleOutline /> Profile</span>
          </NavLink>
          <NavLink to="social-links" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}>
            <span className="flex justify-center items-center gap-1"><CiGlobe /> Social Links</span>
          </NavLink>
          <NavLink to="account-setting" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}>
            <span className="flex justify-center items-center gap-1"><IoSettingsOutline /> Account Setting</span>
          </NavLink>
        </nav> */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Profile Picture</h2>
            <div {...getRootProps({ className: 'border-dashed border-2 border-gray-300 p-4 flex flex-col items-center justify-center cursor-pointer' })}>
              <input {...getInputProps()} />
              <IoCloudUploadOutline size={40} className="text-[#9e9d9d]" />
              <h2 className="text-sm"><span className="font-bold">Browse photo</span> or drop here</h2>
              <p className="text-xs text-[#767F8C]">A photo larger than 400 pixels works best. Max photo size 5 MB.</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {thumbs}
              </div>
            </div>
          </div>
          <div className="border rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm">Full Name</label>
                <input type="text" className="mt-1 p-2 border rounded w-full" />
              </div>
              <div>
                <label className="block text-sm">Title/Headline</label>
                <input type="text" className="mt-1 p-2 border rounded w-full" />
              </div>
              <div>
                <label className="block text-sm">Experience</label>
                <select className="mt-1 p-2 border rounded bg-white w-full">
                  <option value="" disabled defaultValue>Select your experience</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid-level</option>
                  <option value="senior">Senior</option>
                  <option value="lead">Lead</option>
                </select>
              </div>
              <div>
                <label className="block text-sm">Education</label>
                <select className="mt-1 p-2 border rounded bg-white w-full">
                  <option value="" disabled defaultValue>Select your education</option>
                  <option value="high-school">High School</option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
            </div>
          </div>
          <div className="border rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Your CV/Resume</h2>
            {cvs.map((cv, index) => (
              <div key={cv.id} className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={cv.name}
                  onChange={(e) => handleCvChange(e, index)}
                  className="p-2 border rounded flex-grow"
                />
                <label
                  htmlFor={`cv-input-${index}`}
                  className="p-2 border rounded flex-grow bg-gray-100 text-gray-700 cursor-pointer"
                >
                  {cv.file ? cv.file.name : 'Choose file'}
                </label>
                <input
                  type="file"
                  onChange={(e) => handleCvFileChange(e, index)}
                  className="hidden"
                  id={`cv-input-${index}`}
                />
                <button onClick={() => handleCvDelete(index)} className="text-red-500">
                  <FaTrashAlt />
                </button>
              </div>
            ))}
            {cvs.length < 5 && (
              <button onClick={handleAddCv} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full">
                Add CV
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
