import React, { useEffect, useState } from "react";
import "./Library.css";
import imageOne from "./12.jpg";
import { getUserInstalledApps, getWishlistApps } from "../../../Services/userApi";
import { useSelector } from "react-redux";

export default function Library() {
  const [installedApp, setInstalledApp] = useState([]);
  const userId = useSelector((state) => state?.user?.value?._id);


  useEffect(() => {
    allApps()
  }, []);

  const allApps=()=>{
    getUserInstalledApps().then((value) => {
      if (value?.data?.status) {
        setInstalledApp(value?.data?.apps);
      }
    });
  }
  const getWishlist=(userId)=>{
    getWishlistApps(userId).then((value)=>{
      console.log(value?.data);
      if(value?.data?.status){
        setInstalledApp(value?.data?.data)
      }
    })
  }


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
                  onClick={()=>getUserInstalledApps()}
                >
                  ALL
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  id="libb2"
                  onClick={()=>getWishlist(userId)}
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
                      src={`http://localhost:4000/img/${value?.appIcon}`}
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
                <p>EMPTY</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
