import React, { useEffect, useState } from "react";
import "./AdminHeader.css";
import { adminHeader } from "../../../Services/adminApi";
import { useDispatch } from "react-redux";
import { setAdminDetails } from "../../../Features/setAdmin";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [adminData,setAdminData]=useState({})
  
  const userLogOut=()=>{
    localStorage.removeItem("adminJWT")
    dispatch(setAdminDetails(""));
    navigate("/admin");
};
  
  
  
  useEffect(() => {
    adminHeader().then((value) => {
      if (value.data.admin) {
        console.log(value.data.admin,"$$$$$");
        setAdminData(value.data.admin)
        dispatch(setAdminDetails(value.data.admin));
      }
    });
  }, []);



  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <h2 id="t2">Nexus</h2>
         
          <br />
         


          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <button
                  class="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="notification"
                >
                  <i class="bi bi-bell" id="notify"></i>
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  id="notification_list"
                >
                  <li>
                    <a class="dropdown-item" >
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="dropdown" id="animation">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="profileicon"
            >
              <i class="bi bi-person-circle" id="profile"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-dark" id="profile_details">
              <li>
                <p class="dropdown-item active" >
                 Admin
                </p>
              </li>
              <li>
                <a class="dropdown-item" >
                  {adminData.email}
                </a>
              </li>
              <li>
                <button class="dropdown-item" onClick={()=>{userLogOut()}}>
                  Sign out
                </button>
              </li>
              <li>
                <hr class="dropdown-divider" id="underline" />
              </li>
              {/* <li>
                <a class="dropdown-item" >
                  View Profile
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
