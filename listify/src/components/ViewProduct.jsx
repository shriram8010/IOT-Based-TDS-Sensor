import Nav from "./nav"
import Footer from "./footer"


export default function ViewProduct(){
    return(
        <div>
           <Nav/>
        <div className="container flex mx-auto my-5 " style={{ width:"100%"}}>
         <div className="left flex-col " style={{ width:"70%"}}>
           <div className="relative border border-gray-300 rounded-md mr-5" style={{ height:"70vh"}}>
                 <img src="phone.jpeg"   className="absolute inset-0 w-full h-full object-cover rounded-md" style={{zIndex:-1, width:"100%", height:"100%",backgroundSize:"cover"}}/>
           </div>
           <div className="border border-gray-300 rounded-md my-5 mr-5" style={{height:200}}>
           <p className="text-pretty text-2xl ml-3 my-2 flex">Detail</p>
           <div>
            <p className="ml-3 my-2"> brand</p>
            <p className="ml-3 my-2">iphone</p>
           </div>
           
           </div>
           <div className="relative z-10 border border-gray-300 rounded-md  mt-5 mr-5" style={{height:500}}>
           <div className="ml-3 my-2">
          <p className="text-pretty text-2xl">Description</p>
          
           <p>256 gb available</p>

           <p>With bill </p>

           <p> 7 day replacement </p>

           <p>Compony warranty available </p>

           <p>New condition phones </p>

           <p>Courier changes applicable advance. </p>

           <p>Thousands of happy customers over india. </p>
           </div>
           </div>
        </div>
        <div className="right flex-col " style={{ width:"30%"}}>
           <div className="border border-gray-300 rounded-md ml-5" style={{height:300}}>
           <p className="text-pretty text-2xl ml-3 my-2 flex"> Price Detail</p>
           </div>
           <div className="border border-gray-300 rounded-md mt-5 ml-5" style={{height:300}}>
           <p className="text-pretty text-2xl ml-3 my-2 flex"> Seller Contact Detail</p>
           </div>
           <div className="border border-gray-300 rounded-md mt-5 ml-5" style={{height:300}}>
           <p className="text-pretty text-2xl ml-3 my-2 flex"> Posted Detail</p>
           </div>
         </div>
         </div>
           <Footer/>
        </div>
    )
}