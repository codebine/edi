/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
// Removed specific anchor-is-valid and heading-has-content disables,
// as the refactoring will address many of these.
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react'; // Import useState
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/main.css';
import '../css/services.css'; // Ensure this file exists and is linked

// Import images
import img1 from "../img/illustration1.svg";
import img2 from "../img/illustration2.svg";
import img3 from "../img/illustration3.svg";
import Course1 from '../img/course-01.jpg';
import Course2 from '../img/course-02.jpg';
import Course3 from '../img/course-03.jpg';
import Course4 from '../img/course-04.jpg';
import Course5 from '../img/course-05.jpg';
import Course6 from '../img/course-06.jpg';
import Features1 from '../img/features-illustration-1.webp';
import Features2 from '../img/features-illustration-2.webp';
import Features3 from '../img/features-illustration-3.webp';

const Services = () => {
  // Use state to manage the active filter
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const isCourseVisible = (courseClasses) => {
    if (activeFilter === '*') {
      return true;
    }
    // Check if the course's classes contain the active filter class
    return courseClasses.includes(activeFilter.substring(1)); // Remove the leading dot from filter
  };

  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">EDI Systems</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/About">About</NavLink></li>
                      <li><NavLink to="/Services">Services</NavLink></li>
                      <li><NavLink to="/Products">Products</NavLink></li>
                      <li><NavLink to="/Consulting">Consulting</NavLink></li>
                      <li><NavLink to="/Features">Careers</NavLink></li>
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
                <h1 className="mb-4">We Solve<br /><span className="accent-text">Business Problems</span></h1>
                <p className="mb-4 mb-md-5">
                  Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Increased padding for a better visual separation */}
      <div className="section optech-section-padding5 section-md">
        <div className="container">
          <div className="optech-section-title center">
            <h2>Our working process on how to grow your business</h2>
          </div>
          <div className="row z-index">
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="500">
              <div className="optech-numberbox-wrap">
                <div className="optech-numberbox-icon">
                  <img alt="Initiation and Planning Icon" width="228" height="220" decoding="async" src={img1} />
                </div>
                <div className="optech-numberbox-data">
                  <span>01</span>
                  <h4>Initiation &amp; Planning</h4>
                  <p>We are architects and innovation trailblazers of technological advancement.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
              <div className="optech-numberbox-wrap">
                <div className="optech-numberbox-icon">
                  <img alt="Execution and Development Icon" width="228" height="220" decoding="async" src={img2} />
                </div>
                <div className="optech-numberbox-data">
                  <span>02</span>
                  <h4>Execution &amp; Development</h4>
                  <p>We are architects and innovation trailblazers of technological advancement.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="900">
              <div className="optech-numberbox-wrap">
                <div className="optech-numberbox-icon">
                  <img alt="Testing and Maintenance Icon" width="228" height="220" decoding="async" src={img3} />
                </div>
                <div className="optech-numberbox-data">
                  <span>03</span>
                  <h4>Testing &amp; Maintenance</h4>
                  <p>We are architects and innovation trailblazers of technological advancement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Increased padding for a better visual separation */}
      <section id="features" className="features section section-md">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center">
            <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                  <h4>Modisit</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                  <h4>Praesenti</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                  <h4>Explica</h4>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade active show" id="features-tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatem dignissimos provident</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={Features1} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="features-tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Neque exercitationem debitis</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={Features2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="features-tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatibus commodi accusamu</h3>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                  </ul>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={Features3} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Increased padding for a better visual separation */}
      <section id="features-cards" className="features-cards section section-md">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-box orange">
                <i className="bi bi-award"></i>
                <h4>Corporis voluptates</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-box blue">
                <i className="bi bi-patch-check"></i>
                <h4>Explicabo consectetur</h4>
                <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-box green">
                <i className="bi bi-sunrise"></i>
                <h4>Ullamco laboris</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="feature-box red">
                <i className="bi bi-shield-check"></i>
                <h4>Labore consequatur</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section courses" id="courses" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <ul className="event_filter">
            <li>
              <a
                href="#!"
                className={activeFilter === '*' ? 'is_active' : ''}
                onClick={() => handleFilterClick('*')}
                data-filter="*"
              >
                Show All
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeFilter === '.design' ? 'is_active' : ''}
                onClick={() => handleFilterClick('.design')}
                data-filter=".design"
              >
                Webdesign
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeFilter === '.development' ? 'is_active' : ''}
                onClick={() => handleFilterClick('.development')}
                data-filter=".development"
              >
                Development
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeFilter === '.wordpress' ? 'is_active' : ''}
                onClick={() => handleFilterClick('.wordpress')}
                data-filter=".wordpress"
              >
                Wordpress
              </a>
            </li>
          </ul>
          <div className="row event_box">
            <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design ${isCourseVisible('design') ? '' : 'd-none'}`}>
              <div className="events_item">
                <div className="thumb">
                  <a><img src={Course1} alt="" /></a>
                  <span className="category">Webdesign</span>
                  <span className="price"><h6><em>$</em>160</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">Stella Blair</span>
                  <h4>Learn Web Design</h4>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development ${isCourseVisible('development') ? '' : 'd-none'}`}>
              <div className="events_item">
                <div className="thumb">
                  <a><img src={Course2} alt="" /></a>
                  <span className="category">Development</span>
                  <span className="price"><h6><em>$</em>340</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">Cindy Walker</span>
                  <h4>Web Development Tips</h4>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress ${isCourseVisible('design wordpress') ? '' : 'd-none'}`}>
              <div className="events_item">
                <div className="thumb">
                  <a><img src={Course3} alt="" /></a>
                  <span className="category">Wordpress</span>
                  <span className="price"><h6><em>$</em>640</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">David Hutson</span>
                  <h4>Latest Web Trends</h4>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development ${isCourseVisible('development') ? '' : 'd-none'}`}>
              <div className="events_item">
                <div className="thumb">
                  <a><img src={Course4} alt="" /></a>
                  <span className="category">Development</span>
                  <span className="price"><h6><em>$</em>450</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">Stella Blair</span>
                  <h4>Online Learning Steps</h4>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress development ${isCourseVisible('wordpress development') ? '' : 'd-none'}`}>
              <div className="events_item">
                <div className="thumb">
                  <a><img src={Course5} alt="" /></a>
                  <span className="category">Wordpress</span>
                  <span className="price"><h6><em>$</em>320</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">Sophia Rose</span>
                  <h4>Be a WordPress Master</h4>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress design ${isCourseVisible('wordpress design') ? '' : 'd-none'}`}>
              <div className="events_item">
                <div className="thumb">
                  <a><img src={Course6} alt="" /></a>
                  <span className="category">Webdesign</span>
                  <span className="price"><h6><em>$</em>240</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">David Hutson</span>
                  <h4>Full Stack Developer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;