/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "../css/careers.css"; // Import the CSS file
import Logo from "../img/ParinSoft.png";
const Features = () => {
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

          {/* "Get Started" button. Consider using NavLink or Link if it's an internal route. */}
          <a className="btn-getstarted" href="#about">
            Get Started
          </a>
        </div>
      </header>

      <main className="main">
        <div className="careers-page">
          {/* Hero Section */}
          <section className="hero-section text-center text-white d-flex align-items-center justify-content-center">
            <div className="container">
              <h1 className="display-4 mb-3 mt-5">Reinvent Your World with Us</h1>
              <p className="lead mb-4">
                Join a global team that's passionate about innovation, impact, and
                growth.
              </p>
              <a href="#job-openings" className="btn btn-primary btn-lg">
                Explore Job Openings
              </a>
            </div>
          </section>

          {/* Why Join Us Section */}
          <section className="why-join-us py-5">
            <div className="container">
              <h2 className="text-center mb-5">Why Join Our Team?</h2>
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 p-4 shadow-sm">
                    <i className="bi bi-briefcase-fill icon-large mb-3"></i>
                    <h5 className="card-title">Impactful Work</h5>
                    <p className="card-text">
                      Contribute to cutting-edge projects that make a real
                      difference in the world.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 p-4 shadow-sm">
                    <i className="bi bi-graph-up icon-large mb-3"></i>
                    <h5 className="card-title">Growth & Development</h5>
                    <p className="card-text">
                      Access continuous learning, mentorship programs, and clear
                      career paths.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 p-4 shadow-sm">
                    <i className="bi bi-people-fill icon-large mb-3"></i>
                    <h5 className="card-title">Inclusive Culture</h5>
                    <p className="card-text">
                      Thrive in a diverse, collaborative, and supportive work
                      environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Culture Section */}
          <section className="company-culture py-5 bg-light">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src="https://via.placeholder.com/600x400?text=Our+Team"
                    alt="Our Team"
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="mb-4">
                    Our Culture: Where Innovation Meets Well-being
                  </h2>
                  <p>
                    At our company, we believe that a strong culture is the
                    foundation of success. We foster an environment of openness,
                    respect, and continuous feedback. Our people-centered approach
                    extends to comprehensive well-being programs, ensuring that
                    every employee has the support and space to thrive.
                  </p>
                  <p>
                    We celebrate diversity and encourage every individual to bring
                    their authentic self to work, contributing to a vibrant and
                    dynamic workplace where everyone belongs.
                  </p>
                  <a href="#" className="btn btn-outline-secondary mt-3">
                    Learn More About Life at Our Company
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="benefits-section py-5">
            <div className="container">
              <h2 className="text-center mb-5">Benefits & Perks</h2>
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="benefit-item text-center p-4">
                    <i className="bi bi-heart-pulse icon-medium mb-3"></i>
                    <h5>Health & Wellness</h5>
                    <p>
                      Comprehensive health insurance plans, wellness programs, and
                      mental health support.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="benefit-item text-center p-4">
                    <i className="bi bi-wallet-fill icon-medium mb-3"></i>
                    <h5>Financial Security</h5>
                    <p>
                      Competitive salaries, retirement savings plans, and
                      performance-based incentives.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="benefit-item text-center p-4">
                    <i className="bi bi-clock-history icon-medium mb-3"></i>
                    <h5>Work-Life Balance</h5>
                    <p>
                      Flexible work arrangements, generous paid time off, and
                      parental leave.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="benefit-item text-center p-4">
                    <i className="bi bi-book-fill icon-medium mb-3"></i>
                    <h5>Professional Development</h5>
                    <p>
                      Access to training, certifications, and mentorship to
                      advance your career.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="benefit-item text-center p-4">
                    <i className="bi bi-geo-alt-fill icon-medium mb-3"></i>
                    <h5>Global Opportunities</h5>
                    <p>
                      Chances to work on diverse projects and collaborate with
                      international teams.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="benefit-item text-center p-4">
                    <i className="bi bi-trophy-fill icon-medium mb-3"></i>
                    <h5>Recognition & Awards</h5>
                    <p>
                      We celebrate innovation and hard work through various
                      recognition programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Openings Section */}
          <section id="job-openings" className="job-openings py-5 bg-light">
            <div className="container">
              <h2 className="text-center mb-5">Current Job Openings</h2>
              <div className="row justify-content-center mb-4">
                <div className="col-md-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by keyword, role, or location..."
                      aria-label="Job search"
                    />
                    <button className="btn btn-primary" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Placeholder Job Listings */}
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Software Engineer</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Bengaluru, India
                      </h6>
                      <p className="card-text">
                        Develop and maintain robust software solutions for our
                        enterprise clients.
                      </p>
                      <a href="#" className="card-link">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Data Scientist</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Hyderabad, India
                      </h6>
                      <p className="card-text">
                        Analyze complex datasets to extract insights and build
                        predictive models.
                      </p>
                      <a href="#" className="card-link">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Marketing Specialist</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        New York, USA
                      </h6>
                      <p className="card-text">
                        Develop and execute marketing strategies to enhance brand
                        visibility.
                      </p>
                      <a href="#" className="card-link">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center mt-4">
                  <a href="#" className="btn btn-outline-primary">
                    View All Openings
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section py-5">
            <div className="container">
              <h2 className="text-center mb-5">Hear From Our Employees</h2>
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 p-4 shadow-sm">
                    <blockquote className="blockquote mb-0">
                      <p className="mb-0">
                        "The learning opportunities here are unparalleled. I've
                        grown so much professionally."
                      </p>
                      <footer className="blockquote-footer mt-2">
                        <cite title="Source Title">
                          Jane Doe, Senior Developer
                        </cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 p-4 shadow-sm">
                    <blockquote className="blockquote mb-0">
                      <p className="mb-0">
                        "The supportive culture and emphasis on well-being truly
                        make a difference."
                      </p>
                      <footer className="blockquote-footer mt-2">
                        <cite title="Source Title">
                          John Smith, Project Manager
                        </cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 p-4 shadow-sm">
                    <blockquote className="blockquote mb-0">
                      <p className="mb-0">
                        "I love working on impactful projects with a diverse and
                        talented team."
                      </p>
                      <footer className="blockquote-footer mt-2">
                        <cite title="Source Title">
                          Emily White, Data Analyst
                        </cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action for Talent Network/Alerts */}
          <section className="talent-network-cta py-5 bg-dark text-white text-center">
            <div className="container">
              <h2 className="mb-4">
                Don't See Your Role? Join Our Talent Network!
              </h2>
              <p className="lead mb-4">
                Stay updated on new openings and career news that match your
                interests.
              </p>
              <button className="btn btn-light btn-lg me-3">
                Register for Job Alerts
              </button>
              <button className="btn btn-outline-light btn-lg">
                Join Our Talent Network
              </button>
            </div>
          </section>
        </div>
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

export default Features;
