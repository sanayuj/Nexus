import React from 'react'
import './Report.css'
import imageOne from "./12.jpg"
import {Link,useNavigate} from "react-router-dom"
import * as Yup from 'yup'
import {useFormik} from 'formik'

export default function Report() {

    const navigate=useNavigate()

  const initialValues={
    reportCategory:"",
    reportMsg:"",
  };

  const validationSchema=Yup.object({
    reportMsg:Yup.string()
      .min(15,"* Password must be atleast 15 charecters long")
      .required("* This field is required"),
    reportCategory:Yup.string()
      .required("* This field is required"),
  });

    // const onSubmit=async(values,{resetForm})=>{
  //   console.log(values);
  //   const data=await userRegister(values);
  //   console.log(data);
  //   if(data.data.status){
  //     toast.success("Login successfully")
  //     resetForm()
  //     navigate("/login")
  //   }else{
  //     toast.console.error("Unable to login");
  //   }
  // };

  const formik =useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  return (
    <div>

        <div class="div2" id='div2'>
    <section>
        <div class="container">
            <div class="row">
                    <h1 id='rh'>App Report</h1>
                    <form action="" id='rbox'>
                    <div>
                        <img src={imageOne} alt="Sample app icon" id='img1'/>
                    </div><br />
                        <input type="text" name="" id="rtext" value={'App Name'} readOnly/><br /><br />
                        <select name="reportCategory" id="rs"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.reportCategory}>
                            <option value="">Choose category</option>
                            <option value="">Graphic violence</option>
                            <option value="">Hateful or abusive content</option>
                            <option value="">Improper content rating</option>
                            <option value="">Illegal prescription or other drug</option>
                            <option value="">Sexual content</option>
                            <option value="">Copycat or impersonation</option>
                            <option value="">Other objection</option>
                        </select><br /><hr id='rhr'/><br />
                        {formik.touched.reportCategory && formik.errors.reportCategory ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-20px",left:"50px"}}>
                                {formik.errors.reportCategory}
                            </p>
                        ):null}
                        <textarea name="reportMsg" id="rt" cols="30" rows="10" placeholder='Describe your issue...'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.reportMsg}></textarea><br /><br />
                        {formik.touched.reportMsg && formik.errors.reportMsg ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-20px",left:"50px"}}>
                                {formik.errors.reportMsg}
                            </p>
                        ):null}
                        <input type="button" name="" id="rbtn" value={'Send'}/>
                        </form>
                </div>
        </div>
    </section>
        </div>
    </div>
  )
}
