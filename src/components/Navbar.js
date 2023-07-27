import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate()
    return(
        <div className="bg-white bg-opa p-4 flex justify-between items-center shadow-lg font-bebas-neue">
            <div className="flex items-center justify-between">
                <div className="bg-teal-500 rounded-3xl w-[50px] h-[50px] ml-5 shadow-lg">
                     
                </div>
                <div className="text-4xl font-extrabold ml-5 drop-shadow-lg">
                    Christopher Wong
                </div>
            </div>
            <div className="flex mr-10 text-2xl font-bold">
                <button className="mx-5 drop-shadow-lg" onClick={()=>navigate('/')}>
                    Home
                </button>
                <button className="mx-5 drop-shadow-lg" onClick={()=>navigate('/about')}>
                    About
                </button>
                <button className="mx-5 drop-shadow-lg" onClick={()=>navigate('/projects')}>
                    Projects
                </button>
                <button className="mx-5 drop-shadow-lg" onClick={()=>navigate('/contact')}>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar