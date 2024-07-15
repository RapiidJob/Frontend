
const Form = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Post a job</h2>
            
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" placeholder="Add job title, role, vacancies etc" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="tags">Tags</label>
                    <input type="text" id="tags" placeholder="Job keyword, tags etc..." className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
                    <select id="location" className="w-full border border-gray-300 p-2 rounded">
                        <option>Select...</option>
                    </select>
                </div>
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
                <textarea id="description" placeholder="Add your job description..." className="w-full border border-gray-300 p-2 rounded"></textarea>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Payment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="minAmount">Min Amount</label>
                    <div className="flex">
                        <input type="number" id="minAmount" placeholder="Minimum Payment..." className="w-full border border-gray-300 p-2 rounded-l" />
                        <span className="inline-flex items-center px-3 bg-gray-200 border border-gray-300 rounded-r">ETB</span>
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="maxAmount">Max Amount</label>
                    <div className="flex">
                        <input type="number" id="maxAmount" placeholder="Maximum Payment..." className="w-full border border-gray-300 p-2 rounded-l" />
                        <span className="inline-flex items-center px-3 bg-gray-200 border border-gray-300 rounded-r">ETB</span>
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="paymentType">Payment Type</label>
                    <select id="paymentType" className="w-full border border-gray-300 p-2 rounded">
                        <option>Select...</option>
                    </select>
                </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Job Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="jobCategory">Job Category</label>
                    <select id="jobCategory" className="w-full border border-gray-300 p-2 rounded">
                        <option>Select...</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="jobSubCategory">Job Sub-Category</label>
                    <select id="jobSubCategory" className="w-full border border-gray-300 p-2 rounded">
                        <option>Select...</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="jobDuration">Job Duration</label>
                    <select id="jobDuration" className="w-full border border-gray-300 p-2 rounded">
                        <option>Select...</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="vacancies">Vacancies</label>
                    <select id="vacancies" className="w-full border border-gray-300 p-2 rounded">
                        <option>Select...</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="expirationDate">Expiration Date</label>
                    <input type="date" id="expirationDate" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="recurrenceInterval">Recurrence Interval</label>
                    <select id="recurrenceInterval" className="w-full border border-gray-300 p-2 rounded">
                        <option>Select...</option>
                    </select>
                </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Apply Job on:</h3>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <label className="flex items-center border border-gray-300 p-4 rounded cursor-pointer">
                    <input type="radio" name="applyJob" value="RapidJob" className="mr-2" defaultChecked />
                    <div>
                        <h4 className="font-semibold">On RapidJob</h4>
                        <p className="text-gray-600">Candidates will apply job using RapidJob & all application will show on your dashboard.</p>
                    </div>
                </label>
                <label className="flex items-center border border-gray-300 p-4 rounded cursor-pointer">
                    <input type="radio" name="applyJob" value="ExternalPlatform" className="mr-2" />
                    <div>
                        <h4 className="font-semibold">External Platform</h4>
                        <p className="text-gray-600">Candidates apply job on external platform all application on external platform.</p>
                    </div>
                </label>
            </div>
            
            <div className="flex justify-end space-x-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded">Review Post</button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Post Job</button>
            </div>
        </div>
    );
};

export default Form;
