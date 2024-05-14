import React, { useEffect, useState } from "react";
import "./TotalApps.css";
import { totalApplications } from "../../../Services/adminApi";

export default function TotalApps() {
  const [appDetails, setAppDetails] = useState([]);
  useEffect(() => {
    totalApplications().then((value) => {
      console.log(value.data.Data,"######");
      setAppDetails(value.data.Data);
    });
  }, []);
  return (
    <div>
      <div id="div2">
        <h2 id="th2">Apps Details</h2>
        <table class="table table-striped table-hover" id="tapps">
          <thead>
            <tr>
              <th scope="col">SL.No</th>
              <th scope="col">Icon</th>
              <th scope="col">App Name</th>
              <th scope="col">Category</th>
              <th scope="col">OS</th>
            </tr>
          </thead>
          <tbody>
          {appDetails.map((value,index)=>(
            <tr>
              <th scope="row">{index+1}</th>
              <td>
                <img id="timg" src={`http://localhost:4000/img/${value.appIcon}`} alt="App icon" />
              </td>
              <td>{value.appName}</td>
              <td>{value.Category}</td>
              <td>{value.OS}</td>
            </tr>
          ))}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
