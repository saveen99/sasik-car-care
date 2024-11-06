function Home() {
  return (
    <div>

      
      {/* Topbar Start */}
      <div className="container-fluid bg-light p-0">
          <div className="row gx-0 d-none d-lg-flex">
              <div className="col-lg-7 px-5 text-start">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                      <small className="fa fa-map-marker-alt text-primary me-2"></small>
                      <small>123 Street, Main Road, Kurunegala</small>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center py-3">
                      <small className="far fa-clock text-primary me-2"></small>
                      <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                  </div>
              </div>
              <div className="col-lg-5 px-5 text-end">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                      <small className="fa fa-phone-alt text-primary me-2"></small>
                      <small>+94 773 730 768</small>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center">
                      <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                      <a className="btn btn-sm-square bg-white text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
                  </div>
              </div>
          </div>
      </div>
      {/* Topbar End */}


      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
          <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
              <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>Sasik Car Care</h2>
          </a>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                  <a href="index.html" className="nav-item nav-link active">Home</a>
                  <a href="about.html" className="nav-item nav-link">About</a>
                  <a href="service.html" className="nav-item nav-link">Services</a>
                  <div className="nav-item dropdown">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                      <div className="dropdown-menu fade-up m-0">
                          <a href="booking.html" className="dropdown-item">Booking</a>
                          <a href="team.html" className="dropdown-item">Technicians</a>
                          <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                      </div>
                  </div>
                  <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
              <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Contact Us !<i className="fa fa-arrow-right ms-3"></i></a>
          </div>
      </nav>
      {/* Navbar End */}


      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5">
          <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img className="w-100" src="/src/assets/img/carousel-bg-1.jpg" alt="Image"/>
                      <div className="carousel-caption d-flex align-items-center">
                          <div className="container">
                              <div className="row align-items-center justify-content-center justify-content-lg-start">
                                  <div className="col-10 col-lg-7 text-center text-lg-start">
                                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">Car Servicing</h6>
                                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
                                      <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                  </div>
                                  <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                      <img className="img-fluid" src="/src/assets/img/carousel-1.png" alt=""/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <img className="w-100" src="/src/assets/img/carousel-bg-2.jpg" alt="Image"/>
                      <div className="carousel-caption d-flex align-items-center">
                          <div className="container">
                              <div className="row align-items-center justify-content-center justify-content-lg-start">
                                  <div className="col-10 col-lg-7 text-center text-lg-start">
                                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">Car Servicing</h6>
                                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
                                      <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                  </div>
                                  <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                      <img className="img-fluid" src="/src/assets/img/carousel-2.png" alt=""/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
      </div>
      {/* Carousel End */}


      {/* Service Start */}
      <div className="container-xxl py-5">
          <div className="container">
              <div className="row g-4">
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="d-flex py-5 px-4">
                          <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                          <div className="ps-4">
                              <h5 className="mb-3">Quality Servicing</h5>
                              <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                              <a className="text-secondary border-bottom" href="">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="d-flex bg-light py-5 px-4">
                          <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                          <div className="ps-4">
                              <h5 className="mb-3">Expert Workers</h5>
                              <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                              <a className="text-secondary border-bottom" href="">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="d-flex py-5 px-4">
                          <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                          <div className="ps-4">
                              <h5 className="mb-3">Modern Equipment</h5>
                              <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                              <a className="text-secondary border-bottom" href="">Read More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Service End */}


      {/* About Start */}
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
                <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/about.jpg" style={{ objectFit: 'cover' }} alt="About Us" />
                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: 'rgba(0, 0, 0, .08)' }}>
                    <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Years</span></h1>
                    <h4 className="text-white">Experience</h4>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="mb-4"><span className="text-primary">CarServ</span> Is The Best Place For Your Auto Care</h1>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                        <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                        <h6>Professional & Expert</h6>
                        <span>Diam dolor diam ipsum sit amet diam et eos</span>
                    </div>
                    </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                        <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                        <h6>Quality Servicing Center</h6>
                        <span>Diam dolor diam ipsum sit amet diam et eos</span>
                    </div>
                    </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                        <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                        <h6>Awards Winning Workers</h6>
                        <span>Diam dolor diam ipsum sit amet diam et eos</span>
                    </div>
                    </div>
                </div>
                </div>
                <a href="#" className="btn btn-primary py-3 px-5">Read More<i className="fa fa-arrow-right ms-3"></i></a>
            </div>
            </div>
        </div>
        </div>
        {/* About End */}



      {/* Fact Start */}
      <div className="container-fluid fact bg-dark my-5 py-5">
          <div className="container">
              <div className="row g-4">
                  <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                      <i className="fa fa-check fa-2x text-white mb-3"></i>
                      <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                      <p className="text-white mb-0">Years Experience</p>
                  </div>
                  <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                      <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                      <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                      <p className="text-white mb-0">Expert Technicians</p>
                  </div>
                  <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                      <i className="fa fa-users fa-2x text-white mb-3"></i>
                      <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                      <p className="text-white mb-0">Satisfied Clients</p>
                  </div>
                  <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                      <i className="fa fa-car fa-2x text-white mb-3"></i>
                      <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                      <p className="text-white mb-0">Compleate Projects</p>
                  </div>
              </div>
          </div>
      </div>
      {/* Fact End */}


    {/* Service Start */}
    <div className="container-xxl service py-5">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-primary text-uppercase">Our Services</h6>
        <h1 className="mb-5">Explore Our Services</h1>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="col-lg-4">
            <div className="nav w-100 nav-pills me-4">
            <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                <i className="fa fa-car-side fa-2x me-3"></i>
                <h4 className="m-0">Diagnostic Test</h4>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                <i className="fa fa-car fa-2x me-3"></i>
                <h4 className="m-0">Engine Servicing</h4>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                <i className="fa fa-cog fa-2x me-3"></i>
                <h4 className="m-0">Tires Replacement</h4>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                <i className="fa fa-oil-can fa-2x me-3"></i>
                <h4 className="m-0">Oil Changing</h4>
            </button>
            </div>
        </div>
        <div className="col-lg-8">
            <div className="tab-content w-100">
            <div className="tab-pane fade show active" id="tab-pane-1">
                <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                    <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/service-1.jpg" style={{ objectFit: 'cover' }} alt="Diagnostic Test" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                    <a href="#" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
                </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-2">
                <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                    <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/service-2.jpg" style={{ objectFit: 'cover' }} alt="Engine Servicing" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                    <a href="#" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
                </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-3">
                <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                    <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/service-3.jpg" style={{ objectFit: 'cover' }} alt="Tires Replacement" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                    <a href="#" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
                </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-4">
                <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                    <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/service-4.jpg" style={{ objectFit: 'cover' }} alt="Oil Changing" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                    <a href="#" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    {/* Service End */}



    {/* Team Start */}
    <div className="container-xxl py-5">
          <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h6 className="text-primary text-uppercase">Our Technicians</h6>
                  <h1 className="mb-5">Our Expert Technicians</h1>
              </div>
              <div className="row g-4">
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="team-item">
                          <div className="position-relative overflow-hidden">
                              <img className="img-fluid" src="/src/assets/img/team-1.jpg" alt=""/>
                              <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                          <div className="bg-light text-center p-4">
                              <h5 className="fw-bold mb-0">Full Name</h5>
                              <small>Designation</small>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="team-item">
                          <div className="position-relative overflow-hidden">
                              <img className="img-fluid" src="/src/assets/img/team-2.jpg" alt=""/>
                              <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                          <div className="bg-light text-center p-4">
                              <h5 className="fw-bold mb-0">Full Name</h5>
                              <small>Designation</small>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="team-item">
                          <div className="position-relative overflow-hidden">
                              <img className="img-fluid" src="/src/assets/img/team-3.jpg" alt=""/>
                              <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                          <div className="bg-light text-center p-4">
                              <h5 className="fw-bold mb-0">Full Name</h5>
                              <small>Designation</small>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                      <div className="team-item">
                          <div className="position-relative overflow-hidden">
                              <img className="img-fluid" src="/src/assets/img/team-4.jpg" alt=""/>
                              <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                          <div className="bg-light text-center p-4">
                              <h5 className="fw-bold mb-0">Full Name</h5>
                              <small>Designation</small>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Team End */}


    {/* Testimonial Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
        <div className="text-center">
        <h6 className="text-primary text-uppercase">Testimonial</h6>
        <h1 className="mb-5">Our Clients Say!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
        {[
            {
            img: "/src/assets/img/testimonial-1.jpg",
            name: "Client Name",
            profession: "Profession",
            text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
            },
            {
            img: "/src/assets/img/testimonial-2.jpg",
            name: "Client Name",
            profession: "Profession",
            text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
            },
            {
            img: "/src/assets/img/testimonial-3.jpg",
            name: "Client Name",
            profession: "Profession",
            text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
            },
            {
            img: "/src/assets/img/testimonial-4.jpg",
            name: "Client Name",
            profession: "Profession",
            text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
            }
        ].map((testimonial, index) => (
            <div className="testimonial-item text-center" key={index}>
            <img
                className="bg-light rounded-circle p-2 mx-auto mb-3"
                src={testimonial.img}
                alt={`Testimonial ${index + 1}`}
                style={{ width: "80px", height: "80px" }}
            />
            <h5 className="mb-0">{testimonial.name}</h5>
            <p>{testimonial.profession}</p>
            <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">{testimonial.text}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
    </div>
    {/* Testimonial End */}



      
    {/* Footer Start */}
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5">
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Opening Hours</h4>
            <h6 className="text-light">Monday - Friday:</h6>
            <p className="mb-4">09.00 AM - 09.00 PM</p>
            <h6 className="text-light">Saturday - Sunday:</h6>
            <p className="mb-0">09.00 AM - 12.00 PM</p>
        </div>
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Services</h4>
            <a className="btn btn-link" href="#">Diagnostic Test</a>
            <a className="btn btn-link" href="#">Engine Servicing</a>
            <a className="btn btn-link" href="#">Tires Replacement</a>
            <a className="btn btn-link" href="#">Oil Changing</a>
            <a className="btn btn-link" href="#">Vacuum Cleaning</a>
        </div>
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
        </div>
        </div>
    </div>
    <div className="container">
        <div className="copyright">
        <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FAQs</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    {/* Footer End */}


      

      
    </div>
  )
}

export default Home
