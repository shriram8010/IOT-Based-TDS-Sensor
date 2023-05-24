import React from 'react'
import { Link } from 'react-router-dom'
import { FaHandHoldingWater } from 'react-icons/fa'

const Index = () => {
  return (
    <div className='text-white min-h-[92vh]'>
      {/* <div className="carousel h-[92vh] z-0 absolute top-[8vh]">
        <Carousel
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
          useKeyboardArrows={true}
          stopOnHover={true}
          showStatus={false}
          className='z-0'
        >
          <div>
            <img src={img1} className='opacity-30 h-[92vh]' />
          </div>
          <div>
            <img src={img2} className='opacity-30 h-[92vh]' />
          </div>
          <div>
            <img src={img3} className='opacity-30 h-[92vh]' />
          </div>
        </Carousel>
      </div> */}

      <div className='text-justify z-30 text-opacity-100 flex flex-col space-y-5'>
        <p className='text-4xl p-2 text-lime-400 font-medium flex space-x-3'>
          <span>Know your H2O</span>
          <p className='animate-pulse text-blue-300'><FaHandHoldingWater /></p>
        </p>

        <p className='text-2xl p-2'>Keep tabs on TDS for safer sips and healthier sips!</p>

        <div className="flex flex-wrap text-xl">
          <div className='w-1/2 p-2 h-[27vh] flex justify-center items-center'>
            <p className='border-2 border-lime-300 bg-lime-500 bg-opacity-10 text-lime-100 rounded-md h-full flex justify-center p-2'>
              High TDS levels mean more than just a salty taste.
            </p>
          </div>
          <div className='w-1/2 p-2 h-[27vh] flex justify-center items-center'>
            <p className='border-2 border-lime-300 bg-lime-500 bg-opacity-10 text-lime-100 rounded-md h-full flex justify-center p-2'>
              Your water's TDS level can tell you a lot about its quality.
            </p>
          </div>
          <div className='w-1/2 p-2 h-[27vh] flex justify-center items-center'>
            <p className='border-2 border-lime-300 bg-lime-500 bg-opacity-10 text-lime-100 rounded-md h-full flex justify-center p-2'>
              Don't let TDS levels trick you into thinking your water is safe.
            </p>
          </div>
          <div className='w-1/2 p-2 h-[27vh] flex justify-center items-center'>
            <p className='border-2 border-lime-300 bg-lime-500 bg-opacity-10 text-lime-100 rounded-md h-full flex justify-center p-2'>
              Keep your TDS levels low, and your health high.
            </p>
          </div>
        </div>

        <Link to={'/results'} className='w-full px-2 mx-auto'>
          <button className='w-full border-2 border-lime-300 bg-lime-300 text-black hover:bg-transparent hover:text-lime-300 active:bg-transparent active:text-lime-300 py-2 rounded-md duration-150'>
            See Results
          </button>
        </Link>

      </div>
    </div>
  )
}

export default Index