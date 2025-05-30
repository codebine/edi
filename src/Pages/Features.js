/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import "../css/careers.css"; // Import the CSS file

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

          <a className="btn-getstarted" href="index.html#about">
            Get Started
          </a>
        </div>
      </header>
      <div className="careers-page">
        {/* Hero Section */}
        <section className="hero-section text-center text-white d-flex align-items-center justify-content-center">
          <div className="container">
            <h1 className="display-4 mb-3">Reinvent Your World with Us</h1>
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
    </div>
  );
};

export default Features;
