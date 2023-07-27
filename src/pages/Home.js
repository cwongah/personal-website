import React from "react";

function Home(){
    return(
        <div>
            <div className="h-screen flex items-center justify-center">
                <div>
                    <div className="text-6xl font-audiowide font-extrabold drop-shadow-xl">
                        HI, I'M CHRISTOPHER WONG
                    </div>
                    <div className=" text-2xl font-bold mt-10 flex items-center justify-center">
                        A Fullstack Web Developer: Unlocking Possibilities, One Line of Code at a Time
                    </div>
                    <div className="mt-10 text-2xl flex items-center justify-center">
                        <button className="p-3 rounded-lg bg-blue-600 bg-opacity-80 text-white">
                            Projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home