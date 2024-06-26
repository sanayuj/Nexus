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

export const sendComments=(value,feedId,userId)=>{
    return adminInstance.post(`/sendComments/${feedId}`,{value,userId})
}

export const sendNotification=(data)=>{
    return adminInstance.post("/sendNotification",{...data})
}


//GET METHODS


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

export const fetchAllGames=()=>{
    return adminInstance.get("/allGameApp")
}

export const fetchAllUtilityApps=()=>{
    return adminInstance.get("/allUtilityApps")
}

export const fetchAllWindowsApps=()=>{
    return adminInstance.get("/allwindowsApps")
}

export const fetchAllLinuxApps=()=>{
    return adminInstance.get("/allLinuxApps")
}

export const fetchAllMacApps=()=>{
    return adminInstance.get("/allMacsApps")
}

export const fetchUserFeedback=()=>{
    return adminInstance.get("/fetchUserFeedback")
}

export const fetchFeedDetails=(id)=>{
    return adminInstance.get(`/fetchFeedback/${id}`)
}

export const getPieChartDetails=()=>{
    return adminInstance.get("/getPieChartDetails")
}

export const getBarChartDetails=()=>{
    return adminInstance.get("/getbarChartDetails")
}