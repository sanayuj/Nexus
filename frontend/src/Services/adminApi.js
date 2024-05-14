import { adminInstance } from "../Axios/axiosinstance";

export const adminLogin=(values)=>{
    return adminInstance.post("/adminLogin",{...values})
}

export const userBlock=(userId)=>{
    return adminInstance.post(`/userblock/${userId}`)
}

export const approveApp=(appId)=>{
    return adminInstance.post(`/approveApp/${appId}`)
}

export const blockApp=(appId)=>{
    return adminInstance.post(`/blockApp/${appId}`)
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

export const viewCompliant=()=>{
    return adminInstance.get("/viewComplaint")
}

