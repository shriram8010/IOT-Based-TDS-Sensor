import React from 'react'

export default function Product_with_filter() {
  return (
    <div>
        <div className=' px-3 py-5  grid gap-3 grid-cols-1 md:grid-cols-12'>
            {/* filter starts here */}
            <div className='w-full h-full md:col-span-3  bg-indigo-400'></div>
            {/* filter ends here  */}

            {/* content start here */}
            <div className='w-full h-full p-3 gap-3 grid-cols-1 place-items-center md:grid-cols-6 grid md:col-span-9  bg-indigo-800'>

                <div className='w-60 h-60  md:col-span-2  bg-indigo-300'></div>
                <div className='w-60 h-60  md:col-span-2  bg-indigo-300'></div>
                <div className='w-60 h-60  md:col-span-2  bg-indigo-300'></div>
                <div className='w-60 h-60  md:col-span-2  bg-indigo-300'></div>
                <div className='w-60 h-60  md:col-span-2  bg-indigo-300'></div>
                <div className='w-60 h-60  md:col-span-2  bg-indigo-300'></div>
                <div className='w-60 h-60  md:col-span-2  bg-indigo-300'></div>
                <div className='w-60 h-60  md:col-span-2  bg-indigo-300'></div>
                <div className='w-60 h-60  md:col-span-2  bg-indigo-300'></div>

            </div>
            {/* content start here */}
        </div>
    </div>
  )
}
