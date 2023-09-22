import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Author from './Author'
import { useEffect } from 'react'
import NotAllow from '../components/NotAllow.jsx'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import profile from '../redux/actions/me_authors'
const Profile = () => {

const[hasAuthor, setHasAuthor] = useState(false)
const [usuario, setUsuario] = useState({})
const { user, token } = useSelector((store) => store.profile)
const userId=user._id
const dispatch=useDispatch()

useEffect(()=>{
  getUser()
  if(!token.length>0){
    if (localStorage.length>0) {
         const tokenLocal=localStorage.getItem('token')
         const userLocal= JSON.parse(localStorage.getItem('user'))
         dispatch(profile({token: tokenLocal,findUser: userLocal}))
       }
     }
},[token])
let handleHasAuthor=(data)=>{

  if(data.userHasAuthor){
    setHasAuthor(true)
  }else{
    setHasAuthor(false)
  }
}
let getUser = () => {
  if(user._id){
  axios(`http://localhost:4000/authors/${userId}`)
   .then(res=> {
    
    let data = res.data.response.profile
    
    setUsuario(data)
    
    
    handleHasAuthor(data)
   }
    )
   .catch(error=>console.log(error)) }
}






  return (
    <>
    
    {hasAuthor? <Author 
    user = {usuario}
    
    /> : <NotAllow props={"Debes iniciar sesion antes de ingresar aqui"} />}

        
      

    </>
  )
}

export default Profile