import Image1 from "../public/images/profile-pic.jpg";
import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const {user} = useMoralis();
    return (
        
        <div className="sticky  top-0 p-5 z-50 bg-black rounded-lg opacity-80 shadow-sm border-b-2  border-gray-500 
        text-blue-400">
            <div className=" grid  grid-cols-6 items-end lg:items-center" >
                <div className="relative h-52 w-44 mx-auto  hidden lg:inline-grid " >
                    
                </div>
                <div className="col-span-4 text-left lg:text-center " >
                    <div className="relative h-48 w-48 lg:mx-auto  border-black opacity-8 border-8 rounded-full ">
                        <Avatar logoutOnPress />
                    </div>
                    <h1 className="text-3xl" >Welcome to the Metaverse</h1>
                    
                    <h2 className="text-5xl font-bold truncate" >{user.getUsername()}</h2>
                    <h1>Powered by Moralis </h1>
                
                    <ChangeUsername/>
                </div>
            </div>
        </div>
    )
}

export default Header;
