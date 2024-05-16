import React from "react";
import "./Upload.css";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { appUpload } from "../../../Services/userApi";

export default function Upload() {
  const supportedExtensionsRegex = /\.(exe|dmg|app|apk|deb|rpm)$/i;
  const supportedImageExtensionsRegex = /\.(jpg|jpeg|png)$/i;
  const userIdentity = useSelector((state) => state?.user?.value?._id);

  const initialValues = {
    appName: "",
    appDescription: "",
    appFile: null,
    developerName: "",
    publisherName: "",
    Category: "",
    OS:"",
    appScreenshots: null,
    appIcon: null,
  };

  const validationSchema = Yup.object({
    appName: Yup.string()
      .min(3, "*Name must be at least 3 characters long")
      .required("* This field is required"),
    appDescription: Yup.string()
      .min(3, "*Name must be at least 3 characters long")
      // .matches(/^[A-Za-z]+$/, "* Name must only contain characters")
      .required("* This field is required"),
    appFile: Yup.mixed()
      .test("fileType", "Unsupported file type", (value) => {
        if (!value) return false; // If no file is selected, fail the validation
        return supportedExtensionsRegex.test(value.name);
      })
      .required("* This field is required"),
    developerName: Yup.string()
      .min(3, "*Name must be at least 3 characters long")
      // .matches(/^[A-Za-z]+$/, "* Name must only contain characters")
      .required("* This field is required"),
    publisherName: Yup.string()
      .min(3, "*Name must be at least 3 characters long")
      // .matches(/^[A-Za-z]+$/, "* Name must only contain characters")
      .required("* This field is required"),
    Category: Yup.string()
      .min(3, "*Name must be at least 3 characters long")
      // .matches(/^[A-Za-z]+$/, "* Name must only contain characters")
      .required("* This field is required"),
      OS:Yup.string()
      .required("This field is required"),
    appScreenshots: Yup.mixed().required("* This field is required"),
    appIcon: Yup.mixed().required("* This field is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log(values,"$$$$$$$121212");
    const { data } = await appUpload(values, userIdentity);
    if (data?.status) {
      resetForm();
      const appApk = document.getElementById("appfile");
      const appShots = document.getElementById("scrnsht");
      const appIcon = document.getElementById("appicon");
      if (appApk && appShots && appIcon) {
        appApk.value = "";
        appShots.value = "";
        appIcon.value = "";
      }
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <div class="div2" id="div2">
        <section>
          <div class="container">
            <div class="row">
              <h4 id="uh">UPLOAD YOUR APPLICATION</h4>
              <form onSubmit={formik.handleSubmit} id="form3">
                <input
                  type="text"
                  name="appName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.appName}
                  id="appname"
                  placeholder="Application Name"
                />

                <br />

                <hr id="hr1_1" />
                {formik.touched.appName && formik.errors.appName ? (
                  <p
                    className="text-danger errorMsg"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formik.errors.appName}
                  </p>
                ) : null}
                <br />

                <textarea
                  name="appDescription"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.appDescription}
                  id="desc"
                  cols="30"
                  rows="10"
                  placeholder="Description of the Application"
                ></textarea>

                <br />
                <hr id="hr2" />
                {formik.touched.appDescription &&
                formik.errors.appDescription ? (
                  <p
                    className="text-danger errorMsg"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formik.errors.appDescription}
                  </p>
                ) : null}
                <br />
                <label id="text">Upload your App file</label>
                <input
                  type="file"
                  name="appFile"
                  onBlur={formik.handleBlur}
                  onChange={(event) =>
                    formik.setFieldValue(
                      "appFile",
                      event.currentTarget.files[0]
                    )
                  }
                  // value={formik.values.appFile}
                  id="appfile"
                />

                <br />
                <hr id="hr1_2" />
                {formik.touched.appFile && formik.errors.appFile ? (
                  <p
                    className="text-danger errorMsg"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formik.errors.appFile}
                  </p>
                ) : null}
                <br />
                <input
                  type="text"
                  name="developerName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.developerName}
                  id="devname"
                  placeholder="Developer name"
                />

                <br />
                <hr id="hr1" />
                {formik.touched.developerName && formik.errors.developerName ? (
                  <p
                    className="text-danger errorMsg"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formik.errors.developerName}
                  </p>
                ) : null}
                <br />
                <input
                  type="text"
                  name="publisherName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.publisherName}
                  id="publname"
                  placeholder="Publisher name"
                />

                <br />
                <hr id="hr1" />
                {formik.touched.publisherName && formik.errors.publisherName ? (
                  <p
                    className="text-danger errorMsg"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formik.errors.publisherName}
                  </p>
                ) : null}
                <br />
                <select name="Category" id="category"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.Category}>
                          <option value="">Choose category</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Social Networking">Social Networking</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Communication">Communication</option>
                            <option value="Education">Education</option>
                            <option value="Health and Fitness">Health and Fitness</option>
                            <option value="Travel">Travel</option>
                            <option value="Finance">Finance</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Game">Game</option>
                            <option value="Utilities">Utilities</option></select><br /><hr id='hr1'/><br />
                            {formik.touched.Category && formik.errors.Category ?(
                              <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-90px"}}>
                                {formik.errors.Category}
                              </p>
                            ):null}
                <br />
                <select name="OS" id="os"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.OS}>
                          <option value="">Choose OS</option>
                            <option value="Windows">Windows</option>
                            <option value="Linux">Linux</option>
                            <option value="MAC">MAC</option></select><br /><hr id='hr1'/><br />
                            {formik.touched.OS && formik.errors.OS ?(
                              <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-90px"}}>
                                {formik.errors.OS}
                              </p>
                            ):null}
                <label id="text">Upload sample screen shots</label>
                <input
                  type="file"
                  name="appScreenshots"
                  onBlur={formik.handleBlur}
                  onChange={(event) =>
                    formik.setFieldValue(
                      "appScreenshots",
                      event.currentTarget.files[0]
                    )
                  }
                  // value={formik.values.appScreenshots}
                  id="scrnsht"
                />

                <br />
                <hr id="hr1_2" />
                {formik.touched.appScreenshots &&
                formik.errors.appScreenshots ? (
                  <p
                    className="text-danger errorMsg"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formik.errors.appScreenshots}
                  </p>
                ) : null}
                <br />
                <label id="text1">Upload app icon</label>
                <input
                  type="file"
                  name="appIcon"
                  onBlur={formik.handleBlur}
                  onChange={(event) =>
                    formik.setFieldValue(
                      "appIcon",
                      event.currentTarget.files[0]
                    )
                  }
                  // value={formik.values.appIcon}
                  id="appicon"
                />

                <br />
                <hr id="hr1" />
                {formik.touched.appIcon && formik.errors.appIcon ? (
                  <p
                    className="text-danger errorMsg"
                    style={{ fontSize: "12px", margin: "0px" }}
                  >
                    {formik.errors.appIcon}
                  </p>
                ) : null}
                <br />
                <input type="submit" id="subbtn" />
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
