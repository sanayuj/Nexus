import React, { useEffect } from "react";
import "./AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { adminLogin } from "../../../Services/adminApi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setAdminDetails } from "../../../Features/setAdmin";

export default function AdminLogin() {
const dispatch=useDispatch()
const navigate=useNavigate()

const admin=useSelector((state)=>state.admin.value)

useEffect(()=>{
  if(admin){
    navigate("/admin/home")
  }
})



  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("* Invaild email format")
      .required("* This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "* Invalid email address"
      ),
    password: Yup.string().required("* This field is required"),
  });

  const onSubmit = async (values) => {
    const {data}=await adminLogin(values)
    console.log(data.adminDetails);
    if(data.status){

      dispatch(setAdminDetails(data?.adminDetails))
      localStorage.setItem("adminJWT", data.token);
      toast.success(data.message)
      navigate("/admin/home")
    }else{
      toast.error(data.message)
    }
    try {
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} id="adform1">
        <h1 id="adt1">Admin Login</h1>
        <br />
        <br />
        <input
          type="email"
          id="adusername"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p
            className="text-danger"
            style={{ fontSize: "12px", margin: "0px" }}
          >
            {formik.errors.email}
          </p>
        ) : null}
        <br />
        <hr id="adline" />
        <br />
        <input
          type="password"
          id="adpswd"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p
            className="text-danger"
            style={{ fontSize: "12px", margin: "0px" }}
          >
            {formik.errors.password}
          </p>
        ) : null}
        <br />
        <hr id="line" />
        <br />
        <button type="submit" id="adsubmit">Submit</button>
        <br />
      </form>
    </div>
  );
}
