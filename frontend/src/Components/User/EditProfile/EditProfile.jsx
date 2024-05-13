import React from 'react'
import './EditProfile.css'
import {Link,useNavigate} from "react-router-dom"
import * as Yup from 'yup'
import {useFormik} from 'formik'

export default function EditProfile() {

  const supportedImageExtentionRegex=/\.(jpg|jpeg|png|avif)$/i;

  const navigate=useNavigate()

  const initialValues={
    profileImage:"",
    epname:"",
    epcno:"",
    epmail:"",
    epbio:"",
  };

  const validationSchema=Yup.object({
    epname:Yup.string()
      .min(3,"* Name must be atleast 3 charecters long")
      .matches(/^[A-Za-z]+$/,"* Name must only contain charecters")
      .required("* This field is required"),
    epcno:Yup.string()
      .matches(/^[0-9]{6,14}$/,"* Invalid phone number format, Please enter a valid phone number")
      .required("* This field is required"),
    epmail:Yup.string()
      .email("* Invalid email format")
      .required("* This fiels id required"),
    epbio:Yup.string()
      .min(6,"* Bio must be atleast 6 charecters long"),
    profileImage:Yup.mixed()
      .test("fileType", "Unsupported file type", (value)=>{
        if(!value) return false;
        return supportedImageExtentionRegex.test(value.name);
      }),
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
      <div class="div2" id='epdiv'>
            <section>
                <div class="container">
                    <div class="row">
                        <h2 id='eph'>Edit your Profile</h2>
                        <form action="" id='epf2'>
                        <h4>Avatar</h4><br /><br />
                        <img id='eimg' class="img-raised rounded-circle img-fluid" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixlr.com%2F&psig=AOvVaw3WDqgSsQOWtW5p-q7q-7gb&ust=1713440072180000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDG8fSTyYUDFQAAAAAdAAAAABAE" alt="" />
                        <div id='uploadButton'>
                          <input type="file" id='epbtn' name='profileImage'
                          onBlur={formik.handleBlur}
                          onChange={(event)=>formik.setFieldValue("profileImage",event.currentTarget.files[0])}/>
                          <div id='upbtn-label'>Choose Image</div>
                          {formik.touched.profileImage && formik.errors.profileImage ?(
                              <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-110px",left:"200px"}}>
                                {formik.errors.profileImage}
                              </p>
                            ):null}
                          </div><br /><br />
                        <h4>Full Name</h4>
                        <input type="text" name="epname" id="epname" placeholder='Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.epname}/><br /><hr id='ep'/><br />
                        {formik.touched.epname && formik.errors.epname ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-40px"}}>
                              {formik.errors.epname}
                            </p>
                          ):null}
                        <h4>Email Id</h4>
                        <input type="text" name="epmail" id="epmail" placeholder='Email'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.epmail}/><br /><hr id='ep'/><br />
                        {formik.touched.epmail && formik.errors.epmail ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-40px"}}>
                              {formik.errors.epmail}
                            </p>
                          ):null}
                        <h4>Contact No</h4>
                        <input type="text" name="epcno" id="epcno" placeholder='Contact No'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.epcno}/><br /><hr id='ep'/><br />
                        {formik.touched.epcno && formik.errors.epcno ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-40px"}}>
                              {formik.errors.epcno}
                            </p>
                          ):null}
                        <h4>Bio</h4>
                        <input type="text" name="epbio" id="epbio" placeholder='About yourself'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.epbio}/><br /><hr id='ep1'/><br />
                        {formik.touched.epbio && formik.errors.epbio ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-40px"}}>
                              {formik.errors.epbio}
                            </p>
                          ):null}
                        <button id="button">Save</button>
                        </form>
                    </div>
                </div>
            </section>
    
        </div>
    </div>
  )
}
