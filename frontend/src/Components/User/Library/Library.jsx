import React, { useEffect, useState } from "react";
import "./Library.css";
import { getUserInstalledApps, getWishlistApps } from "../../../Services/userApi";
import { useSelector } from "react-redux";

export default function Library() {
  const [installedApp, setInstalledApp] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [filteredAllApps, setFilteredAllApps] = useState([]);
  const [selectedOS, setSelectedOS] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("installed");

  const userId = useSelector((state) => state?.user?.value?._id);

  useEffect(() => {
    loadInstalledApps();
  }, []);

  useEffect(() => {
    filterApps();
  }, [selectedOS, searchQuery, view]);

  const loadInstalledApps = () => {
    getUserInstalledApps().then((value) => {
      console.log(value?.data);
      if (value?.data?.status) {
        setInstalledApp(value?.data?.apps);
        setFilteredAllApps(value?.data?.apps);
        setView("installed");
      }
    });
  };

  const loadWishlist = () => {
    getWishlistApps().then((value) => {
      console.log(value?.data);
      if (value?.data?.status) {
        setWishlist(value?.data?.data);
        setFilteredAllApps(value?.data?.data);
        setView("wishlist");
      }
    });
  };

  const handleOSChange = (e) => {
    console.log(e.target.value,"VAl !!!!");
    setSelectedOS(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterApps = () => {
    let apps = view === "installed" ? installedApp : wishlist;

    if (selectedOS) {
      apps = apps.filter((app) => app.OS === selectedOS);
    }

    if (searchQuery) {
      apps = apps.filter((app) =>
        (app.appName || app.appDetails?.appName)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    setFilteredAllApps(apps);
  };

  return (
    <div>
      <div className="div2" id="div2">
        <section>
          <div className="container">
            <div className="row">
              <div id="homenav">
                <select name="" onChange={handleOSChange} id="uosfilter">
                  <option value="">Choose OS</option>
                  <option value="Windows">Windows</option>
                  <option value="Linux">Linux</option>
                  <option value="MAC">Mac</option>
                </select>
                <br />
                <input
                  type="text"
                  id="usearch"
                  onChange={handleSearchChange}
                  placeholder="Search.."
                />
                <button id="usearchicon">
                  <i className="bi bi-search" id="usearch1"></i>
                </button>
              </div>
              <h2>Library</h2>
              <br />
              <br />
              <div>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  id="libb1"
                  onClick={loadInstalledApps}
                >
                  ALL
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="libb2"
                  onClick={loadWishlist}
                >
                  Wishlist
                </button>
              </div>
              <br />
              <br />
              {view === "wishlist" ? (
                filteredAllApps.length > 0 ? (
                  filteredAllApps.map((value, index) => (
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
              ) : view === "installed" ? (
                filteredAllApps.length > 0 ? (
                  filteredAllApps.map((value, index) => (
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
