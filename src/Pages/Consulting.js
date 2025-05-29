/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
// eslint-disable-next-line jsx-a11y/heading-has-content
// eslint-disable-next-line react/jsx-no-target-blank
import React from 'react';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/main.css'
import '../css/services.css'
import '../css/consulting.css'

const Consulting = () => {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            {/* <img src="assets/img/logo.png" alt=""/> */}
            <h1 className="sitename">EDI Systems</h1>
          </a>

          <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a> <NavLink to="/" >Home</NavLink></a></li>
                            <li><a ><NavLink to="/About">About</NavLink></a></li>
                            <li><a > <NavLink to="/Services">Services</NavLink></a></li>
                            <li><a ><NavLink to="/Products">Products</NavLink></a></li>
                            <li><a ><NavLink to="/Consulting">Consulting</NavLink></a></li>
                            <li><a > <NavLink to="/Features">Careers</NavLink></a></li>
                            <li><NavLink to="/Contact">Contact</NavLink></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

          <a className="btn-getstarted" href="index.html#about">Get Started</a>

        </div>
      </header>

                   <section id="hero" className="hero section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                                    <h1 className="mb-4">We Know Why<br /><span className="accent-text">You're Here </span></h1>
                                    <p className="mb-4 mb-md-5">
                                       Consulting
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </section>


     <div className="bg-light1">
        <div class="sectin  optech-section-padding">
          <div class="container">
            <div class="optech-section-title center">
              {/* <h2>Our awesome services to give you success</h2> */}
            </div>
          </div>
          <div class="swiper-wrapper justify-content-center">
            <div class="swiper-slide swiper-slide-active" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="0">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <i class="fa fa-grav" aria-hidden="true"></i>

                </div>
                <div class="optech-iconbox-data">
                  <h5>Healthcare<br /> IT</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-next" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="1">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon5.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>IT Management <br /> Service</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="2">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon6.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>UI/UX &amp; Br/anding <br /> Identity</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="3">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon7.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>Web &amp; Mobile App <br /> Development</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-wrapper justify-content-center mt-5">
            <div class="swiper-slide swiper-slide-active" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="0">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <i class="fa fa-grav" aria-hidden="true"></i>

                </div>
                <div class="optech-iconbox-data">
                  <h5>Data Tracking <br /> Security</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-next" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="1">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon5.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>IT Management <br /> Service</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="2">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon6.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>UI/UX &amp; Br/anding <br /> Identity</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="3">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon7.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>Web &amp; Mobile App <br /> Development</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consulting
