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



//GET METHODS

export const userHeader=()=>{
    return userInstance.get("/header")
}

export const getUploadedApps=()=>{
    return userInstance.get("/showApp")
}

