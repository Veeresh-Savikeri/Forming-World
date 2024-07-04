import React from "react";
import '../css/WetherForcast.css'
export default function WetherForcast() {
  return (
    <div>
      <div
        id="weatherCarousel"
        className="carousel slide m-5"
        data-mdb-ride="carousel"
        data-mdb-carousel-init
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#weatherCarousel"
            data-mdb-slide-to="0"
            className="active bg-secondary"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#weatherCarousel"
            data-mdb-slide-to="1"
            className="bg-secondary"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#weatherCarousel"
            data-mdb-slide-to="2"
            className="bg-secondary"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner rounded-5">
          <div className="carousel-item active">
            <div
              className="d-flex justify-content-between align-items-center px-5 gradient-custom"
              style={{height: "230px"}}
            >
              <div>
                <h2 className="text-dark display-2">
                  <strong>23°C</strong>
                </h2>
                <p className="text-dark mb-0">Coimbra, Portugal</p>
              </div>
              <div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                  width="150px"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-flex justify-content-around text-center align-items-center px-5 bg-body-tertiary"
              style={{height: "230px"}}
            >
              <div className="flex-column">
                <p className="small">
                  <strong>21°C</strong>
                </p>
                <i className="fas fa-sun fa-2x mb-3" style={{color: "#ddd"}}></i>
                <p className="mb-0">
                  <strong>12:00</strong>
                </p>
                <p className="mb-0 text-muted" style={{fontSize: ".65rem"}}>
                  PM
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>2°C</strong>
                </p>
                <i className="fas fa-sun fa-2x mb-3" style={{color: "#ddd"}}></i>
                <p className="mb-0">
                  <strong>1:00</strong>
                </p>
                <p className="mb-0 text-muted" style={{fontSize: ".65rem"}}>
                  PM
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>20°C</strong>
                </p>
                <i className="fas fa-cloud fa-2x mb-3" style={{color: "#ddd"}}></i>
                <p className="mb-0">
                  <strong>2:00</strong>
                </p>
                <p className="mb-0 text-muted" style={{fontSize: ".65rem"}}>
                  PM
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>19°C</strong>
                </p>
                <i className="fas fa-cloud fa-2x mb-3" style={{color:"#ddd"}}></i>
                <p className="mb-0">
                  <strong>3:00</strong>
                </p>
                <p className="mb-0 text-muted" style={{fontSize: ".65rem"}}>
                  PM
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>18°C</strong>
                </p>
                <i
                  className="fas fa-cloud-showers-heavy fa-2x mb-3"
                  style={{color: "#ddd"}}
                ></i>
                <p className="mb-0">
                  <strong>4:00</strong>
                </p>
                <p className="mb-0 text-muted" style={{fontSize: ".65rem"}}>
                  PM
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-flex justify-content-around text-center align-items-center px-5 bg-body-tertiary"
              style={{height: "230px"}}
            >
              <div className="flex-column">
                <p className="small">
                  <strong>21°C</strong>
                </p>
                <i className="fas fa-sun fa-2x mb-3" style={{color: "#ddd"}}></i>
                <p className="mb-0">
                  <strong>Mon</strong>
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>20°C</strong>
                </p>
                <i className="fas fa-sun fa-2x mb-3" style={{color: "#ddd"}}></i>
                <p className="mb-0">
                  <strong>Tue</strong>
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>16°C</strong>
                </p>
                <i className="fas fa-cloud fa-2x mb-3" style={{color: "#ddd"}}></i>
                <p className="mb-0">
                  <strong>Wed</strong>
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>17°C</strong>
                </p>
                <i className="fas fa-cloud fa-2x mb-3" style={{color: "#ddd"}}></i>
                <p className="mb-0">
                  <strong>Thu</strong>
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>18°C</strong>
                </p>
                <i
                  className="fas fa-cloud-showers-heavy fa-2x mb-3"
                  style={{color:"#ddd"}}
                ></i>
                <p className="mb-0">
                  <strong>Fri</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
