import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Index from '../pages/Index'
import Mangas from '../pages/Mangas'
import Layout from '../layouts/Layout'
import Profile from '../pages/Profile'
const router=createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path:"/",
                element: <Index/>,
            },
            {
                path:"/Mangas",
                element: <Mangas/>,
            }, 
            {
                path:"/Me",
                element: <Profile/>,
            } 
        ],
    },
])
 

export default router;
