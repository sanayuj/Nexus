import React, { useEffect, useState } from "react";
import "./Games.css";
import { appAddtoProfile, getGameApps } from "../../../Services/userApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Games() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedOS, setSelectedOS] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const userId = useSelector((state) => state?.user?.value?._id);
  const navigate = useNavigate();

  useEffect(() => {
    getGameApps().then((value) => {
      if (value.data.status) {
        setGames(value.data.data);
        setFilteredGames(value.data.data); 
      }
    });
  }, []);

  useEffect(() => {
    filterGames();
  }, [selectedOS, searchQuery, games]);

  const handleOSChange = (e) => {
    setSelectedOS(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterGames = () => {
    let filtered = games;

    if (selectedOS) {
      filtered = filtered.filter((game) => game.OS === selectedOS);
    }

    if (searchQuery) {
      filtered = filtered.filter((game) =>
        game.appName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    console.log("Filtered Games:", filtered);
    setFilteredGames(filtered);
  };

  const DownloadSelectedApp = (apkFile, appId) => {
    appAddtoProfile(userId, appId).then((value) => {
    });
    const fileUrl = `http://localhost:4000/img/${apkFile}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="div2" id="div2">
        <section>
          <div className="container">
            <div className="row">
              <div id="homenav">
                <select name="" id="uosfilter" onChange={handleOSChange}>
                  <option value="">Choose OS</option>
                  <option value="Windows">Windows</option>
                  <option value="Linux">Linux</option>
                  <option value="MAC">Mac</option>
                </select>
                <br />
                <input
                  type="text"
                  id="usearch"
                  placeholder="Search.."
                  onChange={handleSearchChange}
                />
                <button id="usearchicon">
                  <i className="bi bi-search" id="usearch1"></i>
                </button>
              </div>
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators" id="">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner" id="sub">
                  <div className="carousel-item active">
                    <img src="" className="d-block w-100" alt="First" />
                  </div>
                  <div className="carousel-item">
                    <img src="" className="d-block w-100" alt="Second" />
                  </div>
                  <div className="carousel-item">
                    <img src="" className="d-block w-100" alt="Third" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {filteredGames.length > 0 ? (
                filteredGames.map((value, index) => (
                  <div
                    className="card"
                    id="hdiv"
                    onClick={() => navigate(`/install/${value?._id}`)}
                    key={index}
                  >
                    <img
                      src={`http://localhost:4000/img/${value?.appIcon}`}
                      id="himg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title" id="hh">
                        {value?.appName}
                      </h5>
                      <br />
                      <p className="card-text">{value?.Category}</p>
                      <button
                        id="hb"
                        onClick={(e) => {
                          e.stopPropagation();
                          DownloadSelectedApp(value?.apkFile, value?._id);
                        }}
                      >
                        <i className="bi bi-download" id="hi"></i>Download
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="notAvailable">Games not available</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
