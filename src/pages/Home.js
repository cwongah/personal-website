import React, { useEffect } from "react";
import {BsChevronDoubleDown} from 'react-icons/bs'

function Home({scrollTo, setScrollTo}){

    useEffect(()=>{
        const scrollElement = document.getElementById(scrollTo)
        if(scrollElement){
            scrollElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
        setScrollTo('')
    }, [scrollTo])

    return (
        <div>
            <div className="relative h-screen" id="home">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-6xl font-righteous drop-shadow-xl whitespace-nowrap animate__animated animate__zoomIn">
                        HI, I'M CHRISTOPHER WONG
                    </div>
                    <div className="text-xl font-bold mt-10 whitespace-nowrap">
                        A Fullstack Web Developer: Unlocking Possibilities, One Line of Code at a Time
                    </div>
                    <div className="mt-16">
                    <button onClick={()=>setScrollTo('projects')} className="font-bebas-neue text-3xl drop-shadow-lg py-3 px-20 rounded-md bg-purple-700/60 shadow-lg shadow-purple-500/70 text-white">
                        Projects
                    </button>
                    </div>
                </div>
                <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                    <button onClick={()=>setScrollTo('about')} className="animate__animated animate-bounce">
                    <BsChevronDoubleDown size={40} opacity={0.3} />
                    </button>
                </div>
            </div>
            <div className="relative h-screen" id='about'>
                <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="mt-[10%] text-6xl text-center font-righteous font-extrabold drop-shadow-xl whitespace-nowrap">
                        About Me
                    </div>
                    <div className="h-2 mt-5 mx-[48%] rounded-lg bg-purple-700" />
                    <div className="text-lg font-bold my-10 text-center">
                        Here you'll discover an in-depth exploration of who I am <br/> and my diverse skillset in programming and technology
                    </div>
                    <div className="grid grid-cols-2 w-[95vw] gap-32 mt-10 px-[8%]">
                        <div className="col-span-1">
                            <div className="text-5xl font-bebas-neue">
                                Meet the Real Me!
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-5xl font-bebas-neue">
                                My Skills
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-screen" id="projects">
                <div className=" h-screen bg-white bg-opacity-20">
                    <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="mt-[10%] text-6xl text-center font-righteous font-extrabold drop-shadow-xl whitespace-nowrap">
                            Projects
                        </div>
                        <div className="h-2 mt-5 mx-[48%] rounded-lg bg-purple-700" />
                        <div className="text-lg font-bold mt-10 text-center">
                            Placeholder
                        </div>
                        <div className="grid grid-cols-2 w-[95vw] gap-32 mt-10 px-[8%]">
                            <div className="col-span-1">
                                <div className="text-5xl font-bebas-neue">
                                    Placeholder
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="text-5xl font-bebas-neue">
                                    Placeholder
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-screen" id="contact">
                <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="mt-[10%] text-6xl text-center font-righteous font-extrabold drop-shadow-xl whitespace-nowrap">
                        Contacts
                    </div>
                    <div className="h-2 mt-5 mx-[48%] rounded-lg bg-purple-700" />
                    <div className="text-lg font-bold mt-10 text-center">
                        Placeholder
                    </div>
                    <div className="grid grid-cols-2 w-[95vw] gap-32 mt-10 px-[8%]">
                        <div className="col-span-1">
                            <div className="text-5xl font-bebas-neue">
                                Placeholder
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-5xl font-bebas-neue">
                                Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
      
}

export default Home