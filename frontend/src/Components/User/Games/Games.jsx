import React, { useEffect, useState } from "react";
import "./Games.css";
import { getGameApps } from "../../../Services/userApi";

export default function Games() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGameApps().then((value) => {
      console.log(value.data, "Games");
      if (value.data.status) {
        setGames(value.data.data);
      }
    });
  }, []);

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
              {games.length > 0 ? (
                games.map((value,index) => (
                  <div class="card" id="hdiv" key={index}>
                    <img src={`http://localhost:4000/img/${value?.appIcon}`} id="himg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title" id="hh">
                      {value?.appName}
                      </h5>
                      <br />
                      <p class="card-text">{value?.Category}</p>
                      <button id="hb"  onClick={() => {
                          DownloadSelectedApp(value?.apkFile);
                        }}>
                        <i class="bi bi-download" id="hi"></i>Download
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
