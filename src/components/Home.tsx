import React from 'react';
import './Home.css';
import LogoImage from '../assets/images/logo-noBg.png';
export default function Home() {
  return (
    <>
      <section className="showcase">
        <div className="video-container">
          <video
            src="https://res.cloudinary.com/dnrxmm7a0/video/upload/v1605694748/levelfoil/LEVELED_Promo.mp4-_lmav7q.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="content">
          <img src={LogoImage} alt="logo" />
          <h3>The future is here</h3>
          <a href="#about" className="btn">
            More Info
          </a>
        </div>
      </section>

      <section id="about">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, qui.
        </p>

        <h2>Follow Us On Social Media</h2>

        <div className="social">
          <a href="#" target="">
            <i className="fab fa-twitter fa-3x"></i>
          </a>
          <a href="#" target="">
            <i className="fab fa-facebook fa-3x"></i>
          </a>
          <a href="#" target="">
            <i className="fab fa-instagram fa-3x"></i>
          </a>
        </div>
      </section>
    </>
  );
}
