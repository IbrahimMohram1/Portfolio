'use client'
import Image from "next/image"
import ImageNav from '../assets/person.6f540429.png'
import { MdEmail } from "react-icons/md"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { DiGithub } from "react-icons/di"
function Nav (){
return(
    <>
    
    <main className="   box border border-zinc-500 rounded-2xl p-5  ">
        <div className=" flex lg:flex-col flex-row lg:justify-around items-center m-2 "> 
            <div className="lg:w-1/2 w-36 bg-1 rounded-2xl mr-5 "><Image alt="" src={ImageNav}></Image></div>
            <div className="">
          <div className="my-2"> 
             <h1>Maryem Mostafa</h1></div>
            <div className="bg-1 rounded-md p-2 text-[12px] text-center">
                <p>Web Developer</p>
            </div>
            </div>
          
        </div>
       
        <div className="lg:flex-col max-w-full hidden lg:flex ">
        <hr></hr>
 
            <div className="flex my-2  ">
                <div className="m-2 box text-yellow-300  rounded-md  p-3 text-center">
                    <MdEmail/>
                    </div>
                <div className="">
                    <span className="lg:text-[11px] text-gray-300">Email</span>
                <p className="lg:text-[12px] text-[12px]">maryem.mostafa00@gmail.com</p>
                </div>
            </div>
            <div className="flex my-2  ">
                <div className="m-2 box text-yellow-300  rounded-md  p-3 text-center">
                    <MdEmail/>
                    </div>
                <div className="">
                    <span className="lg:text-[11px] text-gray-300">Email</span>
                <p className="lg:text-[12px] text-[12px]">maryem.mostafa00@gmail.com</p>
                </div>
            </div>
            <div className="flex my-2  ">
                <div className="m-2 box text-yellow-300  rounded-md  p-3 text-center">
                    <MdEmail/>
                    </div>
                <div className="">
                    <span className="lg:text-[11px] text-gray-300">Email</span>
                <p className="lg:text-[12px] text-[12px]">maryem.mostafa00@gmail.com</p>
                </div>
            </div>
            <div className="flex my-2  ">
                <div className="m-2 box text-yellow-300  rounded-md  p-3 text-center">
                    <MdEmail/>
                    </div>
                <div className="">
                    <span className="lg:text-[11px] text-gray-300">Email</span>
                <p className="lg:text-[12px] text-[12px]">maryem.mostafa00@gmail.com</p>
                </div>
            </div>
            <div className="flex m-2 lg:justify-center gap-5 lg:items-center">
                <FaFacebook></FaFacebook>
        <FaTwitter/>
        <FaLinkedin/>
        <DiGithub/>
        </div>
        </div>
        
    </main>
    </>
)
}
export default Nav