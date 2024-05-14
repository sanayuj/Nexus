import { adminInstance } from "../Axios/axiosinstance";

export const adminLogin=(values)=>{
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

export const approveApp=(appId)=>{
    return adminInstance.post(`/approveApp/${appId}`)
}