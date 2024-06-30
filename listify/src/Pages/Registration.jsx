import React from 'react'

export default function Registration() {
  return (
    <div>
       <div className='px-5 py-2 fixed'>
                <a href="/" className=" text-violet-600 font-bold text-3xl " >Listify </a>
        </div>
        <div className=' grid justify-center pt-10 '>
            <div className='border-2 rounded-md border-violet-600 p-10'>
            <div className='pb-5 text-center font-bold text-2xl underline'>Registration</div>
            <div className='flex pb-5'>
                <div className=' pr-2'>
                    <span className=' font-semibold'>First Name :</span><br />
                    <input type="text" className='border-2 border-gray-400 px-4 py-1 rounded-lg' /><br />
                </div>
                <div className='pl-2'>
                    <span className='font-semibold'>Last Name :</span><br />
                    <input type="text" className='border-2 border-gray-400 px-4 py-1 rounded-lg' /><br />
                </div>
                
            </div>
        
        <div className='pb-5'>
            <span className='font-semibold'>Email :</span> <br />
            <input type="email" className='border-2 border-gray-400 w-[28rem] px-4 py-1 rounded-lg' /> <br />
        </div>

        <div className='pb-5'>
            <span className='font-semibold'>Password :</span> <br />
            <input type="password" className='border-2 border-gray-400 w-[28rem] px-4 py-1 rounded-lg'/> <br />
        </div>
        
        <div className='pb-5'>
            <span className='font-semibold'>Adderss :</span> <br />
            <textarea name="" className='border-2 border-gray-400 w-[28rem] px-4 py-1 rounded-lg' id=""></textarea><br />
        </div>

        <div className='pb-10'>
            <span className='font-semibold'>Phone No. :</span> <br />
            <input type="text" className='border-2 border-gray-400 w-[28rem] px-4 py-1 rounded-lg'/> <br />
        </div>
        
        <div className='text-center font-semibold'>
            <button className=' rounded-lg bg-indigo-600 text-white px-4 py-2'>Submit</button>
        </div>

        </div>

        </div>
    </div>
  )
}
