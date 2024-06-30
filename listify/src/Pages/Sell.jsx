import React from 'react'
import { Link } from 'react-router-dom'

export default function Sell() {
  return (
    <>
    <div>
        <div className='px-5 py-2 sticky'>
                    <a href="/" className=" text-violet-600 font-bold text-3xl " >Listify </a>
        </div>

        <div className=' grid justify-center mt-16'>
            <div className='  w-[35vw] p-5 '>

                <div className='font-bold  p-2 mb-4'>
                  CHOOSE A CATEGORY
                </div>

                <Link to=''>
                <div className=' border border-black p-2 mb-4 text-[1vw] hover:bg-violet-200'>
                    <i className="ri-book-marked-line absolute "></i>
                    <i class="ri-arrow-right-s-line absolute right-[34vw]"></i>
                    <div className='px-10'>BOOKS</div>
                    
                </div>
                </Link>


                <Link to=''>
                <div className=' border border-black p-2 mb-4 text-[1vw] hover:bg-violet-200'>
                  <i className="ri-car-line absolute"></i>
                  <i class="ri-arrow-right-s-line absolute right-[34vw]"></i>
                  <div className='px-10'>VEHICLES</div>
                  
                </div>
                </Link>

                <Link to=''>
                <div className=' border border-black p-2 mb-4 text-[1vw] hover:bg-violet-200'>
                  <i className="ri-computer-line absolute"></i>
                  <i class="ri-arrow-right-s-line absolute right-[34vw]"></i>
                  <div className='px-10'>ELECTRONICS</div>
                  
                </div>
                </Link>

                <Link to=''>
                <div className=' border border-black p-2 mb-4 text-[1vw] hover:bg-violet-200'>
                  <i className="ri-sofa-line absolute"></i>
                  <i class="ri-arrow-right-s-line absolute right-[34vw]"></i>
                  <div className='px-10'>FURNITURE</div>
                </div>
                </Link>
                
                
              
                
            </div>
        </div>
      </div>
        
    </>
  )
}
