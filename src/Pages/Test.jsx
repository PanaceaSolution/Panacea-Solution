import React, { useState } from 'react'
import ExpandingCards from '../Components/ExpandingCards';

const Test = () => {
    const [card1,setCard1]=useState(false);
    const handleHover1=()=>{
        setCard1((state)=>!state);
    }
    const FirstCardActive =()=>{
        return(
            <div onMouseLeave={handleHover1} className='bg-white h-[40%] w-[30%] rounded-lg p-2 cursor-pointer transition-all duration-300 ease-in-out'>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, accusamus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, possimus!</p>
            </div>
        )
    }
    const FirstCard =()=>{
        return(
            <div onMouseOver={handleHover1} className= {`bg-white h-[40%] w-[10%] rounded-lg p-2 cursor-pointer`}>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iusto?</p>
            </div>
        )
    }
  return (
    <div className='flex flex-col justify-center items-center h-[50vh] w-[100vw] gap-6 text-white cursor-default bg-black'>
       <ExpandingCards content={"lorem ipsum"} contentActive={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, qui?"}/>
        </div>
  )
}
export default Test