/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
// eslint-disable-next-line jsx-a11y/heading-has-content
// eslint-disable-next-line react/jsx-no-target-blank
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";

import Logo from "../img/ParinSoft.png";
const Contact = () => {
  // State to control the visibility of the mobile navigation menu.
  // When true, the 'mobile-nav-active' class will be added to the body.
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // State to control the 'scrolled' class for the header,
  // typically used for sticky header effects (e.g., changing background).
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect hook to add/remove the 'mobile-nav-active' class to the <body> element.
  // Your provided CSS relies on this class on the body to show/hide the mobile menu.
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }

    // Cleanup function: Ensures the class is removed if the component unmounts
    // while the mobile nav is still open.
    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [isMobileNavOpen]); // Dependency array: re-run this effect when isMobileNavOpen changes.

  // Function to toggle the mobile navigation state.
  // This will be called when the hamburger icon is clicked.
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Function to close the mobile navigation.
  // This will be called when any NavLink inside the mobile menu is clicked,
  // improving the user experience by automatically closing the menu.
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  // useEffect hook to handle the 'scrolled' state based on window scroll position.
  // This adds a 'scrolled' class to the header when the user scrolls down.
  useEffect(() => {
    const handleScroll = () => {
      // Check if the vertical scroll position is greater than 0
      if (window.scrollY > 0) {
        setIsScrolled(true); // Set scrolled state to true
      } else {
        setIsScrolled(false); // Set scrolled state to false
      }
    };

    // Add the scroll event listener when the component mounts.
    window.addEventListener('scroll', handleScroll);

    // Cleanup function: Remove the scroll event listener when the component unmounts
    // to prevent memory leaks.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        id="header"
        // Dynamically add the 'scrolled' class if isScrolled state is true
        className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          {/* Logo and site name, using NavLink for internal routing */}
          <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            {/* Ensure the Logo path is correct. If Logo import is commented, you can use a placeholder image URL: */}
            <img src={Logo} alt="ParinSoft Logo" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x40/cccccc/333333?text=Logo" }} />
            {/* If you want to display the site name, uncomment this: */}
            {/* <h1 className="sitename">ParinSoft</h1> */}
          </NavLink>

          {/* Main navigation menu */}
          <nav id="navmenu" className="navmenu">
            <ul>
              {/* Navigation links, each with an onClick to close the mobile menu */}
              <li>
                <NavLink to="/" onClick={closeMobileNav}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" onClick={closeMobileNav}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services" onClick={closeMobileNav}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/Products" onClick={closeMobileNav}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/Consulting" onClick={closeMobileNav}>
                  Consulting
                </NavLink>
              </li>
              <li>
                <NavLink to="/Features" onClick={closeMobileNav}>
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" onClick={closeMobileNav}>
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* Mobile navigation toggle icon (hamburger menu).
                        The 'd-xl-none' class from Bootstrap hides it on extra-large screens.
                        The 'bi bi-list' are Bootstrap Icons.
                        onClick handler triggers the mobile menu open/close. */}
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={toggleMobileNav}
            ></i>
          </nav>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="hero-content mt-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h1 className="mb-4">
                    Let Us Know What
                    <br />
                    <span className="accent-text">You're Looking For</span>
                  </h1>
                  <p className="mb-4 mb-md-5">Get in Touch</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="contact" className="contact section my-5" style={{ marginTop: "120px !important" }}>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <iframe
                style={{ border: 0, width: "100%", height: "270px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameborder="0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required=""
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
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

export default Contact;
