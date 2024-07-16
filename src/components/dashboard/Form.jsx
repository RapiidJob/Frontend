import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Assuming you are using Redux for state management

const Form = () => {
    const [categories, setCategories] = useState([]);
    const [useMyAddress, setUseMyAddress] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const user = useSelector((state) => state.auth.user); // Fetch user from Redux store

    useEffect(() => {
        axios.get('https://rapidjob-backend.onrender.com/api/jobs/catagories/')
            .then(response => {
                setCategories(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        
        // Remove 'is_finished' field from data
        delete data.is_finished;
        
        // Automatically get latitude and longitude if available
        if (!useMyAddress && user && user.address) {
            data.latitude = user.address.latitude || null;
            data.longitude = user.address.longitude || null;
        } else {
            data.latitude = null;
            data.longitude = null;
        }

        const token = localStorage.getItem('token');
        axios.post('https://rapidjob-backend.onrender.com/api/jobs/create/', data
            , {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }
        )
            .then(response => {
                console.log('Job posted successfully:', response.data);
                setSuccess(true);
                setLoading(false);
                // Clear form fields here if needed
                event.target.reset(); // Reset form fields
            })
            .catch(error => {
                console.error('Error posting job:', error);
                setLoading(false);
            });
    };

    const handleUseMyAddressChange = (e) => {
        if (user.user.address){
            setUseMyAddress(e.target.value === 'True');
        }
    };

    return (
        <div className="max-w-full mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-3xl font-semibold mb-6">Post a Job</h2>
            {success && <p className="text-green-600 mb-4">Job posted successfully!</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="title">Job Title</label>
                    <input type="text" id="title" name="title" placeholder="Add job title, role, vacancies etc" className="w-full border border-gray-300 p-2 rounded" required />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
                    <textarea id="description" name="description" placeholder="Add your job description..." className="w-full border border-gray-300 p-2 rounded" required></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
                        <select id="category" name="subcategory_id" className="w-full border border-gray-300 p-2 rounded" required>
                            <option value="">Select...</option>
                            {categories.map(category => (
                                <optgroup key={category.id} label={category.name}>
                                    {category.subcategories.map(subcategory => (
                                        <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="estimated_price">Estimated Price</label>
                        <input type="number" id="estimated_price" name="estimated_price" placeholder="Estimated Price..." className="w-full border border-gray-300 p-2 rounded" required />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="currency_type">Currency Type</label>
                    <select id="currency_type" name="currency_type" className="w-full border border-gray-300 p-2 rounded" required>
                        <option value="Birr">ETB</option>
                        <option value="USD">USD</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="use_my_address">The Job is near my Current Address</label>
                    <select id="use_my_address" name="use_my_address" className="w-full border border-gray-300 p-2 rounded" onChange={handleUseMyAddressChange}>
                        <option value="False">No</option>
                        <option value="True">Yes</option>
                    </select>
                </div>

                {(!useMyAddress || !user.user.address) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
                            <input type="text" id="city" name="city" placeholder="City" className="w-full border border-gray-300 p-2 rounded" required={!useMyAddress} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="country">Country</label>
                            <input type="text" id="country" name="country" placeholder="Country" className="w-full border border-gray-300 p-2 rounded" required={!useMyAddress} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="region">Region</label>
                            <input type="text" id="region" name="region" placeholder="Region" className="w-full border border-gray-300 p-2 rounded" required={!useMyAddress} />
                        </div>
                    </div>
                )}

                {/* Loader during submission */}
                {loading ? (
                    <div className="flex items-center justify-center">
                        <p className="text-gray-600">Posting job...</p>
                    </div>
                ) : (
                    <div className="flex justify-end space-x-4">
                        <button type="button" className="bg-green-500 text-white py-2 px-4 rounded">Review Post</button>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Post Job</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Form;
