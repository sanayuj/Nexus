import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const [userDetails, setUserDetails] = useState({});
  const user = useSelector((state) => state?.user?.value);
  useEffect(() => {
   
    setUserDetails(user);
    console.log(user);
  }, []);

  const date = new Date(userDetails?.date);
  return (
    <div>
      <div class="main main-raised">
        <div class="profile-content" id="pdiv">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ml-auto mr-auto">
                <div class="profile">
                  <div class="avatar">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Circle Image"
                      class="img-raised rounded-circle img-fluid"
                    />
                    <br />
                    <br />
                    <input type="text" id="pname" value={userDetails?.username} readOnly />
                    <br />
                    <br />
                    <Link to="../edit_profile" id="link">
                      <button class="pbtn">
                        <i class="bi bi-pencil-square"></i>Edit Profile
                      </button>
                    </Link>
                  </div>
                  <div class="name">
                    <input type="text" id="pmail" value={userDetails?.email} readOnly />
                    <br />
                    <br />
                    <input
                      type="text"
                      id="pcno"
                      value={userDetails?.contactNo}
                      maxLength={"10"}
                      readOnly
                    />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div class="description text-center">
              <label id="joinKey">Joined on </label>
              <br />
              <br />
              <br />
              <input
                type="text"
                value={date.toLocaleString('en-US')}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
