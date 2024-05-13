import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./Feedback.css";
import { useSelector } from "react-redux";
import { sendFeedback } from "../../../Services/userApi";

export default function Feedback() {
    const navigate=useNavigate()
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const userIdentity = useSelector((state) => state?.user?.value?._id);
  const initialValues = {
    comments: "",
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const validationSchema = Yup.object({
    comments: Yup.string()
      .required("* This field is required")
      .min(3, "* Name must be at least 3 characters long"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const {data}= await sendFeedback(selectedStatus,selectedCategory,values,userIdentity)
    if(data.status){
        
        setSelectedStatus("")
        setSelectedCategory("")
        toast.success(data.message)
        navigate("/")
    }else{
        setSelectedStatus("")
        setSelectedCategory("")
        toast.error(data.message)
    }
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <div className="div2" id="div2">
        <section>
          <div className="container">
            <div className="row">
              <h2 id="fh">Feedback</h2>
              <form onSubmit={formik.handleSubmit} id="f2">
                <p id="fp1">
                  We would like your feedback to improve our service
                </p>
                <br />
                <p id="fp2">What is your opinion about Nexus</p>
                <br />
                <div id="feedback-buttons">
                  <button
                    id="fb1"
                    className={selectedStatus === "Very Sad" ? "selected" : "notSelected"}
                    onClick={() => handleStatusChange("Very Sad")}
                  >
                    <i className="bi bi-emoji-tear"></i>
                  </button>
                  <button id="fb2"
                   className={selectedStatus === "Sad" ? "selected" : "notSelected"}
                    onClick={() => handleStatusChange("Sad")}>
                    <i className="bi bi-emoji-frown"></i>
                  </button>
                  <button
                    id="fb3"
                    className={selectedStatus === "Netural" ? "selected" : "notSelected"}
                    onClick={() => handleStatusChange("Netural")}
                  >
                    <i className="bi bi-emoji-neutral"></i>
                  </button>
                  <button id="fb4"
                   className={selectedStatus === "Good" ? "selected" : "notSelected"}
                   onClick={() => handleStatusChange("Good")}>
                    <i className="bi bi-emoji-smile"></i>
                  </button>
                  <button
                    id="fb5"
                    className={selectedStatus === "Very Good" ? "selected" : "notSelected"}
                    onClick={() => handleStatusChange("Very Good")}
                  >
                    <i className="bi bi-emoji-laughing"></i>
                  </button>
                </div>
                {selectedStatus === ""  ? (
                  <p className="text-danger errorMsg">{formik.errors.status}</p>
                ) : null}

                <br />
                <br />
                <p id="fp3">Select the feedback category</p>
                <br />
                <div id="d2">
                  <button
                    id="fb6"
                    className={selectedCategory === "Compliment" ? "selectedCategory" : ""}
                    onClick={() => handleCategoryChange("Compliment")}
                  >
                    Compliment
                  </button>
                  <button
                    id="fb7"
                    className={selectedCategory === "Suggestion" ? "selectedCategory" : ""}
                    onClick={() => handleCategoryChange("Suggestion")}
                  >
                    Suggestion
                  </button>
                  <button
                    id="fb8"
                    className={selectedCategory === "Complaint" ? "selectedCategory" : ""}
                    onClick={() => handleCategoryChange("Complaint")}
                  >
                    Complaint
                  </button>
                </div>
                <br />
                <p id="fp4">Leave your feedback below</p>
                <br />
                <textarea
                  name="comments"
                  id="ft1"
                  cols="30"
                  rows="10"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comments}
                ></textarea>
                {formik.touched.comments && formik.errors.comments ? (
                  <p className="text-danger errorMsg">
                    {formik.errors.comments}
                  </p>
                ) : null}
                <br />
                <button type="submit" id="fb9">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
