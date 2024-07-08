import React from 'react'
import HowItWorksGraphics from '../../assets/landingPage/howItWorksGraphics.png'
import one from '../../assets/landingPage/one.svg'
import two from '../../assets/landingPage/two.svg'
import three from '../../assets/landingPage/three.svg'

const HowItWorks = () => {
  return (
    <div className='p-10 grid items-center justify-center gap-12'>
      <h1 className='text-center font-abhaya text-[36px] max-sm:text-[26px] font-[700]'>
        Find jobs with 3 easy steps
      </h1>
      <div className='flex items-center justify-center'>
        <p className='text-center w-[30rem] max-sm:w-[22rem] font-abhaya'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='flex gap-[10rem]'>
        <div className='flex items-center justify-end w-[100%] max-xl:hidden'>
          <img src={HowItWorksGraphics} className='w-[542px]' />
        </div>
        <div className='w-[100%] flex items-center max-xl:justify-center max-sm:bg-green-300'>
          <div className='grid w-[50%] gap-8'>
            <div className='grid'>
              <div className='flex gap-[1rem] items-center'>
                <img src={one} />
                <h1 className='text-center font-abhaya text-[21px]'>
                  Search for a job
                </h1>
              </div>
              <div className='flex gap-[4rem]'>
                <div></div>
                <p className='text-left font-abhaya'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className='grid'>
              <div className='flex gap-[1rem] items-center'>
                <img src={two} />
                <h1>Apply within our Platform</h1>
              </div>
              <div className='flex gap-[4rem]'>
                <div></div>
                <p className='text-left font-abhaya'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className='grid'>
              <div className='flex gap-[1rem] items-center'>
                <img src={three} />
                <h1>Get Hired</h1>
              </div>
              <div className='flex gap-[4rem]'>
                <div></div>
                <p className='text-left font-abhaya'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
