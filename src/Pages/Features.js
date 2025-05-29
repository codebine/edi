/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
// eslint-disable-next-line jsx-a11y/heading-has-content
// eslint-disable-next-line react/jsx-no-target-blank
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";

const Features = () => {
  return (
    <div>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
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

          <a className="btn-getstarted" href="index.html#about">
            Get Started
          </a>
        </div>
      </header>

      <section id="hero" className="hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1 className="mb-4">
                  We Know Why
                  <br />
                  <span className="accent-text">You're Here </span>
                </h1>
                <p className="mb-4 mb-md-5">Features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing section light-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Pricing</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="pricing-card">
                                    <h3>Basic Plan</h3>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span className="amount">9.9</span>
                                        <span className="period">/ month</span>
                                    </div>
                                    <p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.</p>

                                    <h4>Featured Included:</h4>
                                    <ul className="features-list">
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Duis aute irure dolor
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Excepteur sint occaecat
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Nemo enim ipsam voluptatem
                                        </li>
                                    </ul>

                                    <a href="#" className="btn btn-primary">
                                        Buy Now
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>


                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="pricing-card popular">
                                    <div className="popular-badge">Most Popular</div>
                                    <h3>Standard Plan</h3>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span className="amount">19.9</span>
                                        <span className="period">/ month</span>
                                    </div>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>

                                    <h4>Featured Included:</h4>
                                    <ul className="features-list">
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Lorem ipsum dolor sit amet
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Consectetur adipiscing elit
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Sed do eiusmod tempor
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Ut labore et dolore magna
                                        </li>
                                    </ul>

                                    <a href="#" className="btn btn-light">
                                        Buy Now
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>


                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="pricing-card">
                                    <h3>Premium Plan</h3>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span className="amount">39.9</span>
                                        <span className="period">/ month</span>
                                    </div>
                                    <p className="description">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>

                                    <h4>Featured Included:</h4>
                                    <ul className="features-list">
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Temporibus autem quibusdam
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Saepe eveniet ut et voluptates
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Nam libero tempore soluta
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Cumque nihil impedit quo
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Maxime placeat facere possimus
                                        </li>
                                    </ul>

                                    <a href="#" className="btn btn-primary">
                                        Buy Now
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
    </div>
  );
};

export default Features;
