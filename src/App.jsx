import React, { useEffect, useState } from 'react';
import {Link} from "react-scroll";
import asbg2 from "./assets/aestheticbg2.jpg";
import trophy from "./assets/trophy.png";
import spotify from "./assets/spotify.png";
import youtube from "./assets/youtube.png"
import panda from "./assets/panda.png"
import {FaHandPeace} from "react-icons/fa";
import quote from "./assets/quotes.png";
import coffee from "./assets/coffee.png";
import {BsSuitHeart , BsSuitHeartFill, BsFacebook, BsInstagram, BsTwitter, BsGithub, BsFillCaretRightFill} from "react-icons/bs";
import {GoArrowDown} from "react-icons/go";
import Confetti from "react-confetti";


function App() {
    const [tasks, settasks] = useState([
        {
            id: 0,
            task: "Drink Lots of Water",
            isDone: false
        },
        {
            id: 1,
            task: "You are the Halley's Commet.",
            isDone: false
        },
        {
            id: 2,
            task: "Dont Let the Sad waves bother you.",
            isDone: false
        },
        {
            id: 3,
            task: "Remember to read stories when feel sad :(",
            isDone: false
        },
        {
            id: 4,
            task: "Kindness always comes back.",
            isDone: false
        }, 
        {
            id: 5,
            task: "You are the Best.",
            isDone: false
        },
        {
            id: 6,
            task: "In a world of pencils you are a crayon.",
            isDone: false
        },
        {
            id: 7,
            task: "Be You. Do You. For You.",
            isDone: false
        },
    ]); 

    

    const changeHeart = ({id}) => {
        const changedArray = tasks.map(item =>{
            if(item.id === id) {
                return {
                    ...item,
                    isDone: !item.isDone
                }
            }
            else{
                return {
                    ...item
                }
            }
        } );
        settasks(changedArray);
    }
    const [totalTasks, setTotalTasks] = useState(0);
    useEffect(()=> {
        var total = 0;
        tasks.forEach(item => {
            if(item.isDone === true) { total +=1; }
        })
        setTotalTasks(total);
        
    },[tasks])

  return (
    <div 
    className='min-h-screen  w-screen flex flex-col items-center justify-center'>
    { totalTasks === 8 && <Confetti className='w-full h-auto' />}
    <img src={asbg2} alt="asbg" className='absolute top-0 left-0 overflow-clip w-screen  -z-10'/>
    <Link to='quote' smooth duration={500} offset={-20}>
    <button className='absolute top-5 right-5 animate-bounce hover:bg-blue-300 bg-blue-400 text-xl text-slate-900 rounded-xl flex flex-col p-3 items-center justify-center'>  <GoArrowDown size={30}  /> </button>
    </Link>
    
    <div className='mt-5 max-w-screen-lg bg-[#382432] flex flex-col items-center space-y-4 py-5 px-12 rounded-lg justify-start'>
        <div className='w-full h-20 bg-pink-900 text-4xl flex flex-row items-center justify-evenly capitalize text-rose-100 relative'>
            {totalTasks===8 && <img src={trophy}  alt="trophy" className='h-3/4'/>}
            <p> To Do</p>
            {totalTasks===8 && <img src={trophy}  alt="trophy" className='h-3/4'/>}
        </div>
        {tasks.map((item) => (
            <div className=' text-2xl text-white px-5 w-full flex flex-row items-center justify-start space-x-2'>
                {item.isDone ? <BsSuitHeartFill className='text-blue-500 animate-pulse hover:animate-ping' onClick={()=>{changeHeart(item)}}/> : <BsSuitHeart className='text-rose-100 hover:animate-pulse' onClick={()=>{changeHeart(item)}}/> }
                <p>{item.task}</p>
            </div>
        ))}

                
    </div>
    <div className=' p-2 absolute top-5 -left-[13.5%] hover:left-5 duration-500 bg-[#573f50] h-20 flex flex-row items-center justify-center space-x-3'>
            <img onClick={()=>{window.open("https://youtu.be/T5-vgyEbtPU","_blank")}} src={youtube} alt= 'Youtube' className='h-1/2 hover:relative hover:scale-125 duration-200' />
            <img onClick={()=>{window.open("https://open.spotify.com/track/3vqJY3pVELLIxqXXyI08yr?si=60b8a7e325594fbe","_blank")}} src={spotify} alt='spotify' className='h-1/2 hover:relative hover:scale-125 duration-200'  />
            <img onClick={()=>{window.open("https://www.worldwildlife.org/species/giant-panda","_blank")}} src={panda} alt='panda' className='h-1/2 hover:relative hover:scale-125 duration-200'  />
            <FaHandPeace onClick={()=>{window.open("https://www.brainyquote.com/quote_of_the_day","_blank")}} size={20} className=' text-amber-500 h-1/2 hover:relative hover:scale-125 duration-200'  />
            <BsFillCaretRightFill size={20} className="text-gray-100 " />
    </div>
    <div id='quote' className='max-h-screen mt-36 max-w-screen-lg bg-gradient-to-br from-purple-400 to-rose-300 flex flex-col items-center space-y-4 p-5 rounded-lg justify-start'>
        <img src={quote} alt="quote" className='h-full w-1/2' />
    </div>
    <div className='relative mt-36  w-full bg-gray-500 flex flex-col items-center space-y-4 p-5 justify-start'>
        <img src={coffee} alt="coffee" className='absolute left-10 top-3 h-3/4' />
        <p className='text-3xl text-gray-300'>
            This App is a work in progress, It will be updated as per your needs.
        </p>
        <div className='text-gray-200 flex flex-row  space-x-3'>
            <p>All Rights Reserved</p>
            <p>Piyu Technologies Pvt. Ltd.</p>
        </div>
        <div className='text-gray-200 flex flex-row  space-x-3 items-center'>
            
            <BsFacebook size={25} className="hover:text-white duration-300" /> <BsInstagram size={25} className="hover:text-white duration-300" />< BsTwitter size={25} className="hover:text-white duration-300" />< BsGithub size={25} className="hover:text-white duration-300" />
        </div>
        
        
    </div>
    </div>
  )
}

export default App