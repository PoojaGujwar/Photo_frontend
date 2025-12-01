import axios from "axios"

export const googleApiAxios = axios.create({
    baseURL:"https://www.googleapis.com/oauth2/v2"
})
export const authServerAxios = axios.create({
<<<<<<< HEAD
    baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,withCredentials: true,
=======
    baseURL:`https://photo-backend-delta.vercel.app`,withCredentials: true,
>>>>>>> 563016f0013d7b37c56339e3ab1508023d394a6d
})