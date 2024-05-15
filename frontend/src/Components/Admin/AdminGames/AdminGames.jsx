import React, { useState, useEffect } from "react";
import "./AdminGames.css";
import { fetchAllGames } from "../../../Services/adminApi";

export default function AdminGames() {
  const [games, setGames] = useState([]);

  const DownloadSelectedApp = (apkFile) => {
    console.log(apkFile, "%%%%");
    const fileUrl = `http://localhost:4000/img/${apkFile}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    fetchAllGames().then((value) => {
      console.log(value?.data?.data, "EEEEE");
      setGames(value?.data?.data);
    });
  }, []);
  return (
    <div>
      <div class="div2" id="div2">
        <section>
          <div class="container">
            <div class="row">
              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators" id="">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
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
                <div class="carousel-inner" id="sub">
                  <div class="carousel-item active">
                    <img src="" class="d-block w-100" alt="First" />
                  </div>
                  <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="Second" />
                  </div>
                  <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="Third" />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              {games.length==0?(<p className="notAvailable">Games Not available</p>):(games.map((value, index) => (
                <div class="card" id="hdiv" key={index}>
                  <img
                    src={`http://localhost:4000/img/${value?.appIcon}`}
                    id="himg"
                    class="card-img-top"
                    alt="..." 
                  />
                  <div class="card-body">
                    <h5 class="card-title" id="hh">
                      {value?.appName}
                    </h5>
                    <br />
                    <p class="card-text">{value?.appDescription}</p>
                    <button
                      onClick={() => DownloadSelectedApp(value?.apkFile)}
                      id="hb"
                    >
                      <i class="bi bi-download" id="hi"></i>Download
                    </button>
                  </div>
                </div>
              )))}
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
