import React, { useContext } from "react";
//import Cookies from "js-cookie";
import axios from "axios";
import { useState, useEffect} from "react";
import { useNavigate ,useLocation} from "react-router-dom";
// import { authServerAxios, googleApiAxios } from "../lib/axios.lib";
import {authServerAxios,googleApiAxios} from "../lib/axios.lib"
import UserContext from "../context/UserContext";
import Cookies from "js-cookie"

export default function GoogleProfile() {
  const [userinfo,setUserInfo] = useState()
  const location = useLocation()
  console.log(location ,"LOCATION")
  const navigate = useNavigate()
  const {user,setUser} = useContext(UserContext)
  const token = Cookies.get("access_token")||''
  console.log(token)
console.log(googleApiAxios)
  
  useEffect(() => {
    (async () => {
       if (token) {
        const response = await googleApiAxios.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(response)
       }else if(location.pathname.includes('v2')) {
        try {
          const {data} = await axios.get('https://photo-backend-delta.vercel.app/user/profile/google',{withCredentials: true});
          setUser(data)
          console.log(data)
          navigate(`/albums?user=${userinfo}`)
        } catch (error) {
          if (error.status === 403 || error.status === 500) {
            navigate("/")
          }
        }
      } else {
       navigate("/")
      }
    })();
  }, [location.pathname]);

  return (
    <header
       style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: "3rem 1rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontSize: "2rem" }}>🎉 Welcome to Simbapix App 🎉</h2>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        Explore your albums and enjoy your moments!
      </p>
    </header>
    
  );
}
