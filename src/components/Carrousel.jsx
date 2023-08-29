import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Arrow from './Arrow'

const Carrousel = () => {
  const [count,setCount]=useState(0)
  const [categories,setCategories]=useState([])


  useEffect(()=>{
    axios("https://minga-back-vyqy.onrender.com/categories")
     .then(res=> {setCategories(res.data.categories); console.log(categories)})
     .catch(error=>console.log(error))  
}, [])
 
let next =() => (count!==categories.length-1) ? setCount(count + 1) : setCount(0);
  
let prev =()=> (count!==0) ?  setCount(count-1) : setCount(categories.length-1);
console.log(count)


  return (
    <div className='flex bg-[#4338CA] w-11/12 h-4/6 rounded justify-between items-center px-10'>
            <Arrow props="rotate-180" func={prev}/>
            <div className='flex gap-x-24 items-center h-full'>
              <img className='h-52 absolute left-36 bottom-14' src={categories[count]?.character_photo } alt="" />
              <img className='h-48 absolute left-1/3 bottom-14 ' src={categories[count]?.cover_photo} alt="" />

            <div className='w-1/4 text-justify absolute right-60'>
              <h2 className='text-2xl text-[#FFFFFF] font-sans["Roboto"]'>{categories[count]?.name}</h2>
              <p className='text-min-[320px] text-[#FFFFFF] font-["Roboto"] font leading-3'>{categories[count]?.description}</p>
            </div>

            </div>
          <Arrow props="" func={next}/>  
  </div>
  )
}

export default Carrousel