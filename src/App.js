
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
  );
}

export default App;
