import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularJobs = () => {
  return (
    <section className='bg-primary grid items-center justify-center min-h-[80vh]'>
        <div className='flex flex-col gap-10 p-6'>
            <h1 className='text-start font-abhaya font-[700] text-[36px] text-white'>Popular Jobs category</h1>
            <p className='w-[60%] text-start font-abhaya font-[400] text-[17px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {[
                        { title: 'Plumbing', jobs: 47 },
                        { title: 'Tutoring', jobs: 51 },
                        { title: 'Painting', jobs: 89 },
                        { title: 'Electrical Maintenance', jobs: 16 },
                        { title: 'Insulation worker', jobs: 23 },
                        { title: 'Construction worker Support', jobs: 34 },
                    ].map((job, index) => (
                        <Link key={index} to="/findjob">
                        <li  className={`font-abhaya cursor-pointer text-primary group flex justify-between items-center bg-white p-6 rounded shadow transition-colors duration-300 ease-in-out ${index === 0 ? 'bg-green-500' : ''}`}>
                            <div>
                                <h2 className="font-semibold text-[21px]">{job.title}</h2>
                                <p className="text-gray-500">{job.jobs} Jobs</p>
                            </div>
                            <FaArrowRight className={`text-primary ${index === 0 ? 'block' : 'hidden'} group-hover:block`} />
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  );
}

export default PopularJobs;
