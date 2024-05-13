import React from 'react'
import "./Signup.css"
import {Link,useNavigate} from "react-router-dom"
import {toast} from "react-toastify" 
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {userRegister} from"../../../Services/userApi"

function Signup() {

  const navigate=useNavigate()

  const initialValues={
    username:"",
    contactNo:"",
    email:"",
    password:"",
    confirmPassword:"",
  };

  const validationSchema=Yup.object({
    username:Yup.string()
      .strict(true)
      .trim("* Name must not contain white space")
      .test(
        "* no-whitespace",
        "* Name must not contain white space",
        (value)=>!/\s/.test(value)
      )
      .min(3,"* Name must be atleast 3 charecters long")
      .matches(/^[A-Za-z]+$/,"* Name must only contain charecters")
      .required("* This field is required"),
    contactNo:Yup.string()
      .matches(/^[0-9]{6,14}$/,"* Invalid phone number format, Please enter a valid phone number")
      .required("* This field is required"),
    email:Yup.string()
      .email("* Invalid email format")
      .required("* This fiels id required"),
    password:Yup.string()
      .min(6,"* Password must be atleast 6 charecters long")
      .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\/,.<>/?]).*$/,
      "* Password must be atleast one capital letter and one special charecter")
      .required("* This field is required"),
    confirmPassword:Yup.string()
      .oneOf([Yup.ref("password"),null],"* Passwords must match")
      .required("* This field is required"),
  });

 

  const onSubmit = async (values,{resetForm}) => {
    console.log(values);
    const data = await userRegister(values);
    console.log(data);
    if(data.data.status){
      toast.success("Register successfully")
      resetForm()
      navigate("/login")
    }else{
      toast.error("Unable to Register")
    }
  }
  const formik =useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
    <form onSubmit={formik.handleSubmit} id='form'>
      <h1 id="h1">Registration</h1>
      <input type="text" name="username" id="name" placeholder='Full Name' 
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.username}/>
      <br /><hr /><br />
      {formik.touched.username && formik.errors.username ?(
        <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",left:"95px",top:"5px"}}>
          {formik.errors.username}
        </p>
      ):null}
      <input type="text" name="contactNo" id="phn" placeholder='Contact No'
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.contactNo}/>
      <br /><hr /><br />
      {formik.touched.contactNo && formik.errors.contactNo ?(
        <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",left:"95px",top:"5px"}}>
          {formik.errors.contactNo}
        </p>
      ):null}
      <input type="text" name="email" id="mail" placeholder='Email'
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.email}/>
      <br /><hr /><br />
      {formik.touched.email && formik.errors.email ?(
        <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",left:"95px",top:"5px"}}>
          {formik.errors.email}
        </p>
      ):null}
      <input type="password" name="password" id="pswd1" placeholder='Create Password'
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.password}/>
      <br /><hr /><br />
      {formik.touched.password && formik.errors.password ?(
        <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",left:"95px",top:"5px"}}>
          {formik.errors.password}
        </p>
      ):null}
      <input type="password" name="confirmPassword" id="cpswd" placeholder='Confirm Password'
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.confirmPassword}/>
      <br /><hr /><br />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ?(
        <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",left:"95px",top:"5px"}}>
          {formik.errors.confirmPassword}
        </p>
      ):null}
      <button type="submit" name="" id="btn">Submit</button>
      </form>
    </>
  )
}

export default Signup
