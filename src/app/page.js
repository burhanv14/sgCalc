'use client'
import React, { useCallback } from 'react'
import Image from 'next/image'
import LNM from '/public/lnmiit.png'
import { Jacquard_24 } from 'next/font/google'
import { Jacquard_12_Charted } from 'next/font/google'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const jackquard = Jacquard_24({
  weight:'400',
  subsets:['latin'],
  display:'auto'
})

const jackquard2 = Jacquard_12_Charted({
  weight:'400',
  subsets:['latin'],
  display:'auto'
})

export default function Page() {
  const router = useRouter()

  const initialCredits = 0;
  const [inputs, setInputs] = useState([{ key: '', value: '' }]);

  const[totalCredits , setTotalCredits] = useState(initialCredits);
  const[numCredits , setnumCredits] = useState(initialCredits);

  const[showRes , setShowRes] = useState(false);

  // Function to handle change in input field
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...inputs];
    list[index][name] = value;
    setInputs(list);         
  };

  // Function to handle the addition of a new input field
  const handleAddClick = () => {
    setInputs([...inputs, { key: '', value: '' }]);
  };

  // Function to handle the removal of an input field
  const handleRemoveClick = index => {
    const list = [...inputs];
    list.splice(index, 1);
    setInputs(list);
  };

  // Function to handle the removal of an input field
  const handleResetClick = () => {
    setInputs([{key:' ',value:' '}]);
    setTotalCredits(0);
    setnumCredits(0);
    setShowRes(false);
    router.push('/');
  };

  
  // Function to handle form submission
  const handleSubmit = (event,inputs) => {
    event.preventDefault();
    let newTotalCredits = 0;
    let newNumCredits = 0;
    inputs.forEach(input => {
    // Handle form submission logic here
    if(input.key !== ' ')
    {
      newTotalCredits = newTotalCredits + input.key * 10;
    } 
    if(input.value === 'A')
    {
      newNumCredits = newNumCredits + 10*input.key;
    }
    if(input.value === 'AB')
    {
      newNumCredits = newNumCredits + 9*input.key;
    }
    if(input.value === 'B')
    {
      newNumCredits = newNumCredits + 8*input.key;
    }
    if(input.value === 'BC')
    {
      newNumCredits = newNumCredits + 7*input.key;
    }
    if(input.value === 'C')
    {
      newNumCredits = newNumCredits + 6*input.key;
    }
    if(input.value === 'CD')
    {
      newNumCredits = newNumCredits + 5*input.key;
    }
    if(input.value === 'D')
    {
      newNumCredits = newNumCredits + 4*input.key;
    }
    if(input.value === 'F')
    {
      newNumCredits = newNumCredits;
    }      
    });
    setTotalCredits(newTotalCredits) 
    setnumCredits(newNumCredits)
    setShowRes(true);
    console.log('Form submitted:', inputs);
    console.log(numCredits)
    console.log(totalCredits)
    console.log((numCredits/totalCredits)*10)
  };

  return (
    <div class="flex flex-col w-full">
      <div class="flex justify-between w-full sm:max-md:flex-wrap md:h-28 bg-zinc-800">
        <h1 class="flex-row w-1/2 text-white sm:max-md:text-sm text-5xl text-left md:p-6 p-3" >
          <span className={jackquard.className}>S.G.P.A. Abacus</span>
        </h1>
        <div class="rounded-l-md px-6 pt-6 bg-zinc-950  md:px-6 md:py-4">
          <Image class="mix-blend-lighten"
          src={LNM}
          width={80}
          height={80}
          quality={100}
          alt="LNMIIT"
          />
        </div>
     </div>
      <div class="min-h-screen h-auto bg-stone-800 pt-1 px-4 md:p-4 w-full">
       <form class="md:py-44 py-32">
        {inputs.map((input, i) => (
        <div key={i} class="md:pl-64 pl-4">
          <h1 class="text-4xl text-white text-opacity-100 py-2"><span className={jackquard2.className}>Subject : {i+1}</span></h1>
          <div class="flex flex-col md:flex-row gap-4">
          <div class="flex flex-row gap-4">
          <input
          name='key' 
          value={input.key}
          onChange={event => handleInputChange(i, event)}
          type="number" 
          min="1"
          class="bg-stone-500  text-gray-900 text-sm rounded-md block p-2 md:p-1" 
          placeholder="Subject Credit Points"/>
          <select  
          name='value' 
          value={input.value} 
          onChange={event => handleInputChange(i, event)}
          class="bg-stone-500  text-gray-900 text-sm rounded-md block py-2 md:p-2" 
          >
          <option value=" ">Grade</option>
          <option value="A">A</option>
          <option value="AB">AB</option>
          <option value="B">B</option>
          <option value="BC">BC</option>
          <option value="C">C</option>
          <option value="CD">CD</option>
          <option value="D">D</option>
          <option value="F">F</option>
          </select>
         </div>
          <div class="flex md:flex-row md:pt-2 md:pl-48 gap-3">
          {inputs.length - 1 === i && (
            <button type="button" class="text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 md:py-1 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => handleAddClick(i)}>Add</button>
          )}
          {inputs.length !== 1 && (
            <button type="button" class="text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5  me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 md:py-1 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => handleRemoveClick(i)}>Remove</button>
          )}
          </div>
        </div>
      </div>
    ))
    }
    <div class="pt-8 pl-4 md:pt-16 md:pl-64 flex gap-6 md:gap-10">
    <button onClick={event => handleSubmit(event,inputs)}>
    <a href="#_" class="relative px-5 py-2 font-medium text-white group">
    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out sm:transform translate-x-0 -skew-x-12 bg-black group-hover:bg-purple-700 group-hover:skew-x-12"></span>
    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-black group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
    <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
    <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
    <span class="relative">Submit</span>
    </a>
    </button>
    <a href="#_" class="relative px-5 py-2 font-medium text-white group" onClick={() => handleResetClick()}>
    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out sm:transform translate-x-0 -skew-x-12 bg-black group-hover:bg-purple-700 group-hover:skew-x-12"></span>
    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-black group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
    <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
    <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
    <span class="relative" onClick={() => handleResetClick()}>Reset</span>
    </a>
    </div>
    {totalCredits!=0 && showRes && <h1 class="text-5xl text-white text-opacity-100 py-10 pl-3 md:p-128 md:py-16"><span className={jackquard2.className}>Current SGPA : {(numCredits/totalCredits) * 10}</span></h1>}
    </form>
   </div>
  </div>
  )
}
