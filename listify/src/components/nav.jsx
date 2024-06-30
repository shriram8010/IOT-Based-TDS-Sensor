function Nav() {
  return (
    <>
        {/* navbar start's here */}
        <nav className='w-full h-14 flex justify-between bg-slate-300 items-center px-5 py-10 font-semibold sticky top-0 ' >

           <div className="flex items-center ">
            <div className=''>
                <a href="/" className=" text-violet-800 font-bold text-3xl" >Listify </a>
            </div>

            <div className="hidden md:block px-5 py-2 ">
                <select name="" id="" className="rounded-2xl px-2 py-2 w-[14vw] outline-none border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 flex">
                    <option value="">Select Location</option>
                    <option value="">Maharastar</option>
                    <option value="">Gujrat</option>
                    <option value="">Madhyapradesh</option>
                    <option value="">Goa</option>
                </select>
            </div>

            </div>
                

            <div className=" relative flex items-center  ">
                    <i class="ri-search-line w-5 h-5 absolute ml-2" ></i>
                <input type="text"  placeholder="Search" className="pr-3 pl-7 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 md:w-[40vw] outline-none" />
                
                
            </div>
            

            <div className="flex ">
                <div className="px-5">
                    <a href="/Login"><button className="rounded-full px-5 py-2 text-white bg-violet-700 hover:bg-violet-800 ">Login</button></a>
                </div>
                <div>
                    <a href="/Sell"><button className="rounded-full px-5 py-2 text-white bg-lime-500 hover:bg-lime-600" >Sell</button></a>
                </div>
            </div>
            
        </nav>

        {/* navbar end's here */}
        
    </>
  )
}

export default Nav;