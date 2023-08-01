import React, { useEffect } from "react";
import {BsChevronDoubleDown} from 'react-icons/bs'
import htmlLogo from '../images/htmlLogo.png'
import jsLogo from '../images/jsLogo.png'
import cssLogo from '../images/cssLogo.png'
import reactLogo from '../images/reactLogo.png'
import flaskLogo from '../images/flaskLogo.png'
import sqlLogo from '../images/sqlLogo.png'
import sqlaLogo from '../images/sqlaLogo.png'
import firebaseLogo from '../images/firebaseLogo.png'
import tailwindLogo from '../images/tailwindLogo.png'

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
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <button onClick={()=>setScrollTo('about')} className="animate__animated animate-bounce">
                        <BsChevronDoubleDown size={40} opacity={0.3} />
                    </button>
                </div>
            </div>
            <div className="relative h-screen" id='about'>
                <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="text-6xl text-center font-righteous font-extrabold drop-shadow-xl whitespace-nowrap">
                        About Me
                    </div>
                    <div className="h-2 mt-5 mx-[43%] rounded-lg bg-purple-700" />
                    <div className="text-lg text-slate-600 font-bold my-10 text-center">
                        Here you'll discover an in-depth exploration of who I am <br/> and my diverse skillset in programming and technology
                    </div>
                    <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="grid grid-cols-2 w-[95vw] gap-32 mt-24 px-[8%]">
                            <div className="col-span-1">
                                <div className="text-5xl text-ce font-bebas-neue">
                                    Meet the Real Me!
                                </div>
                                <div className=" mt-5 text-md text-slate-600 h-[3.5rem] w-3/4">
                                    <div>
                                        I'm a <span className="font-extrabold">Full Stack Web Developer</span> looking to help build successful <span className="font-extrabold">Websites</span> and <span className="font-extrabold">Web Applications</span>. Please consider taking time to see what I've been working on in the <span className="font-extrabold">Projects</span> section!
                                    </div>
                                    <div className="mt-5">
                                        I was previously in the <span className="font-extrabold">Pharmacy</span> industry, having earned my <span className="font-extrabold">Doctorate of Pharmacy</span>. I have since set my sights onto the world of software engineering after completing a program at <span className="font-extrabold">Flatiron School</span>.
                                    </div>
                                    <div className="mt-5">
                                        I am eager to connect for <span className="font-extrabold">Job</span> opportunities, where I can contribute, collaborate, and learn. If you are interested or have any opportunities that align with my skillset, feel free to <span className="font-extrabold">contact</span> me or connect with me on <span className="underline underline-offset-3 font-extrabold">Linkedin</span>!
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="text-5xl text-center font-bebas-neue">
                                    My Skills
                                </div>
                                <div className="mt-5 text-xl text-slate-600 h-[3.5rem]">
                                    <div className="flex justify-between mx-16">
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={htmlLogo} alt="HTML logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={jsLogo} alt="HTML logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={cssLogo} alt="HTML logo" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={reactLogo} alt="HTML logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={htmlLogo} alt="HTML logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={sqlLogo} alt="HTML logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full shadow-2xl ">
                                            <img src={sqlaLogo} alt="HTML logo" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-5 mx-16">
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={flaskLogo} alt="HTML logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={firebaseLogo} alt="HTML logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={tailwindLogo} alt="HTML logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <button onClick={()=>setScrollTo('projects')} className="animate__animated animate-bounce">
                    <BsChevronDoubleDown size={40} opacity={0.3} />
                    </button>
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
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <button onClick={()=>setScrollTo('contact')} className="animate__animated animate-bounce">
                    <BsChevronDoubleDown size={40} opacity={0.3} />
                    </button>
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