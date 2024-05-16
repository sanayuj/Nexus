import React, { useEffect, useState } from "react";
import "./Library.css";
import imageOne from "./12.jpg";
import { getUserInstalledApps } from "../../../Services/userApi";

export default function Library() {
  const [installedApp, setInstalledApp] = useState([]);
  useEffect(() => {
    getUserInstalledApps().then((value) => {
      console.log(value?.data?.apps, "7878787");
      if (value?.data?.status) {
        setInstalledApp(value?.data?.apps);
      }
    });
  }, []);
  return (
    <div>
      <div class="div2" id="div2">
        <section>
          <div class="container">
            <div class="row">
              <h2>Library</h2>
              <br />
              <br />
              <div>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  id="libb1"
                >
                  ALL
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  id="libb2"
                >
                  Wishlist
                </button>
              </div>
              <br />
              <br />
              {installedApp.length > 0 ? (
                installedApp.map((value, index) => (
                  <div class="card" id="ldiv" key={index}>
                    <img
                      src={`http://localhost:4000/img/${value?.appIcon
}`}
                      class="card-img-top"
                      id="limg"
                      alt="App Logo"
                    />
                    <div class="card-body">
                      <h5 class="card-title" id="lh1">
                        {value?.appName}
                      </h5>
                      <p  class="btn btn-primary" id="la">
                        Downloaded
                        
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No installed apps</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
