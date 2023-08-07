import React from "react";
import profpic from '../images/profpic.png'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

function Navbar({setScrollTo}){
    return(
        <div className="bg-white p-4 flex justify-between items-center shadow-lg font-bebas-neue fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between">
                <div className="bg-purple-500 rounded-3xl w-[50px] h-[50px] ml-5 shadow-lg overflow-clip">
                     <img src={profpic} alt="It's me Chris Wong"/>
                </div>
                <div className="text-2xl font-extrabold ml-5 drop-shadow-lg">
                    Christopher Wong
                </div>
                <a href="https://www.linkedin.com/in/christopher-ho-ken-wong/" className=" flex items-center ml-5 mr-3 mb-1 hover:text-purple-700">
                    <AiFillLinkedin size={27} />
                </a>
                <a href="https://www.github.com/cwongah" className="flex items-center mb-1 hover:text-purple-700">
                    <AiFillGithub size={28} />
                </a>
            </div>
            <div className="flex mr-10 text-2xl font-bold">
                <button className="mx-5 drop-shadow-lg hover:text-purple-700" onClick={()=>setScrollTo('home')}>
                    Home
                </button>
                <button className="mx-5 drop-shadow-lg hover:text-purple-700" onClick={()=>setScrollTo('about')}>
                    About
                </button>
                <button className="mx-5 drop-shadow-lg hover:text-purple-700" onClick={()=>setScrollTo('projects')}>
                    Projects
                </button>
                <button className="mx-5 drop-shadow-lg hover:text-purple-700" onClick={()=>setScrollTo('contact')}>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar