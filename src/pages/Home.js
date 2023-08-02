import React, { useEffect, useState } from "react";
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
import pythonLogo from '../images/pythonLogo.png'
import taskHarmony from '../images/taskHarmony.png'
import questKeeper from '../images/questKeeper.png'
import Carousel from "../components/Carousel";

function Home({scrollTo, setScrollTo}){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const slides = [
        {
            image: taskHarmony,
            title: 'TaskHarmony',
            text: 'A task managing app meant to keep daily busy-work in balance'
        },
        {
            image: questKeeper,
            title: 'QuestKeeper',
            text: "A Dungeons and Dragons 5th edition resource tool, complete with everything in the Player's Handbook as well as character and encounter creations"
        }
    ]

    function handleSubmit(e){
        e.preventDefault()
        setName('')
        setEmail('')
        setMessage('')
    }

    useEffect(()=>{
        const scrollElement = document.getElementById(scrollTo)
        if(scrollElement){
            scrollElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
        setScrollTo('')
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <button onClick={()=>setScrollTo('projects')} className="font-bebas-neue text-3xl drop-shadow-lg py-3 px-20 rounded-md bg-purple-700 shadow-lg shadow-purple-500/70 text-white hover:bg-purple-800">
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
                    <div className="h-2 w-16 mt-5 mx-[45%] rounded-lg bg-purple-700" />
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
                                        I am eager to connect for <span className="font-extrabold">Job</span> opportunities, where I can contribute, collaborate, and learn. If you are interested or have any opportunities that align with my skillset, feel free to <span className="font-extrabold "><button className="underline underline-offset-2" onClick={()=>setScrollTo('contact')}>contact</button></span> me or connect with me on <a href="https://www.linkedin.com/in/christopher-ho-ken-wong/" className="underline underline-offset-3 font-extrabold text-purple-700 hover:text-purple-800">Linkedin</a>!
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
                                            <img src={htmlLogo} className="drop-shadow-xl" alt="HTML logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={jsLogo} className="drop-shadow-xl" alt="JS logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={cssLogo} className="drop-shadow-xl" alt="CSS logo" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={reactLogo} className="drop-shadow-xl" alt="React logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={pythonLogo} className="drop-shadow-xl" alt="Python logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={sqlLogo} className="drop-shadow-xl" alt="SQL logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full shadow-2xl ">
                                            <img src={sqlaLogo} className="drop-shadow-xl" alt="SQLA logo" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-5 mx-16">
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={flaskLogo} className="drop-shadow-xl" alt="Flask logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={firebaseLogo} className="drop-shadow-xl" alt="Firebase logo" />
                                        </div>
                                        <div className=" bg-white h-[110px] w-[110px] rounded-full p-3 shadow-2xl ">
                                            <img src={tailwindLogo} className="drop-shadow-xl" alt="Firebase logo" />
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
                <div className="h-screen flex items-center justify-center bg-white bg-opacity-20">
                    <div className="text-center">
                        <div className=" text-6xl font-righteous font-extrabold drop-shadow-xl whitespace-nowrap">
                            Projects
                        </div>
                        <div className="h-2 w-16 mt-10 mx-auto rounded-lg bg-purple-700" />
                        <Carousel slides={slides} />
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <button onClick={()=>setScrollTo('contact')} className="animate__animated animate-bounce">
                        <BsChevronDoubleDown size={40} opacity={0.3} />
                    </button>
                </div>
            </div>
            <div className="relative h-screen bg-[url('./backgroundForPw.png')] bg-cover bg-center" id="contact">
                <div className="bg-purple-500 bg-opacity-[32%] min-h-screen">
                    <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="mt-[10%] text-6xl text-center font-righteous font-extrabold drop-shadow-xl whitespace-nowrap">
                            Contact
                        </div>
                        <div className="h-2 w-16 mt-5 mx-[48%] rounded-lg bg-purple-700" />
                        <div className="text-lg font-bold mt-10 text-slate-600 text-center">
                            Feel free to contact me at any time and I will get back to you as soon as possible!
                        </div>
                        <div className="bg-white rounded-lg px-8 py-6 absolute top-[240%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vw] ">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-10">
                                    <div className="text-slate-600 text-2xl font-bebas-neue">
                                        Name
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Your Name"
                                        className="bg-slate-300 bg-opacity-60 w-full font-righteous p-3 rounded-lg"
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                        />
                                </div>
                                <div className="mb-10">
                                    <div className="text-slate-600 text-2xl font-bebas-neue">
                                        Email
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Your Email"
                                        className="bg-slate-300 bg-opacity-60 w-full font-righteous p-3 rounded-lg"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        />
                                </div>
                                <div className="mb-5">
                                    <div className="text-slate-600 text-2xl font-bebas-neue">
                                        Message
                                    </div>
                                    <textarea 
                                        type="text" 
                                        placeholder="Enter Your Message"
                                        className="bg-slate-300 bg-opacity-60 w-full h-[15vh] font-righteous p-3 rounded-lg"
                                        value={message}
                                        onChange={(e)=>setMessage(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="bg-purple-700 hover:bg-purple-800 text-white text-2xl font-bebas-neue px-14 py-2 rounded-lg"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
      
}

export default Home