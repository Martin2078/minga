import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Index from '../pages/Index'
import Mangas from '../pages/Mangas'
import Layout from '../layouts/Layout'
import Page from '../pages/Page'
import Profile from '../pages/Profile'
import SignIn from '../pages/signIn'
import MangaDetail from '../components/MangaDetail'

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
                path:"/mangas",
                element: <Mangas/>,
            },
            {
                path:"/signIn",
                element: <SignIn/>
            },
            {
                path:"/mangas/:id",
                element: <MangaDetail/>
            },
            {
                path:"/mangas/:page",
                element: <Mangas/>,
            },
            {
                path:"/chapters",
                element: <MangaDetail/>
            },
            {
                path:"/chapter/:id/:page",
                element: <Page/>,
            },
            {
                path:"/Me",
                element: <Profile/>,
            } 
        ],
    },
])
 

export default router;
