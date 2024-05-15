import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { updateUserProfile, userHeader } from "../../../Services/userApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function EditProfile() {
  const [name, setName] = useState();
  const [contactNo, setContact] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();

  const userId = useSelector((state) => state?.user?.value?._id);

  useEffect(() => {
    userHeader().then((value) => {
      console.log(value.data.user, "USerPro");
      if (value.data.status) {
        setName(value?.data?.user?.username);
        setContact(value?.data?.user?.contactNo);
        setEmail(value?.data?.user?.email);
        setImage(value?.data?.user?.profileImage);
        console.log(image,"#####");
      }
    });
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      epname: name,
      epcno: contactNo,
      epmail: email,
    });
  }, [name, contactNo, email]);

  const initialValues = {
    profileImage: null,
    epname: name,
    epcno: contactNo,
    epmail: email,
  };

  const supportedImageTypes = [
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/avif",
  ];
  const validationSchema = Yup.object({
    epname: Yup.string()
      .min(3, "* Name must be atleast 3 charecters long")
      .matches(/^[A-Za-z]+$/, "* Name must only contain charecters")
      .required("* This field is required"),
    epcno: Yup.string()
      .matches(
        /^[0-9]{6,14}$/,
        "* Invalid phone number format, Please enter a valid phone number"
      )
      .required("* This field is required"),
    epmail: Yup.string()
      .email("* Invalid email format")
      .required("* This fiels id required"),
    profileImage: Yup.mixed().test(
      "fileType",
      "Unsupported file type",
      (value) => {
        if (!value) return true;
        return supportedImageTypes.includes(value.type);
      }
    ),
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log(values,"$$$%%%%");
    updateUserProfile(values, userId).then((value)=>{
      console.log(value.data,"Value");
      if(value.data.status){
        toast.success(value.data.message)
      }else{
        toast.error("Unable to update")
      }
     
    })
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
      <div class="div2" id="epdiv">
        <section>
          <div class="container">
            <div class="row">
              <h2 id="eph">Edit your Profile</h2>
              <form onSubmit={formik.handleSubmit} id="epf2">
                <h4>Avatar</h4>
                <br />
                <br />
                <img
                  id="eimg"
                  className="img-raised rounded-circle img-fluid"
                  src={
                    (image?`http://localhost:4000/img/${image}`:(  formik.values.profileImage
                      ? URL.createObjectURL(formik.values.profileImage)
                      : ""))
                    
                  }
                  alt=""
                />
                <div id="uploadButton">
                  <input
                    type="file"
                    id="epbtn"
                    name="profileImage"
                    onChange={(event) =>
                      formik.setFieldValue(
                        "profileImage",
                        event.currentTarget.files[0]
                      )
                    }
                  />
                  <label htmlFor="epbtn" id="upbtn-label">
                    Choose Image
                  </label>
                  {formik.touched.profileImage && formik.errors.profileImage ? (
                    <p
                      className="text-danger errorMsg"
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        position: "relative",
                        top: "-110px",
                        left: "200px",
                      }}
                    >
                      {formik.errors.profileImage}
                    </p>
                  ) : null}
                </div>
                <br />
                <br />
                <h4>Full Name</h4>
                <input
                  type="text"
                  name="epname"
                  id="epname"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.epname}
                />
                <br />
                <hr id="ep" />
                <br />
                {formik.touched.epname && formik.errors.epname ? (
                  <p
                    className="text-danger errorMsg"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    {formik.errors.epname}
                  </p>
                ) : null}
                <h4>Email Id</h4>
                <input
                  type="text"
                  name="epmail"
                  id="epmail"
                  placeholder="Email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.epmail}
                />
                <br />
                <hr id="ep" />
                <br />
                {formik.touched.epmail && formik.errors.epmail ? (
                  <p
                    className="text-danger errorMsg"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    {formik.errors.epmail}
                  </p>
                ) : null}
                <h4>Contact No</h4>
                <input
                  type="text"
                  name="epcno"
                  id="epcno"
                  placeholder="Contact No"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.epcno}
                />
                <br />
                <hr id="ep" />
                <br />
                {formik.touched.epcno && formik.errors.epcno ? (
                  <p
                    className="text-danger errorMsg"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    {formik.errors.epcno}
                  </p>
                ) : null}

                <button id="button">Save</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
