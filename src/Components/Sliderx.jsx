import React, { useState, useEffect } from 'react';
import sliderImage1 from '../assets/slider/slider1.jpg';
import sliderImage2 from '../assets/slider/slider2.jpg';
import sliderImage4 from '../assets/slider/slider3.jpg';

import sliderImage3 from '../assets/slider/sliderRest1.jpg';
import {Routes,Route,Link,NavLink} from "react-router-dom"



function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex === 3 ? 1 : slideIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const plusSlide = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex < 1) {
        return 3;
      } else if (newIndex > 3) {
        return 1;
      } else {
        return newIndex;
      }
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[n - 1].style.display = "flex";
    dots[n - 1].className += " active";
  };

  return (
    <section className="slider">
      <div className="slider-elements">
        <div className={slideIndex === 1 ? "slider-item fade" : "slider-item fade hidden"}>
          <div className="slider-image">
            <img src={sliderImage1} className="img-fluid" alt="" />
          </div>
          <div className="container">
            <p className="slider-title text-white">CANBURGER</p>
            <h2 className="slider-heading text-white">EN IYI LEZZET</h2>
            <Link to={'/menu'} className="button btn btn-lg btn-dark mt slider-link">Menüye Git </Link>
          </div>
        </div>
        <div className={slideIndex === 2 ? "slider-item fade" : "slider-item fade hidden"}>
          <div className="slider-image">
            <img src={sliderImage4} className="img-fluid" alt="" />
          </div>
          <div className="container">
            <p className="slider-title text-white">CANBURGER</p>
            <h2 className="slider-heading text-white">ÖZEL SOSLAR</h2>
            <Link to={'/hakkimizda'} className="button btn btn-lg btn-dark mt">Bizi Keşfet</Link>
          </div>
        </div>
        <div className={slideIndex === 3 ? "slider-item fade" : "slider-item fade hidden"}>
          
          <div className="slider-image">
            <img src={sliderImage3} className="img-fluid" alt="" />
          </div>
          <div className="container">
            <p className="slider-title text-white">CANBURGER</p>
            <h2 className="slider-heading text-white">SINIRSIZ INDIRIM</h2>
            <a href="#" className="button btn btn-lg btn-dark mt">Bize Ulaş</a>
          </div>
        </div>

        <div className="slider-buttons">
          <button onClick={() => plusSlide(-1)}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={() => plusSlide(1)}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button className={slideIndex === 1 ? "slider-dot active" : "slider-dot"} onClick={() => currentSlide(1)}>
            <span></span>
          </button>
          <button className={slideIndex === 2 ? "slider-dot active" : "slider-dot"} onClick={() => currentSlide(2)}>
            <span></span>
          </button>
          <button className={slideIndex === 3 ? "slider-dot active" : "slider-dot"} onClick={() => currentSlide(3)}>
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
