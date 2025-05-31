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


const Products = () => {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      
                  <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 className="sitename">Parinsoft</h1>
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

              <main className='main'>
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
                <p className="mb-4 mb-md-5">Consulting</p>
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
              </main>

              <footer id="footer" className="footer">

                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span className="sitename">ParinSoft</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>A108 Adam Street</p>
                                <p>New York, NY 535022</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                                <p><strong>Email:</strong> <span>info@example.com</span></p>
                            </div>
                            <div className="social-links d-flex mt-4">
                                <a href=""><i className="bi bi-twitter-x"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Product Management</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Graphic Design</a></li>
                            </ul>
                        </div>  
                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Parinsoft</strong> <span>All Rights Reserved</span></p>
                    <div className="credits">
                    </div>
                </div>

            </footer>

      
    </div>
  );
};

export default Products;
