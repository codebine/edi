/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
// eslint-disable-next-line jsx-a11y/heading-has-content
// eslint-disable-next-line react/jsx-no-target-blank
import React from 'react'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/main.css'
import '../css/about.css'

import companyimage from "../img/company/company-image.jpg";
import companyimage2 from "../img/company/company-image-2.jpg";
import companyimage3 from "../img/company/company-image-3.jpg";
import gallery1 from "../img/company/gallery-1.jpg";
import gallery2 from "../img/company/gallery-2.jpg";
import gallery3 from "../img/company/gallery-3.jpg";
import gallery4 from "../img/company/gallery-4.jpg";
import gallery5 from "../img/company/gallery-5.jpg";
import member1 from "../img/team/member-1.jpg";
import member2 from "../img/team/member-2.jpg";
import member3 from "../img/team/member-3.jpg";

const About = () => {
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

      <section class="about-shot-info section-sm">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mt-20">
              <h2 class="mb-3">We Create Designs<br /> and technology</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus
                dolor harum voluptatibus modi dicta ducimus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat
                cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas.
                Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!
              </p>
            </div>
            <div class="col-lg-6 mt-4 mt-lg-0">
              <img loading="lazy" class="img-fluid" src={companyimage} alt="" />
            </div>
          </div>
        </div>
      </section>


      <section class="company-mission section-sm bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores
                assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa
                inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia,
                perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
              <img loading="lazy" src={companyimage2} alt="" class="img-fluid mt-30" />
            </div>
            <div class="col-md-6 mt-5 mt-md-0">
              <h3>Our Vision</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores
                assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa
                inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia,
                perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
              <img loading="lazy" src={companyimage3} alt="" class="img-fluid mt-30" />
            </div>
          </div>
        </div>
      </section>


      <section class="promo-video section-sm">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <div class="title text-center">
                <h2>Our Promo Video</h2>
                <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu.Sed condimentum iaculis ex,
                  in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
                <div class="border"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 mx-auto">
              <iframe src="https://player.vimeo.com/video/51119176" width="100%" height="360" frameborder="0"
                webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>


      <section class="call-to-action-2 section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula.</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="section gallery">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <div class="title text-center">
                <h2>Sneak Peak Gallery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore numquam esse vitae recusandae qui
                  aspernatur, blanditiis, laboriosam dignissimos dolore facere provident ex? Porro, praesentium consectetur
                  tempore. Nulla, error eius dolorem.</p>
                <div class="border"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="company-gallery">
                <img loading="lazy" src={gallery1} alt="" />
                <img loading="lazy" src={gallery2} alt="" />
                <img loading="lazy" src={gallery3} alt="" />
                <img loading="lazy" src={gallery4} alt="" />
                <img loading="lazy" src={gallery5} alt="" />
                <img loading="lazy" src={gallery5} alt="" />
                <img loading="lazy" src={gallery1} alt="" />
                <img loading="lazy" src={gallery2} alt="" />
                <img loading="lazy" src={gallery3} alt="" />
                <img loading="lazy" src={gallery4} alt="" />
                <img loading="lazy" src={gallery5} alt="" />
                <img loading="lazy" src={gallery5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="team" id="team">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <div class="title text-center ">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi tempora obcaecati, quis
                  similique quos.</p>
                <div class="border"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="team-member text-center">
                <div class="member-photo">
                  <img loading="lazy" class="img-fluid" src={member1} alt="Meghna" />

                  <div class="mask">
                    <ul class="clearfix">
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-facebook"></i></a></li>
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-twitter"></i></a></li>
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-google-outline"></i></a></li>
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-dribbble"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="member-content">
                  <h3>Michael Jonson</h3>
                  <span>Head Of Marketing</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                </div>

              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="team-member text-center">
                <div class="member-photo">
                  <img loading="lazy" class="img-fluid" src={member2} alt="Meghna" />
                  <div class="mask">
                    <ul class="clearfix">
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-facebook"></i></a></li>
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-twitter"></i></a></li>
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-google-outline"></i></a></li>
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-dribbble"></i></a></li>
                    </ul>
                  </div>
                </div>

                <div class="member-content">
                  <h3>Carrick Mollenkamp</h3>
                  <span>Web Developer</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="team-member text-center">
                <div class="member-photo">
                  <img loading="lazy" class="img-fluid" src={member3} alt="Meghna" />

                  <div class="mask">
                    <ul class="clearfix">
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-facebook"></i></a></li>
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-twitter"></i></a></li>
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-google-outline"></i></a></li>
                      <li><a href="https://themefisher.com/"><i class="tf-ion-social-dribbble"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="member-content">
                  <h3>David Gauthier</h3>
                  <span>Head Of Management</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="counter-wrapper section-sm">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 text-center">
              <div class="title">
                <h2>Award-Winning Agency</h2>
                <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div class="counters-item">
                <i class="tf-ion-ios-alarm-outline"></i>
                <div>
                  <span class="counter" data-count="150">0</span>
                </div>
                <h3>Happy Clients</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div class="counters-item">
                <i class="tf-ion-ios-analytics-outline"></i>
                <div>
                  <span class="counter" data-count="130">0</span>
                </div>
                <h3>Projects completed</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div class="counters-item">
                <i class="tf-ion-ios-compose-outline"></i>
                <div>
                  <span class="counter" data-count="99">0</span>
                </div>
                <h3>Positive feedback</h3>

              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6 text-center ">
              <div class="counters-item kill-border">
                <i class="tf-ion-ios-bolt-outline"></i>
                <div>
                  <span class="counter" data-count="250">0</span>
                </div>
                <h3>Cups of Coffee</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
