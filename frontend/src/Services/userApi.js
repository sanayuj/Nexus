import { userInstance } from "../Axios/axiosinstance";

export const userRegister=(values)=>{
    return userInstance.post("/register",{...values})
}

export const login=(values)=>{
    return userInstance.post("/login",{...values})
}

export const appUpload=(values,user)=>{
    return userInstance.post(`/upload/${user}`,{...values},{headers:{"content-Type":"multipart/form-data"}})
}

export const sendFeedback=(feedStatus,category,comments,userId)=>{
    console.log(feedStatus,category,comments,userId);
return userInstance.post(`/feedback/${userId}`,{feedStatus,category,comments})
}

export const updateUserProfile=(values,userId)=>{
    return userInstance.post(`/profileUpdation/${userId}`,{...values},{headers:{"content-Type":"multipart/form-data"}})
}

export const appAddtoProfile = (userId, appId) => {
    return userInstance.post('/addApptoUser',{userId,appId});
  }
  


//GET METHODS

export const userHeader=()=>{
    return userInstance.get("/header")
}

export const getUploadedApps=()=>{
    return userInstance.get("/showApp")
}

export const getUtilityApps=()=>{
    return userInstance.get("/getUtilityApp")
}

export const getGameApps=()=>{
    return userInstance.get("/getGamesApp")
}

export const getUserDetails=()=>{
    return userInstance.get("/header")
}

export const getUserInstalledApps=()=>{
    return userInstance.get("/userInstalledApp")
}

export const getSelectedAppsDetails=(appId)=>{
    return userInstance.get(`/selectedAppDetails/${appId}`)
}