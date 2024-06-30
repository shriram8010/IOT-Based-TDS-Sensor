import { Link } from "react-router-dom";
import Nav from "../components/nav";

export default function ViewUserProfile(){
    return (
        <div>
        <Nav />

        <div className="container flex mx-5 my-10 " > 
            <div className="left grid" style={{width:"30%"}}>
            <h1>Edit Profile</h1>  
                <Link to='./ProfilePicture'>Profile Picture</Link>
                <Link to='./Profile'>View Profile</Link>
            </div>
    <div className="right " style={{width:"70%"}}>
            <span className="text-2xl my-10">Edit Profile</span>
                <hr></hr>
                <div className=" grid">
                    <h4 className="text-2xl py-3">Basic Information</h4>
                    <input type="text" placeholder="name " className=" border border-gray-300 rounded-md px-3 py-2"></input>
                    <textarea placeholder="about me" className="my-5  border border-gray-300 rounded-md px-3 py-2"></textarea>
                </div>
                <hr></hr>
                <div className=" grid">
                <h4 className="text-2xl my-3">Contact information</h4>
                <input  type="text"  placeholder="Phone Number" className="border border-gray-300 rounded-md px-3 py-2"></input>
                <input  type="text"  placeholder="Email" className="mt-5 my-5 border border-gray-300 rounded-md px-3 py-2"></input>
                </div>
                <hr></hr>
                <div className=" grid">
                    <h4 className="text-2xl my-3 my-10 ">Additional Information</h4>
                </div>
                <hr></hr>
                <div className=" grid">
                    <input type="button" value="Save Changes" className="border border-gray-300 rounded-md px-3 py-2 my-3 bg-green-600"/>
                </div>
            </div>
        </div>

        </div>

    )
}