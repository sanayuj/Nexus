import React, { useEffect, useState } from "react";
import "./TotalUsers.css";
import { userlist } from "../../../Services/adminApi";

export default function TotalUsers() {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    userlist().then((value) => {
      console.log(value.data, "$$$$$");
      setUserDetails(value?.data?.userlist);
    });
  }, []);
  return (
    <div>
      <div id="div2">
        <h2 id="th2">User Details</h2>
        <table class="table table-striped table-hover" id="tuser">
          <thead>
            <tr>
              <th scope="col">SL.No</th>
              <th scope="col">Name</th>
              <th scope="col">Contact No</th>
              <th scope="col">Email ID</th>
            </tr>
          </thead>
          <tbody>
          {userDetails.map((value)=>(
            <tr>
              <th scope="row">1</th>
              <td>{value.username}</td>
              <td>{value.contactNo}</td>
              <td>{value.email}</td>
            </tr>
          ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
