import React, { useEffect, useState } from "react";
import "./FeedbackCheck.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchFeedDetails, sendComments } from "../../../Services/adminApi";

export default function FeedbackCheck() {
  const [feedback, setFeedback] = useState(null);
  const [comment, setComment] = useState("");
  const { id: feedId } = useParams();

  useEffect(() => {
    fetchFeedDetails(feedId).then((value) => {
      if (value?.data?.status) {
        setFeedback(value?.data?.data);
      }
    });
  }, [feedId]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    sendComments(comment, feedback?._id, feedback?.userId?._id).then(
      (value) => {
        if (value?.data?.status) {
          toast.success(value?.data?.message);
          setComment("");
        } else {
          toast.error(value?.data?.message);
        }
      }
    );
  };

  return (
    <div>
      <div className="div2" id="div2">
        <section>
          <div className="container">
            <div className="row">
              <h2>Feedback</h2>
              <div id="fcbox">
                <label htmlFor="fct1" id="fcl">
                  User Name:{" "}
                </label>
                <input
                  type="text"
                  id="fct1"
                  value={feedback?.userId?.username}
                  readOnly
                />
                <br />
                <br />

                <label htmlFor="fct2" id="fcl">
                  Reaction about the store:{" "}
                </label>
                <input
                  type="text"
                  id="fct2"
                  value={feedback?.feedbackStatus}
                  readOnly
                />
                <br />
                <br />

                <label htmlFor="fct3" id="fcl">
                  Feedback Category:{" "}
                </label>
                <input
                  type="text"
                  id="fct3"
                  value={feedback?.category}
                  readOnly
                />
                <br />
                <br />

                <label htmlFor="" id="fcl">
                  User Feedback: {feedback?.feedbackComment}
                </label>
                <textarea id="fct4" readOnly cols="30" rows="10"></textarea>
                
                <br />
                <br />

                <textarea
                  id="fct5"
                  value={comment}
                  onChange={handleCommentChange}
                  cols="30"
                  rows="10"
                  placeholder="Leave comments"
                ></textarea>
                <br />
                <br />

                <button id="fcb1" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
