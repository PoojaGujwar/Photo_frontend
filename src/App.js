<<<<<<< HEAD
import {BrowserRouter,Router,Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import GoogleProfile from "./components/GoogleProfile";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import Images from "./components/Images";
import Albums from "./components/Albums";
import { useState } from "react";
import AddAlbum from "./feactures/AddAlbum";
import ShareAlbum from "./components/ShareAlbum";
import LayoutWithHeader from "./components/LayoutWithHeader";


function App() {
  const [userData,setUserInfo ] = useState(null)
  console.log(userData)
    return (
      <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/v2/profile/google" element={<GoogleProfile  userData={setUserInfo}/>}/>
      <Route element={<LayoutWithHeader/>}>
      <Route path="/images" element={<Images users={userData}/>}/>
      <Route path="/albums" element={<Albums users={userData}/>}/>
      <Route path="/create-album" element={<AddAlbum />}/>
      <Route path="/share-albums" element={<ShareAlbum users={userData}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
=======

import './App.css';
import {BrowserRouter,Routes,Route, createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home';
import GoogleProfile from './pages/GoogleProfile';
import Albums from './pages/Albums';
import Image from './pages/Image';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import UserContext from './context/UserContext';
import {useState} from 'react'

const router = createBrowserRouter([
  {
    path:"/",element:<Home/>
  },
  {
path:"/v2/profile/google",element:<GoogleProfile/>
  }
  , {
    path: '/v1/profile/google',
    element: <GoogleProfile />,
  },
  {
    path:"/albums",
    element:<Albums/>
  },
  {
    path:"/images",
    element:<Image/>
  }
])

function App() {
  const [user,setUser] = useState(null)
  if(user){
    <Albums/>
  }
  return (
    <>
    <UserContext.Provider value={{user,setUser}}>
    <RouterProvider router={router}/>
    </UserContext.Provider>
    </>
>>>>>>> 563016f0013d7b37c56339e3ab1508023d394a6d
  );
}

export default App;
