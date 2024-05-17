import React, { useEffect, useState } from "react";
import "./MacApps.css";
import { fetchAllMacApps } from "../../../Services/adminApi";

export default function MacApps() {
  const [macApps, setMacApps] = useState([]);
  useEffect(() => {
    fetchAllMacApps().then((value) => {
      if (value?.data?.status) {
        setMacApps(value?.data?.data);
      }
    });
  }, []);
  return (
    <div>
      <div id="div2">
        <h2 id="th2">Apps for Mac</h2>
        <table class="table table-striped table-hover" id="tmac">
          <thead>
            <tr>
              <th scope="col">SL.No</th>
              <th scope="col">Icon</th>
              <th scope="col">App Name</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {macApps.length > 0 ? (
              macApps.map((value, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      id="timg"
                      src={`http://localhost:4000/img/${value.appIcon}`}
                      alt="App icon"
                    />
                  </td>
                  <td>{value?.appName}</td>
                  <td>{value?.Category}</td>
                </tr>
              ))
            ) : (
              <p>Empty</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
