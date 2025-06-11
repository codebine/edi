/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
// eslint-disable-next-line jsx-a11y/heading-has-content
// eslint-disable-next-line react/jsx-no-target-blank
import React , { useEffect }from 'react'
import { NavLink } from "react-router-dom";
import PureCounter from '@srexi/purecounterjs';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/main.css'
import Illustration1 from '../img/illustration-1.webp';
import Features1 from '../img/features-illustration-1.webp';
import Features2 from '../img/features-illustration-2.webp';
import Features3 from '../img/features-illustration-3.webp';
// import avatar1 from '../img/avatar-1.webp';
// import avatar2 from '../img/avatar-2.webp';
// import avatar3 from '../img/avatar-3.webp';
// import avatar4 from '../img/avatar-4.webp';
// import avatar5 from '../img/avatar-5.webp';
import about2 from '../img/about-2.webp';
import about5 from '../img/about-5.webp';
// import Phone from '../img/phone-app-screen.webp';
import client1 from "../img/clients/client-1.png";
import client2 from "../img/clients/client-2.png";
import client3 from "../img/clients/client-3.png";
import client4 from "../img/clients/client-4.png";
import client5 from "../img/clients/client-5.png";
import client6 from "../img/clients/client-6.png";
import client7 from "../img/clients/client-7.png";
import client8 from "../img/clients/client-8.png";
// import Testimonials1 from "../img/testimonials/testimonials-1.jpg";
// import Testimonials2 from "../img/testimonials/testimonials-2.jpg";
// import Testimonials3 from "../img/testimonials/testimonials-3.jpg";
// import Testimonials4 from "../img/testimonials/testimonials-4.jpg";
import Logo from "../img/ParinSoft.png";



const Home = () => {
      useEffect(() => {
    new PureCounter();
  }, []);
    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                        <img src={Logo} alt=""/>
                        {/* <h1 className="sitename">ParinSoft</h1> */}
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a> <NavLink to="/" >Home</NavLink></a></li>
                            <li><a ><NavLink to="/About">About</NavLink></a></li>
                            <li><a > <NavLink to="/Services">Services</NavLink></a></li>
                            <li><a ><NavLink to="/Products">Products</NavLink></a></li>
                            <li><a ><NavLink to="/Consulting">Consulting</NavLink></a></li>
                            {/* <li><a > <NavLink to="/Features">Careers</NavLink></a></li> */}
                            <li><NavLink to="/Contact">Contact</NavLink></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    

                </div>
            </header>

            <main className="main">
                <section id="hero" className="hero section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                                    <div className="company-badge mb-4">
                                        <i className="bi bi-gear-fill me-2"></i>
                                        Working for your success
                                    </div>
                                    <h1 className="mb-4">Powerful Digital <br />Solutions With  <br /><span className="accent-text">Parinsoft</span></h1>
                                    <p className="mb-4 mb-md-5">
                                        We are team of talented digital marketers
                                    </p>
                                    {/* <div className="hero-buttons">
                                        <a href="#about" className="btn btn-primary me-0 me-sm-2 mx-1">Get Started</a>
                                        <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn btn-link mt-2 mt-sm-0 glightbox">
                                            <i className="bi bi-play-circle me-1"></i>
                                            Play Video
                                        </a>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
                                    <img src={Illustration1} alt="Hero Image" className="img-fluid" />

                                    {/* <div className="customers-badge">
                                        <div className="customer-avatars">
                                            <img src={avatar1} alt="Customer 1" className="avatar" />
                                            <img src={avatar2} alt="Customer 2" className="avatar" />
                                            <img src={avatar3} alt="Customer 3" className="avatar" />
                                            <img src={avatar4} alt="Customer 4" className="avatar" />
                                            <img src={avatar5} alt="Customer 5" className="avatar" />
                                            <span className="avatar more">12+</span>
                                        </div>
                                        <p className="mb-0 mt-2">12,000+ lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="500">
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="bi bi-trophy"></i>
                                    </div>
                                    <div className="stat-content">
                                        <h4>3x Won Awards</h4>
                                        <p className="mb-0">Vestibulum ante ipsum</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="bi bi-briefcase"></i>
                                    </div>
                                    <div className="stat-content">
                                        <h4>6.5k Faucibus</h4>
                                        <p className="mb-0">Nullam quis ante</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="bi bi-graph-up"></i>
                                    </div>
                                    <div className="stat-content">
                                        <h4>80k Mauris</h4>
                                        <p className="mb-0">Etiam sit amet orci</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="bi bi-award"></i>
                                    </div>
                                    <div className="stat-content">
                                        <h4>6x Phasellus</h4>
                                        <p className="mb-0">Vestibulum ante ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <section id="about" className="about section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row gy-4 align-items-center justify-content-between">
                            <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                                <span className="about-meta">MORE ABOUT US</span>
                                <h2 className="about-title">Innovating with Purpose, Delivering with Precision</h2>
                                <p className="about-description">At Parinsoft, we believe technology should be both powerful and purposeful. With a strong foundation in AI, Machine Learning, Cybersecurity, and Software Development, we are committed to transforming ideas into impactful digital solutions. Our mission is to help businesses thrive in a fast-paced digital world through intelligent systems and secure frameworks.</p>

                                <div className="row feature-list-wrapper">
                                    <div className="col-md-6">
                                        <ul className="feature-list">
                                            <li><i className="bi bi-check-circle-fill"></i> Deep expertise in advanced technologies</li>
                                            <li><i className="bi bi-check-circle-fill"></i> Client-focused development approach</li>
                                            <li><i className="bi bi-check-circle-fill"></i> Sed do eiusmod tempor</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="feature-list">
                                            <li><i className="bi bi-check-circle-fill"></i> Agile and scalable solutions tailored to your needs</li>
                                            <li><i className="bi bi-check-circle-fill"></i> Strong emphasis on quality and data security</li>
                                            <li><i className="bi bi-check-circle-fill"></i> A dedicated team committed to continuous innovation</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <div className="info-wrapper">
                                    <div className="row gy-4">
                                        <div className="col-lg-5">
                                            <div className="profile d-flex align-items-center gap-3">
                                                <img src={avatar1} alt="CEO Profile" className="profile-image" />
                                                <div>
                                                    <h4 className="profile-name">Mario Smith</h4>
                                                    <p className="profile-position">CEO &amp; Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="contact-info d-flex align-items-center gap-2">
                                                <i className="bi bi-telephone-fill"></i>
                                                <div>
                                                    <p className="contact-label">Call us anytime</p>
                                                    <p className="contact-number">+123 456-789</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="image-wrapper">
                                    <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                                        <img src={about5} alt="Business Meeting" className="img-fluid main-image rounded-4" />
                                        <img src={about2} alt="Team Discussion" className="img-fluid small-image rounded-4" />
                                    </div>
                                    <div className="experience-badge floating">
                                        <h3>15+ <span>Years</span></h3>
                                        <p>Of experience in business service</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <section id="features" className="features section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Features</h2>
                        <p>Delivering Innovative IT Solutions with Excellence</p>
                    </div>
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">

                                <li className="nav-item">
                                    <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                                        <h4>Our Services</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                                        <h4>Technical Expertise</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                                        <h4>Our Clients</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                            <div className="tab-pane fade active show" id="features-tab-1">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                        <h3>Custom IT Solutions for Business Excellence</h3>
                                        <p className="fst-italic">
                                            Based on the Parinsoft website, here are three key sections highlighting their offerings:

Our Services: Custom IT Solutions for Business Excellence
Parinsoft provides a comprehensive suite of IT services designed to drive business success through innovation and tailored solutions. Their expertise covers the entire software development lifecycle, ensuring applications are not only visually appealing and user-friendly but also highly functional and information-rich. They focus on delivering high-quality, ROI-driven enterprise-level applications.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> <span>End-to-end software development lifecycle management: From initial concept to deployment and ongoing support.</span></li>
                                            <li><i className="bi bi-check2-all"></i> <span>Agile methodology for flexible and timely delivery: Ensuring adaptability to evolving project needs.</span></li>
                                            <li><i className="bi bi-check2-all"></i> <span>Seamless integration with existing systems: For efficient and cohesive business operations.</span></li>
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
                                        <h3>A Foundation of Advanced Technologies</h3>
                                        <p className="fst-italic">
                                            Parinsoft leverages a wide range of modern technologies and platforms to develop robust and scalable solutions. Their programming expertise includes:
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> <span>Microsoft .NET Technologies: Asp.Net, Asp.Net MVC, Ado.Net, Ado.Net Entity Framework, C#, VB.Net, WPF, and Windows application development.</span></li>
                                            <li><i className="bi bi-check2-all"></i> <span>Mobile & Web Technologies: iOS, Android, JAVA, PHP, HTML, XML, Javascript, and jQuery.</span></li>
                                            <li><i className="bi bi-check2-all"></i> <span>Databases & Content Management Systems: Microsoft SQL Server, Oracle, MySQL, WordPress, Prestashop, WooCommerce, and Magento.</span></li>
                                            <li><i className="bi bi-check2-all"></i> <span>Design Tools: Adobe Photoshop and Adobe Illustrator.</span></li>
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
                                        <h3>Client-Centric Approach and Quality Assurance</h3>
                                        <p className="fst-italic">
                                            Parinsoft is committed to client satisfaction and quality excellence. They emphasize a client-centered and quality-conscious approach to software development, ensuring that their solutions meet current needs and help clients stay competitive in the evolving digital landscape. Their team comprises skilled and experienced IT professionals, many holding certifications like Microsoft Certified Technology Specialist, Microsoft Certified Professional Developer, and Oracle Certified Professional. They have a dedicated Quality Control team to ensure rigorous testing and quality at all stages of development, providing a "one-stop service" for the entire product lifecycle, from analysis and design to implementation, testing, deployment, and maintenance.
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

                <section id="features-cards" className="features-cards section">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                                <div className="feature-box orange">
                                    <i className="bi bi-award"></i>
                                    <h4>Trusted Expertise</h4>
                                    <p>We deliver reliable, high-quality solutions backed by years of experience and a proven track record across industries.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                                <div className="feature-box blue">
                                    <i className="bi bi-patch-check"></i>
                                    <h4>Tailored Solutions</h4>
                                    <p>Our team designs custom-fit digital solutions that align precisely with your business needs and long-term goals.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                                <div className="feature-box green">
                                    <i className="bi bi-sunrise"></i>
                                    <h4>Innovation-Driven</h4>
                                    <p>We stay ahead with cutting-edge technologies like AI, ML, and Data Science to foster growth and smarter operations.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                                <div className="feature-box red">
                                    <i className="bi bi-shield-check"></i>
                                    <h4>Security First</h4>
                                    <p>With cybersecurity at our core, we build systems that are secure, compliant, and resilient against evolving threats. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="features-2" className="features-2 section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="200">
                                    <div className="d-flex align-items-center justify-content-end gap-4">
                                        <div className="feature-content">
                                            <h3>Use On Any Device</h3>
                                            <p>Our applications are fully optimized for mobile, tablet, and desktop environments, ensuring seamless performance across all platforms.</p>
                                        </div>
                                        <div className="feature-icon flex-shrink-0">
                                            <i className="bi bi-display"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="300">
                                    <div className="d-flex align-items-center justify-content-end gap-4">
                                        <div className="feature-content">
                                            <h3>Feather Icons</h3>
                                            <p>Enjoy a clean and intuitive interface enhanced with lightweight, responsive icons that make navigation effortless and appealing.</p>
                                        </div>
                                        <div className="feature-icon flex-shrink-0">
                                            <i className="bi bi-feather"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-item text-end" data-aos="fade-right" data-aos-delay="400">
                                    <div className="d-flex align-items-center justify-content-end gap-4">
                                        <div className="feature-content">
                                            <h3>Retina Ready</h3>
                                            <p>Crafted for high-resolution displays, our designs deliver sharp visuals and vibrant detail on all modern screens and devices.</p>
                                        </div>
                                        <div className="feature-icon flex-shrink-0">
                                            <i className="bi bi-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                                <div className="phone-mockup text-center">
                                    <img src={Phone} alt="Phone Mockup" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="feature-item mb-5" data-aos="fade-left" data-aos-delay="200">
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="feature-icon flex-shrink-0">
                                            <i className="bi bi-code-square"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3>W3c Valid Code</h3>
                                            <p>We follow the latest web standards, ensuring clean, compliant, and optimized code for performance, accessibility, and security.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-item mb-5" data-aos="fade-left" data-aos-delay="300">
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="feature-icon flex-shrink-0">
                                            <i className="bi bi-phone"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3>Fully Responsive</h3>
                                            <p>Our solutions automatically adapt to any screen size, offering a consistent and user-friendly experience on every device.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-item" data-aos="fade-left" data-aos-delay="400">
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="feature-icon flex-shrink-0">
                                            <i className="bi bi-browser-chrome"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3>Browser Compatibility</h3>
                                            <p>Built to perform across all major browsers—Chrome, Firefox, Safari, and Edge—without compromising functionality or appearance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section id="call-to-action" className="call-to-action section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row content justify-content-center align-items-center position-relative">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="display-4 mb-4">Ready to Transform Your Digital Vision?</h2>
                                <p className="mb-4">Let’s build innovative, secure, and scalable solutions together. Whether you're starting from scratch or upgrading an existing system—we’re here to help you succeed.</p>
                                <a href="#" className="btn btn-cta">Get Started Today</a>
                            </div>
                            <div className="shape shape-1">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z" transform="translate(100 100)"></path>
                                </svg>
                            </div>
                            <div className="shape shape-2">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z" transform="translate(100 100)"></path>
                                </svg>
                            </div>
                            <div className="dots dots-1">
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                    </pattern>
                                    <rect width="100" height="100" fill="url(#dot-pattern)"></rect>
                                </svg>
                            </div>
                            <div className="dots dots-2">
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <pattern id="dot-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                    </pattern>
                                    <rect width="100" height="100" fill="url(#dot-pattern-2)"></rect>
                                </svg>
                            </div>
                            <div className="shape shape-3">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M43.3,-57.1C57.4,-46.5,71.1,-32.6,75.3,-16.2C79.5,0.2,74.2,19.1,65.1,35.3C56,51.5,43.1,65,27.4,71.7C11.7,78.4,-6.8,78.3,-23.9,72.4C-41,66.5,-56.7,54.8,-65.4,39.2C-74.1,23.6,-75.8,4,-71.7,-13.2C-67.6,-30.4,-57.7,-45.2,-44.3,-56.1C-30.9,-67,-15.5,-74,0.7,-74.9C16.8,-75.8,33.7,-70.7,43.3,-57.1Z" transform="translate(100 100)"></path>
                                </svg>
                            </div>
                        </div>

                    </div>

                </section>

                {/* <section id="clients" className="clients section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <section id="clients" classNameName="clients section">
                            <div classNameName="container" data-aos="fade-up" data-aos-delay="100">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    loop={true}
                                    speed={600}
                                    autoplay={{ delay: 5000 }}
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        480: {
                                            slidesPerView: 3,
                                            spaceBetween: 60,
                                        },
                                        640: {
                                            slidesPerView: 4,
                                            spaceBetween: 80,
                                        },
                                        992: {
                                            slidesPerView: 6,
                                            spaceBetween: 120,
                                        },
                                    }}
                                >
                                    {[client1, client2, client3, client4, client5, client6, client7, client8].map((client, idx) => (
                                        <SwiperSlide key={idx}>
                                            <img src={client} classNameName="img-fluid" alt={`Client ${idx + 1}`} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </section>

                    </div>

                </section> */}

                <section id="clients" class="clients section">
                    <div class="container" data-aos="fade-up" data-aos-delay="100">
                        <div id="clientCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row gy-4">
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client1} class="img-fluid" alt="Client 1" />
                                        </div>
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client2} class="img-fluid" alt="Client 2" />
                                        </div>
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client3} class="img-fluid" alt="Client 3" />
                                        </div>
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client4} class="img-fluid" alt="Client 4" />
                                        </div>
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client5} class="img-fluid" alt="Client 5" />
                                        </div>
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client6} class="img-fluid" alt="Client 6" />
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="row gy-4">
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client7} class="img-fluid" alt="Client 7" />
                                        </div>
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client8} class="img-fluid" alt="Client 8" />
                                        </div>
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client1} class="img-fluid" alt="Client 8" />
                                        </div>
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client2} class="img-fluid" alt="Client 8" />
                                        </div>
                                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                                            <img src={client3} class="img-fluid" alt="Client 8" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="testimonials" className="testimonials section light-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Testimonials</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="testimonial-item">
                                    <img src={Testimonials1} className="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-item">
                                    <img src={Testimonials2} className="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="testimonial-item">
                                    <img src={Testimonials3} className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="testimonial-item">
                                    <img src={Testimonials4} className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section> */}

                <section id="stats" className="stats section">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Clients</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Projects</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Hours Of Support</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Workers</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

                <section id="services" className="services section light-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Services</h2>
                        <p>We offer cutting-edge technology solutions designed to empower your business and future-proof your digital journey</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row g-4">

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="service-card d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-activity"></i>
                                    </div>
                                    <div>
                                        <h3>AI / ML</h3>
                                        <p>We bring over a decade of experience in AI/ML, blending strategic innovation with deep technical expertise to build intelligent, ethical, and scalable solutions tailored for real-world impact.</p>
                                        <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-card d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-diagram-3"></i>
                                    </div>
                                    <div>
                                        <h3>Cyber Security</h3>
                                        <p>From web application security to Identity and Access Management (IAM), we protect what matters most through proactive, advanced, and ethical cybersecurity practices.</p>
                                        <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-card d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <div>
                                        <h3>Application Development</h3>
                                        <p>Harnessing technologies like Java, .NET, Python, Golang, and PHP, we create robust, scalable applications that power innovation and operational efficiency.</p>
                                        <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-card d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-clipboard-data"></i>
                                    </div>
                                    <div>
                                        <h3>Mobile App Development</h3>
                                        <p>We build native and cross-platform mobile apps using Flutter and React Native, offering seamless user experiences and performance across devices.</p>
                                        <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-card d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-clipboard-data"></i>
                                    </div>
                                    <div>
                                        <h3>IT Staffing and Consulting</h3>
                                        <p>Our strategic IT staffing and consulting services help you access the right talent and expert guidance to accelerate your digital initiatives and navigate IT complexity.</p>
                                        <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-card d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className="bi bi-clipboard-data"></i>
                                    </div>
                                    <div>
                                        <h3>IT Trainings</h3>
                                        <p>Stay ahead with hands-on training in:</p>
                                        <p>AI/ML & Data Science</p>
                                        <p>Cybersecurity & IAM</p>
                                        <p>Fullstack Development (Java, .NET, Python, Node.js)Upskill your team and build tomorrow’s tech leaders today.</p>
                                        <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

                

                <section className="faq-9 faq section light-background" id="faq">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5" data-aos="fade-up">
                                <h2 className="faq-title">Have a question? Check out the FAQ</h2>
                                <p className="faq-description">Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                                <div className="faq-arrow d-none d-lg-block" data-aos="fade-up" data-aos-delay="200">
                                    <svg className="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
                                <div className="accordion" id="faqAccordion">

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Non consectetur a erat nam at lectus urna duis?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Feugiat scelerisque varius morbi enim nunc faucibus?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Dolor sit amet consectetur adipiscing elit pellentesque?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Tempus quam pellentesque nec nam aliquam sem et tortor?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Perspiciatis quod quo quos nulla quo illum ullam?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="call-to-action-2" className="call-to-action-2 section dark-background">
                    <div className="container">
                        <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-xl-10">
                                <div className="text-center">
                                    <h3>Innovation Starts Here</h3>
                                    <p>Whether you're scaling up, launching a product, or securing your digital assets — we’ve got your back. Partner with us to unlock next-gen solutions.</p>
                                    <a className="cta-btn" href="#">Let’s Talk →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact section light-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Contact</h2>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row g-4 g-lg-5">
                            <div className="col-lg-5">
                                <div className="info-box" data-aos="fade-up" data-aos-delay="200">
                                    <h3>Contact Info</h3>
                                    <p>We're here to help you navigate your tech needs—whether you're looking for AI solutions, cybersecurity, or custom development.</p>

                                    <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                                        <div className="icon-box">
                                            <i className="bi bi-geo-alt"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Our Location</h4>
                                            <p>A108 Adam Street</p>
                                            <p>New York, NY 535022</p>
                                        </div>
                                    </div>

                                    <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                                        <div className="icon-box">
                                            <i className="bi bi-telephone"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Phone Number</h4>
                                            <p>+1 5589 55488 55</p>
                                            <p>+1 6678 254445 41</p>
                                        </div>
                                    </div>

                                    <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                                        <div className="icon-box">
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Email Address</h4>
                                            <p>info@example.com</p>
                                            <p>contact@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
                                    <h3>Get In Touch</h3>
                                    <p>Tell us about your project, ask a question, or just say hello. We’re ready to respond and excited to work with you.</p>

                                    <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                        <div className="row gy-4">

                                            <div className="col-md-6">
                                                <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                                            </div>

                                            <div className="col-md-6 ">
                                                <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                                            </div>

                                            <div className="col-12">
                                                <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                                            </div>

                                            <div className="col-12">
                                                <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                            </div>

                                            <div className="col-12 text-center">
                                                <div className="loading">Loading</div>
                                                <div className="error-message"></div>
                                                <div className="sent-message">Your message has been sent. Thank you!</div>

                                                <button type="submit" className="btn">Send Message</button>
                                            </div>

                                        </div>
                                    </form>

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

            {/* <!-- Scroll Top --> */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}

export default Home
