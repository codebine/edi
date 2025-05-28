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
import thumb1 from "../img/thumb1.png";
import thumb2 from "../img/thumb2.png";
import shape1 from "../img/shape1.svg";
import shape2 from "../img/shape2.svg";
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
              <li><a> <NavLink to="/">Home</NavLink></a></li>
              <li><a ><NavLink to="/About" className="active">About</NavLink></a></li>
              <li><a > <NavLink to="/Services">Services</NavLink></a></li>
              <li><a > <NavLink to="/Features">Features</NavLink></a></li>
              <li><a ><NavLink to="/Consulting">Consulting</NavLink></a></li>
              <li><a ><NavLink to="/Products">Products</NavLink></a></li>
              {/* <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li> */}
              <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a className="btn-getstarted" href="index.html#about">Get Started</a>

        </div>
      </header>

      <section class="single-page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Our Services</h2>
              <ol class="breadcrumb header-bradcrumb justify-content-center">
                <li class="breadcrumb-item"><a href="index.html" class="text-white">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Our Services</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div class="section large-padding-tb overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="optech-thumb extra-mr">
                <img
                  data-aos="fade-up"
                  data-aos-duration="600"
                  alt="Main IT Solutions Thumbnail"
                  class="h-auto w-100 aos-init aos-animate"
                  sizes="100vw"
                  decoding="async"
                  src={thumb1}
                />
                <div
                  class="optech-thumb-position aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <img
                    alt="Additional IT Solutions Thumbnail"
                    class="h-auto w-100"
                    decoding="async"
                    src={thumb2}
                  />
                </div>
                <div class="optech-shape1">
                  <img
                    alt="Decorative Shape 1"
                    width="133"
                    height="200"
                    decoding="async"
                    src={shape1}
                  />
                </div>
                <div class="optech-shape2">
                  <img
                    alt="Decorative Shape 2"
                    width="104"
                    height="107"
                    decoding="async"
                    src={shape2}
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-end">
              <div class="optech-default-content ml40">
                <h2>More than 25+ years we provide IT solutions</h2>
                <h5>
                  During this time, we’ve built a reputation for excellent
                  client satisfaction as evidenced by our achievements.
                </h5>
                <p>
                  Each demo built with Teba will look unique. You can customize
                  almost any aspect of your website's appearance with just a few
                  clicks. Each demo built with Teba will offer a different
                  design.
                </p>
                <div class="optech-extra-mt">
                  <a
                    class="optech-default-btn"
                    data-text="More About Us"
                    href="/about-us"
                  >
                    <span class="btn-wraper">More About Us</span>
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
