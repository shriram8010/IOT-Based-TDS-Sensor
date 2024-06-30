import React from 'react'

export default function Login() {
  return (
    <div>
      <div className='px-5 py-2 fixed'>
                <a href="/" className=" text-violet-600 font-bold text-3xl " >Listify </a>
        </div>
    <div className=' grid h-screen place-items-center '>
        

            <div className=' w-96 h-96 border-2 border-violet-600 grid  place-items-center rounded-lg'>
                <div className='  p-10'>
                    <div className='  font-bold text-2xl text-center underline'>LOGIN</div><br />
                    <span className='  font-semibold'>E-mail :</span><br />
                    <input type="email" className=' rounded-xl w-[17rem] px-5 py-2 my-2 border-2 border-gray-500'  /><br />
                    <span className='  font-semibold'>Password :</span><br />
                    <input type="email" className=' rounded-xl w-[17rem] px-5 py-2 my-2 border-2 border-gray-500'  /><br /> <br />
                    <div className=' flex justify-center'>
                    <button type="submit" className='rounded-lg bg-violet-600 text-white px-4 py-2 mx-2 hover:bg-violet-800'>Submit</button>
                    <a href="/Registration"><button type="submit" className=' rounded-lg bg-violet-600 text-white px-4 py-2 mx-2 hover:bg-violet-800'>Registartion</button></a>
                    </div>
                </div>
                <div></div>
                
            </div>

    </div>
    </div>
  )
}
