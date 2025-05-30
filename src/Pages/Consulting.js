/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css"; // Assuming this has global styles
import "../css/consulting.css"; // Specific styles for this page

const Consulting = () => {
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
              
      <div className="consulting-page">
      {/* Hero Section */}
      <section className="consulting-hero text-white d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-3">
            Strategic Consulting for a{" "}
            <span className="accent-text-hero">Dynamic Future</span>
          </h1>
          <p className="lead mb-4">
            Partner with EDI Systems to navigate complexities, unlock growth,
            and achieve sustainable success.
          </p>
          <NavLink
            to="/Contact"
            className="btn btn-primary btn-lg custom-hero-btn"
          >
            Request a Consultation
          </NavLink>
        </div>
      </section>

      {/* What We Do / Introduction Section */}
      <section className="what-we-do section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title mb-4">
                Empowering Your Business Through Insight and Innovation
              </h2>
              <p className="lead mb-4">
                At EDI Systems, our consulting services are designed to help
                organizations of all sizes overcome challenges, seize
                opportunities, and drive meaningful transformation. We combine
                deep industry knowledge with cutting-edge technological
                expertise to deliver actionable strategies and measurable
                results.
              </p>
              <p>
                Whether you're looking to redefine your digital strategy,
                optimize operations, or enhance organizational efficiency, our
                expert consultants provide tailored solutions that align with
                your unique business objectives. We work closely with you every
                step of the way, ensuring sustainable impact and lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise / Services Offered */}
      <section className="our-expertise section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h2 className="section-title mb-3">
                Our Core Consulting Service Areas
              </h2>
              <p className="section-subtitle">
                Leverage our specialized knowledge across critical domains to
                propel your business forward.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="service-card p-4 h-100 shadow-sm rounded">
                {/* Placeholder for visual: You can add an icon or a colored div here */}
                <div className="service-icon-placeholder mb-3">
                  <i className="bi bi-briefcase-fill service-icon"></i>
                </div>
                <h3 className="card-title-consulting">Strategic Advisory</h3>
                <p>
                  Develop robust business strategies, market entry plans, and
                  growth initiatives tailored to your ambitions.
                </p>
                <ul className="list-unstyled service-points">
                  <li>
                    <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                    Market Analysis & Positioning
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                    Growth & Diversification Strategies
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                    Organizational Transformation
                  </li>
                </ul>
                <NavLink to="/Services#strategy" className="learn-more-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card p-4 h-100 shadow-sm rounded">
                {/* Placeholder for visual: You can add an icon or a colored div here */}
                <div className="service-icon-placeholder mb-3">
                  <i className="bi bi-cloud-arrow-up-fill service-icon"></i>
                </div>
                <h3 className="card-title-consulting">
                  Digital & Technology Consulting
                </h3>
                <p>
                  Harness the power of digital innovation to streamline
                  operations, enhance customer experience, and build
                  future-ready solutions.
                </p>
                <ul className="list-unstyled service-points">
                  <li>
                    <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                    Digital Transformation Roadmaps
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                    Cloud & Infrastructure Advisory
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                    Cybersecurity Strategy
                  </li>
                </ul>
                <NavLink to="/Services#digital" className="learn-more-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card p-4 h-100 shadow-sm rounded">
                {/* Placeholder for visual: You can add an icon or a colored div here */}
                <div className="service-icon-placeholder mb-3">
                  <i className="bi bi-gear-fill service-icon"></i>
                </div>
                <h3 className="card-title-consulting">
                  Operational Excellence
                </h3>
                <p>
                  Optimize your core processes, improve efficiency, and drive
                  cost-effectiveness across your entire value chain.
                </p>
                <ul className="list-unstyled service-points">
                  <li>
                    <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                    Process Optimization & Automation
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                    Supply Chain Management
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill me-2 text-primary"></i>
                    Performance Improvement
                  </li>
                </ul>
                <NavLink to="/Services#operations" className="learn-more-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <NavLink to="/Services" className="btn btn-outline-primary btn-lg">
              View All Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach section-padding bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title mb-4">
                Our Collaborative Approach to Your Success
              </h2>
              <p className="lead">
                We believe that the best solutions emerge from deep
                collaboration and a thorough understanding of your unique
                context.
              </p>
              <div className="approach-steps mt-4">
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-lightbulb-fill icon-circle me-3 flex-shrink-0"></i>
                  <div>
                    <h5>1. Discover & Diagnose</h5>
                    <p>
                      Thorough analysis of your challenges, opportunities, and
                      strategic goals.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-tools icon-circle me-3 flex-shrink-0"></i>
                  <div>
                    <h5>2. Design & Strategize</h5>
                    <p>
                      Co-create tailored solutions and actionable roadmaps with
                      your team.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-lightning-charge-fill icon-circle me-3 flex-shrink-0"></i>
                  <div>
                    <h5>3. Implement & Execute</h5>
                    <p>
                      Support seamless execution and integration for tangible
                      impact.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <i className="bi bi-graph-up-arrow icon-circle me-3 flex-shrink-0"></i>
                  <div>
                    <h5>4. Measure & Evolve</h5>
                    <p>
                      Monitor progress, measure ROI, and adapt strategies for
                      continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center approach-visual-placeholder">
              {/* This div serves as a placeholder for an image or a complex graphic */}
              <div className="approach-graphic-area rounded shadow-lg d-flex align-items-center justify-content-center">
                <i
                  className="bi bi-arrow-right-circle-fill text-white"
                  style={{ fontSize: "4rem" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Case Studies */}
      <section className="success-stories section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h2 className="section-title mb-3">
                Real Impact: Our Success Stories
              </h2>
              <p className="section-subtitle">
                See how our strategic insights have driven measurable results
                for our clients.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="case-study-card h-100 shadow-sm rounded">
                <div className="case-study-img-placeholder rounded-top"></div>{" "}
                {/* Placeholder for image */}
                <div className="p-4">
                  <h4 className="case-study-title">
                    Streamlining Operations for a Global Manufacturer
                  </h4>
                  <p className="case-study-desc">
                    Helped a leading manufacturer reduce operational costs by
                    25% and improve supply chain efficiency through process
                    automation and data analytics.
                  </p>
                  <p className="case-study-result text-primary fw-bold">
                    Result: 25% Cost Reduction & 15% Efficiency Gain
                  </p>
                  <NavLink to="/CaseStudies#case1" className="learn-more-link">
                    Read Full Case Study <i className="bi bi-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="case-study-card h-100 shadow-sm rounded">
                <div className="case-study-img-placeholder rounded-top"></div>{" "}
                {/* Placeholder for image */}
                <div className="p-4">
                  <h4 className="case-study-title">
                    Accelerating Digital Transformation for a Retail Giant
                  </h4>
                  <p className="case-study-desc">
                    Guided a major retail company through a comprehensive
                    digital transformation, leading to enhanced customer
                    engagement and new revenue streams.
                  </p>
                  <p className="case-study-result text-primary fw-bold">
                    Result: 40% Increase in Online Engagement
                  </p>
                  <NavLink to="/CaseStudies#case2" className="learn-more-link">
                    Read Full Case Study <i className="bi bi-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <NavLink
              to="/CaseStudies"
              className="btn btn-outline-secondary btn-lg"
            >
              View All Case Studies
            </NavLink>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="client-testimonials section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h2 className="section-title mb-3">What Our Clients Say</h2>
              <p className="section-subtitle">
                Hear directly from the businesses we've helped achieve their
                strategic objectives.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="testimonial-card p-4 h-100 shadow-sm rounded">
                <i className="bi bi-quote quote-icon mb-3"></i>
                <p className="testimonial-text">
                  "EDI Systems transformed our approach to digital strategy.
                  Their insights were invaluable, leading to significant
                  improvements in our market position."
                </p>
                <div className="testimonial-author mt-4">
                  <h5>Jane Doe</h5>
                  <p className="text-muted mb-0">CEO, Tech Innovators Inc.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="testimonial-card p-4 h-100 shadow-sm rounded">
                <i className="bi bi-quote quote-icon mb-3"></i>
                <p className="testimonial-text">
                  "The operational efficiencies they helped us achieve were
                  beyond expectation. A truly dedicated and expert team."
                </p>
                <div className="testimonial-author mt-4">
                  <h5>John Smith</h5>
                  <p className="text-muted mb-0">
                    Operations Director, Global Manufacturing Co.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="testimonial-card p-4 h-100 shadow-sm rounded">
                <i className="bi bi-quote quote-icon mb-3"></i>
                <p className="testimonial-text">
                  "Their strategic advisory was critical for our recent
                  expansion. We now have a clear roadmap for future growth."
                </p>
                <div className="testimonial-author mt-4">
                  <h5>Emily White</h5>
                  <p className="text-muted mb-0">
                    Founder, E-commerce Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alliances / Partners Section */}
      <section className="strategic-alliances section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h2 className="section-title mb-3">Our Strategic Alliances</h2>
              <p className="section-subtitle">
                We collaborate with leading technology providers and industry
                experts to bring you integrated, best-in-class solutions.
              </p>
            </div>
          </div>
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
          <div className="text-center mt-5">
            <p>
              Interested in partnering with us?{" "}
              <NavLink to="/Contact" className="text-primary fw-bold">
                Let's connect
              </NavLink>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="final-cta py-5 text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="lead mb-4">
            Our team of expert consultants is eager to understand your
            challenges and craft solutions for your success.
          </p>
          <NavLink to="/Contact" className="btn btn-light btn-lg">
            Start Your Transformation Today
          </NavLink>
        </div>
      </section>
    </div>
    </div>
    
  );
};

export default Consulting;
