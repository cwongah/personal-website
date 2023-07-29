import React from "react";

function Navbar({setScrollTo}){
    return(
        <div className="bg-white p-4 flex justify-between items-center shadow-lg font-bebas-neue fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between">
                <div className="bg-purple-500 rounded-3xl w-[50px] h-[50px] ml-5 shadow-lg">
                     
                </div>
                <div className="text-4xl font-extrabold ml-5 drop-shadow-lg">
                    Christopher Wong
                </div>
            </div>
            <div className="flex mr-10 text-2xl font-bold">
                <button className="mx-5 drop-shadow-lg" onClick={()=>setScrollTo('home')}>
                    Home
                </button>
                <button className="mx-5 drop-shadow-lg" onClick={()=>setScrollTo('about')}>
                    About
                </button>
                <button className="mx-5 drop-shadow-lg" onClick={()=>setScrollTo('projects')}>
                    Projects
                </button>
                <button className="mx-5 drop-shadow-lg" onClick={()=>setScrollTo('contact')}>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar