  /* eslint-disable jsx-a11y/iframe-has-title */
  /* eslint-disable jsx-a11y/img-redundant-alt */
  /* eslint-disable jsx-a11y/heading-has-content */
  /* eslint-disable jsx-a11y/anchor-is-valid */
  import React from 'react';
  import { NavLink } from "react-router-dom";
  import "bootstrap/dist/css/bootstrap.min.css";
  import '../css/main.css';
  import '../css/about.css';

  import Carousel from 'react-bootstrap/Carousel';
  import { Row, Col } from 'react-bootstrap';

  // Import all necessary images
  import companyimage from "../img/company/company-image.jpg";
  import companyimage2 from "../img/company/company-image-2.jpg";
  import companyimage3 from "../img/company/company-image-3.jpg";
  import gallery1 from "../img/company/gallery-1.jpg";
  import gallery2 from "../img/company/gallery-2.jpg";
  import gallery3 from "../img/company/gallery-3.jpg";
  import gallery4 from "../img/company/gallery-4.jpg";
  import gallery5 from "../img/company/gallery-5.jpg";
  // Adding more images to ensure we have enough to form groups of 4 for the carousel
  import gallery6 from "../img/company/gallery-1.jpg"; // Using gallery1 again for demo
  import gallery7 from "../img/company/gallery-2.jpg"; // Using gallery2 again for demo
  import gallery8 from "../img/company/gallery-3.jpg"; // Using gallery3 again for demo
  import gallery9 from "../img/company/gallery-4.jpg"; // Using gallery4 again for demo
  import gallery10 from "../img/company/gallery-5.jpg"; // Using gallery5 again for demo
  import gallery11 from "../img/company/gallery-1.jpg"; // Using gallery1 again for demo
  import gallery12 from "../img/company/gallery-2.jpg"; // Using gallery2 again for demo

  import member1 from "../img/team/member-1.jpg";
  import member2 from "../img/team/member-2.jpg";
  import member3 from "../img/team/member-3.jpg";

  // Helper function to chunk an array into smaller arrays
  const chunkArray = (arr, chunkSize) => {
    const R = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };


  const About = () => {
    // Array of gallery images for the carousel
    const allGalleryImages = [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery6,
      gallery7,
      gallery8,
      gallery9,
      gallery10,
      gallery11,
      gallery12,
    ];

    // Chunk the images into groups of 4
    const slides = chunkArray(allGalleryImages, 4);

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
                  <h1 className="mb-4">We Love<br /><span className="accent-text">What We Do</span></h1>
                  <p className="mb-4 mb-md-5">
                    About Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-shot-info section-sm">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-20">
                <h2 className="mb-3">Who We Are ??</h2>
                <p>Parinsoft is a forward-thinking IT company committed to delivering high-quality, secure, and scalable digital solutions. </p>
                <p>Our expertise spans a wide spectrum of technologies, including Artificial Intelligence, Machine Learning, Cybersecurity, and Custom Application Development.</p>
                <p>We combine technical excellence with strategic insight to help businesses unlock new opportunities and drive innovation.</p>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <img loading="lazy" className="img-fluid" src={companyimage} alt="Company Image" />
              </div>
            </div>
          </div>
        </section>

        <section className="company-mission section-sm bg-light"> {/* or bg-secondary */}
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>To empower businesses and individuals through innovative IT solutions and transformative training programs, enabling them to thrive in an ever-evolving digital world.</p>
          <img loading="lazy" src={companyimage2} alt="Company Image 2" className="img-fluid mt-30" />
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
          <h3>Our Vision</h3>
          <p>To be a global leader in IT services, renowned for our commitment to quality, innovation, and customer satisfaction—fueling digital transformation and building a smarter, secure future.</p>
          <img loading="lazy" src={companyimage3} alt="Company Image 3" className="img-fluid mt-30" />
        </div>
      </div>
    </div>
  </section>

        <section className="call-to-action-2 section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula.</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="section gallery">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="title text-center">
                  <h2>Sneak Peak Gallery</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore numquam esse vitae recusandae qui
                    aspernatur, blanditiis, laboriosam dignissimos dolore facere provident ex? Porro, praesentium consectetur
                    tempore. Nulla, error eius dolorem.</p>
                  <div className="border"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* Bootstrap Carousel Integration with 4 images per slide and auto-scroll */}
                <Carousel
                  className="company-gallery-carousel"
                  interval={3000} // Auto-scroll every 3 seconds
                  // indicators={false} // Removed to show dots
                >
                  {slides.map((slideGroup, slideIndex) => (
                    <Carousel.Item key={slideIndex}>
                      <Row className="justify-content-center align-items-center g-0">
                        {slideGroup.map((image, imageIndex) => (
                          <Col key={imageIndex} xs={12} sm={6} md={3} className="p-1">
                            <img
                              className="d-block w-100 img-fluid"
                              src={image}
                              alt={`Gallery slide ${slideIndex * 4 + imageIndex + 1}`}
                              loading="lazy"
                              style={{ height: '200px', objectFit: 'cover' }}
                              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x300?text=Image+Error'; }}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section className="team" id="team">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="title text-center ">
                  <h2>Our Team</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi tempora obcaecati, quis
                    similique quos.</p>
                  <div className="border"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="team-member text-center">
                  <div className="member-photo">
                    <img loading="lazy" className="img-fluid" src={member1} alt="Team Member 1" />

                    <div className="mask">
                      <ul className="clearfix">
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="member-content">
                    <h3>Michael Jonson</h3>
                    <span>Head Of Marketing</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                  </div>

                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member text-center">
                  <div className="member-photo">
                    <img loading="lazy" className="img-fluid" src={member2} alt="Team Member 2" />
                    <div className="mask">
                      <ul className="clearfix">
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="member-content">
                    <h3>Carrick Mollenkamp</h3>
                    <span>Web Developer</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member text-center">
                  <div className="member-photo">
                    <img loading="lazy" className="img-fluid" src={member3} alt="Team Member 3" />

                    <div className="mask">
                      <ul className="clearfix">
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="member-content">
                    <h3>David Gauthier</h3>
                    <span>Head Of Management</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="counter-wrapper section-sm">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 text-center">
                <div className="title">
                  <h2>Award-Winning Agency</h2>
                  <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
                <div className="counters-item">
                  <i className="tf-ion-ios-alarm-outline"></i>
                  <div>
                    <span className="counter" data-count="150">0</span>
                  </div>
                  <h3>Happy Clients</h3>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
                <div className="counters-item">
                  <i className="tf-ion-ios-analytics-outline"></i>
                  <div>
                    <span className="counter" data-count="130">0</span>
                  </div>
                  <h3>Projects completed</h3>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
                <div className="counters-item">
                  <i className="tf-ion-ios-compose-outline"></i>
                  <div>
                    <span className="counter" data-count="99">0</span>
                  </div>
                  <h3>Positive feedback</h3>

                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
                <div className="counters-item kill-border">
                  <i className="tf-ion-ios-bolt-outline"></i>
                  <div>
                    <span className="counter" data-count="250">0</span>
                  </div>
                  <h3>Cups of Coffee</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* You can add content here if needed, or remove this empty section */}
        </section>

      </div>
    );
  }

  export default About;