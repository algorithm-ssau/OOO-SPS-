import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./slider.css";

function SliderCarusel() {
  return (
    <section className="installations">
      <div className="container">
        <h2 className="name-installations">Используемые установки</h2>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators" id="nav-items">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" id="carousel-item">
              <a href="../installations/installation1.html"><img src="../img/install-1.png" className="d-block w-100" alt="1" /> </a>
              <div className="carousel-caption d-none d-md-block">
                <h3 id="name-item">Установка ДЭС200</h3>
              </div>
            </div>
            <div className="carousel-item" id="carousel-item">
              <a href="../installations/installation2.html"><img src="../img/install-2.png" className="d-block w-100" alt="2" /> </a>
              <div className="carousel-caption d-none d-md-block">
                <h3 id="name-item">Установка УГНС 8/20</h3>
              </div>
            </div>
            <div className="carousel-item" id="carousel-item">
              <a href="../installations/installation3.html"><img src="../img/install-3.png" className="d-block w-100" alt="3" /> </a>
              <div className="carousel-caption d-none d-md-block">
                <h3 id="name-item">Установка УГНС 8/20 насосные агрегаты</h3>
              </div>
            </div>
            <div className="carousel-item" id="carousel-item">
              <a href="../installations/installation4.html"><img src="../img/install-4.png" className="d-block w-100" alt="4" /> </a>
              <div className="carousel-caption d-none d-md-block">
                <h3 id="name-item">Установка УГНС 8/20 насосные агрегаты</h3>
              </div>
            </div>
            <div className="carousel-item" id="carousel-item">
              <a href="../installations/installation5.html"><img src="../img/install-5.png" className="d-block w-100" alt="5" /> </a>
              <div className="carousel-caption d-none d-md-block">
                <h3 id="name-item">Установка УГНС 8/20 насосные агрегаты</h3>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SliderCarusel;