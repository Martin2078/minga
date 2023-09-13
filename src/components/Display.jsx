import React from 'react'
import cruz from '/images/cruz.png'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
// import  useSelector  from 'react-redux'
const Display = ({open,setOpen}) => {

const {user,token}= useSelector((store)=>store.profile)
console.log(user);
console.log(token);

  return (
    <>
    <div className='bg-gradient-to-r from-[#4338CA] to-[#5E52F3] lg:w-1/4 min-[320px]:w-full h-screen fixed top-0 z-10 flex flex-col p-5 shadow-[0_0_20px_-5px] shadow-[#4338CA] gap-5'>
      <button className='flex justify-end' onClick={()=>setOpen(!open)}>
        <img className='w-8 p-2 ' src={cruz} alt=""/> 
      </button>
      <div className='text-white flex flex-col gap-5 p-5 border-b-2'>
        <Link to={"/"} className='flex justify-center py-2 px-3 rounded-full '>Home</Link>
        <Link to={"/Mangas"} className='flex justify-center py-2 px-3 rounded-full'>Mangas</Link>
      </div>
      <div className='text-white border-b-2 flex flex-col items-center px-3 pt-2 pb-4 gap-4'>
        <p className='font-bold'>Join Us</p>
        {token ? (<div className='flex gap-6 items-center'>
        <img src={user.photo} className='w-10 rounded-full' alt="" />
        <p className='text-base'>{user.email}</p>
        </div>)
        : (<div className='flex gap-6'>
        <Link to={"/signIn"} className=' py-2 px-4 rounded-full '>Log In</Link>
        <Link className=' py-2 px-3 rounded-full'>Sign Up</Link>
        <Link to={"/Me"} className='py-2 px-3 rounded-full '>Profile</Link>
        </div>)}
      </div>
    </div>

    </>
  )
}

export default Display