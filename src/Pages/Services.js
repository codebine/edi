/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
// eslint-disable-next-line jsx-a11y/heading-has-content
// eslint-disable-next-line react/jsx-no-target-blank
import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/main.css'
import '../css/services.css'

import img1 from "../img/illustration1.svg"
import img2 from "../img/illustration2.svg"
import img3 from "../img/illustration3.svg"
import Course1 from '../img/course-01.jpg';
import Course2 from '../img/course-02.jpg';
import Course3 from '../img/course-03.jpg';
import Course4 from '../img/course-04.jpg';
import Course5 from '../img/course-05.jpg';
import Course6 from '../img/course-06.jpg';
const Services = () => {
  useEffect(() => {
    const filterLinks = document.querySelectorAll('.event_filter a');
    const courseBoxes = document.querySelectorAll('.event_box .event_outer');

    filterLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        // Remove active class from all
        filterLinks.forEach(l => l.classList.remove('is_active'));
        link.classList.add('is_active');

        const filter = link.getAttribute('data-filter');

        courseBoxes.forEach(box => {
          if (filter === '*') {
            box.style.display = 'block';
          } else if (box.classList.contains(filter.substring(1))) {
            box.style.display = 'block';
          } else {
            box.style.display = 'none';
          }
        });
      });
    });

    // Cleanup listeners on unmount
    return () => {
      filterLinks.forEach(link => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);
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

      <div class="section optech-section-padding5">
        <div class="container">
          <div class="optech-section-title center">
            <h2>Our working process on how to grow your business</h2>
          </div>
          <div class="row z-index">
            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="500">
              <div class="optech-numberbox-wrap">
                <div class="optech-numberbox-icon">
                  <img alt="Initiation and Planning Icon" width="228" height="220" decoding="async" src={img1} />
                </div>
                <div class="optech-numberbox-data">
                  <span>01</span>
                  <h4>Initiation &amp; Planning</h4>
                  <p>We are architects and innovation trailblazers of technological advancement.</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
              <div class="optech-numberbox-wrap">
                <div class="optech-numberbox-icon">
                  <img alt="Execution and Development Icon" width="228" height="220" decoding="async" src={img2} />
                </div>
                <div class="optech-numberbox-data">
                  <span>02</span>
                  <h4>Execution &amp; Development</h4>
                  <p>We are architects and innovation trailblazers of technological advancement.</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="900">
              <div class="optech-numberbox-wrap">
                <div class="optech-numberbox-icon">
                  <img alt="Testing and Maintenance Icon" width="228" height="220" decoding="async" src={img3} />
                </div>
                <div class="optech-numberbox-data">
                  <span>03</span>
                  <h4>Testing &amp; Maintenance</h4>
                  <p>We are architects and innovation trailblazers of technological advancement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <a className="is_active" href="#!" data-filter="*">Show All</a>
            </li>
            <li>
              <a href="#!" data-filter=".design">Webdesign</a>
            </li>
            <li>
              <a href="#!" data-filter=".development">Development</a>
            </li>
            <li>
              <a href="#!" data-filter=".wordpress">Wordpress</a>
            </li>
          </ul>
          <div className="row event_box">
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
              <div className="events_item">
                <div className="thumb">
                  <a ><img src={Course1} alt="" /></a>
                  <span className="category">Webdesign</span>
                  <span className="price"><h6><em>$</em>160</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">Stella Blair</span>
                  <h4>Learn Web Design</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  development">
              <div className="events_item">
                <div className="thumb">
                  <a ><img src={Course2} alt="" /></a>
                  <span className="category">Development</span>
                  <span className="price"><h6><em>$</em>340</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">Cindy Walker</span>
                  <h4>Web Development Tips</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress">
              <div className="events_item">
                <div className="thumb">
                  <a ><img src={Course3} alt="" /></a>
                  <span className="category">Wordpress</span>
                  <span className="price"><h6><em>$</em>640</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">David Hutson</span>
                  <h4>Latest Web Trends</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
              <div className="events_item">
                <div className="thumb">
                  <a ><img src={Course4} alt="" /></a>
                  <span className="category">Development</span>
                  <span className="price"><h6><em>$</em>450</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">Stella Blair</span>
                  <h4>Online Learning Steps</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress development">
              <div className="events_item">
                <div className="thumb">
                  <a ><img src={Course5} alt="" /></a>
                  <span className="category">Wordpress</span>
                  <span className="price"><h6><em>$</em>320</h6></span>
                </div>
                <div className="down-content">
                  <span className="author">Sophia Rose</span>
                  <h4>Be a WordPress Master</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress design">
              <div className="events_item">
                <div className="thumb">
                  <a ><img src={Course6} alt="" /></a>
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
  )
}

export default Services
