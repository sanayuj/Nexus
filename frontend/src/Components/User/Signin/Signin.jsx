import React from 'react'
import './Signin.css'
import {Link,useNavigate} from "react-router-dom"
import {toast} from 'react-toastify';
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { login, userRegister } from '../../../Services/userApi'
import { setUserDetails } from '../../../Features/setUser'
import {useDispatch} from 'react-redux';


export default function Signin() {

  const dispatch= useDispatch();

  const navigate=useNavigate()

  const initialValues={
    email:"",
    password:"",
  };

  const validationSchema=Yup.object({
    email:Yup.string()
      .email("* Invalid email")
      .required("* This field is required"),
    password:Yup.string()
      .min(6,"* Password must be atleast 6 charecters long")
      .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\/,.<>/?]).*$/,
      "* Password must be atleast one capital letter and one special charecter")
      .required("* This field is required"),
  });
 
  const onSubmit = async (values) => {
    try {
      console.log("On Login Submit!!", values);
      const { data } = await login(values);
       console.log(data, "USER RETURN DATA!!!");
      if (data.created) {
      localStorage.setItem("jwt", data?.token);
      dispatch(setUserDetails(data?.user));
        toast.success(data.message, { position: "top-right" });
        navigate("/");
      } else {
        toast.error(data.message, { position: "top-right" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik =useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} id="form1">
      <h1 id='t1'>Sign in</h1><br /><br />
      <input type="text" name="email" id="username \" placeholder='email'
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.email}/>
      <br /><hr id='line'/><br />
      {formik.touched.email && formik.errors.email ?(
        <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",left:"95px",top:"-10px"}}>
          {formik.errors.email}
        </p>
      ):null}
      <input type="password" name="password" id="pswd" placeholder='Password'
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.password}/>
      <br /><hr id='line'/><br />
      {formik.touched.password && formik.errors.password ?(
        <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",left:"95px",top:"-10px"}}>
          {formik.errors.password}
        </p>
      ):null}
      <input type="submit" value={"Login"} id="submit"/><br/>
      <Link to={'../register'}><a href="./register" id='crt'>New User</a></Link>
      </form>
    </div>
  )
}
