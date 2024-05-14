import { adminInstance } from "../Axios/axiosinstance";

export const adminLogin=(values)=>{
    console.log(values,"~~~~~~~");
    return adminInstance.post("/adminLogin",{...values})
}

export const userBlock=(userId)=>{
    return adminInstance.post(`/userblock/${userId}`)
}

export const userlist=()=>{
    return adminInstance.get("/userlist")
}

export const adminHeader=()=>{
    return adminInstance.get("/adminHeader")
}

export const totalApplications=()=>{
    return adminInstance.get("/allApp")
}