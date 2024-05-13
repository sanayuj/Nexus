import { adminInstance } from "../Axios/axiosinstance";

export const userlist=()=>{
    return adminInstance.get("/userlist")
}

export const userBlock=(userId)=>{
    return adminInstance.post(`/userblock/${userId}`)
}