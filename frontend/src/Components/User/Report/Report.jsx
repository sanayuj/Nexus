import React, { useEffect, useState } from "react";
import "./Report.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { appReport, getSelectedAppsDetails } from "../../../Services/userApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Report() {
  const appId = useParams().appId;
  const navigate = useNavigate();
  const [appDetails, setAppDetails] = useState({});
  const userId = useSelector((state) => state?.user?.value?._id);

  useEffect(() => {
    getSelectedAppsDetails(appId).then((value) => {
      setAppDetails(value?.data?.appData);
    });
  }, []);

  const initialValues = {
    reportCategory: "",
    reportMsg: "",
  };

  const validationSchema = Yup.object({
    reportMsg: Yup.string()
      .min(15, "* Password must be atleast 15 charecters long")
      .required("* This field is required"),
    reportCategory: Yup.string().required("* This field is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    appReport(userId, appId, values).then((values) => {
      if (values?.data?.status) {
        toast.success(values?.data?.message);
        resetForm()
      } else {
        toast.error(values?.data?.message);
      }
    });
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
              <h1 id="rh">App Report</h1>
              <form onSubmit={formik.handleSubmit} id="rbox">
                <div>
                  <img
                    src={`http://localhost:4000/img/${appDetails?.appIcon}`}
                    alt="Sample app icon"
                    id="img1"
                  />
                </div>
                <br />
                <input
                  type="text"
                  name=""
                  id="rtext"
                  value={appDetails?.appName}
                  readOnly
                />
                <br />
                <br />
                <select
                  name="reportCategory"
                  id="rs"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.reportCategory}
                >
                  <option value="">Choose category</option>
                  <option value="Graphic violence">Graphic violence</option>
                  <option value="Hateful or abusive content">
                    Hateful or abusive content
                  </option>
                  <option value="Improper content rating">
                    Improper content rating
                  </option>
                  <option value="Illegal prescription or other drug">
                    Illegal prescription or other drug
                  </option>
                  <option value="Sexual content">Sexual content</option>
                  <option value="Copycat or impersonation">
                    Copyright or impersonation
                  </option>
                  <option value="Other objection">Other objection</option>
                </select>
                <br />
                <hr id="rhr" />
                <br />
                {formik.touched.reportCategory &&
                formik.errors.reportCategory ? (
                  <p
                    className="text-danger errorMsg"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      position: "relative",
                      top: "-20px",
                      left: "50px",
                    }}
                  >
                    {formik.errors.reportCategory}
                  </p>
                ) : null}
                <textarea
                  name="reportMsg"
                  id="rt"
                  cols="30"
                  rows="10"
                  placeholder="Describe your issue..."
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.reportMsg}
                ></textarea>
                <br />
                <br />
                {formik.touched.reportMsg && formik.errors.reportMsg ? (
                  <p
                    className="text-danger errorMsg"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      position: "relative",
                      top: "-20px",
                      left: "50px",
                    }}
                  >
                    {formik.errors.reportMsg}
                  </p>
                ) : null}
                <input type="submit" name="" id="rbtn" />
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
