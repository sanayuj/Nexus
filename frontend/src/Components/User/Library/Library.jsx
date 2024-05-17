import React, { useEffect, useState } from "react";
import "./Library.css";
import imageOne from "./12.jpg";
import { getUserInstalledApps, getWishlistApps } from "../../../Services/userApi";
import { useSelector } from "react-redux";

export default function Library() {
  const [installedApp, setInstalledApp] = useState([]);
  const [wishlist,setWishlist]=useState([])
  const [view, setView] = useState('installed');
  
  const userId = useSelector((state) => state?.user?.value?._id);


  useEffect(() => {
    allApps()
  }, []);

  const allApps=()=>{
    getUserInstalledApps().then((value) => {
      console.log(value?.data);
      if (value?.data?.status) {
        setInstalledApp(value?.data?.apps);
        setView('installed')
        console.log(view,"View in Installed apps");
      }
    });
  }
  const getWishlist=()=>{
    getWishlistApps().then((value)=>{
      console.log(value?.data,"66666^^^^^6666");
      if(value?.data?.status){
        setWishlist(value?.data?.data)
        setView('wishlist');
        console.log(view,"View in wish apps");
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
                  onClick={()=>allApps()}
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


              {view === 'wishlist' ? (
                wishlist.length > 0 ? (
                  wishlist.map((value, index) => (
                    <div className="card" id="ldiv" key={index}>
                      <img
                        src={`http://localhost:4000/img/${value?.appDetails?.appIcon}`}
                        className="card-img-top"
                        id="limg"
                        alt="App Logo"
                      />
                      <div className="card-body">
                        <h5 className="card-title" id="lh1">
                          {value?.appDetails?.appName}
                        </h5>
                        <p className="btn btn-primary" id="la">
                          Downloaded
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Empty Wishlist</p>
                )
              ) : view === 'installed' ? (
                installedApp.length > 0 ? (
                  installedApp.map((value, index) => (
                    <div className="card" id="ldiv" key={index}>
                      <img
                        src={`http://localhost:4000/img/${value?.appIcon}`}
                        className="card-img-top"
                        id="limg"
                        alt="App Logo"
                      />
                      <div className="card-body">
                        <h5 className="card-title" id="lh1">
                          {value?.appName}
                        </h5>
                        <p className="btn btn-primary" id="la">
                          Downloaded
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Empty Library</p>
                )
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
