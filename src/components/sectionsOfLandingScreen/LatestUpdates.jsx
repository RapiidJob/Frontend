import gmail from '../../assets/socialIcons/gmail.svg';

const LatestUpdates = () => {
  return (
    <section className='flex items-center justify-center p-10'>
        <div className='grid items-center justify-center gap-10'>
            
            <div className='flex items-center justify-center'>
                <img src={gmail} />
            </div>
            
            <div className='text-center font-abhaya text-[36px] flex items-center justify-center'>
                <h1>Get our latest updates</h1>
            </div>
            
            <div className='text-center font-abhaya flex items-center justify-center'>
                <p className='max-w-[30rem] max-sm:w-[20rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            <div className='text-center font-abhaya flex max-sm:w-[20rem] items-center justify-between'>
                <input className="h-[50px] p-[1rem] outline-none ring-0" placeholder='Enter your email/Phone number' />
                <button className='font-[700] rounded-[7px] text-white w-[166px] h-[50px] bg-primary text-[17px]'>Subscribe</button>
            </div>
            
            <div className='text-center font-abhaya flex items-center justify-center'>
                <p className='max-w-[30rem]'>We’ll never share your details with third parties. View our Privacy Policy for more info.</p>
            </div>
            
        </div>
    </section>
  )
}

export default LatestUpdates
