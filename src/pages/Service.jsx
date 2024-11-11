function Service() {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-light p-0">
          <div className="row gx-0 d-none d-lg-flex">
              <div className="col-lg-7 px-5 text-start">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                      <small className="fa fa-map-marker-alt text-primary me-2"></small>
                      <small>123 Street, New York, USA</small>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center py-3">
                      <small className="far fa-clock text-primary me-2"></small>
                      <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                  </div>
              </div>
              <div className="col-lg-5 px-5 text-end">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                      <small className="fa fa-phone-alt text-primary me-2"></small>
                      <small>+012 345 6789</small>
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


      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 p-0" style="background-image: url(/src/assets/img/carousel-bg-2.jpg);">
          <div className="container-fluid page-header-inner py-5">
              <div className="container text-center">
                  <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center text-uppercase">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item"><a href="#">Pages</a></li>
                          <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                      </ol>
                  </nav>
              </div>
          </div>
      </div>
      {/* Page Header End */}


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
                                  <div className="col-md-6" style="min-height: 350px;">
                                      <div className="position-relative h-100">
                                          <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/service-1.jpg"
                                              style="object-fit: cover;" alt=""/>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                      <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                      <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade" id="tab-pane-2">
                              <div className="row g-4">
                                  <div className="col-md-6" style="min-height: 350px;">
                                      <div className="position-relative h-100">
                                          <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/service-2.jpg"
                                              style="object-fit: cover;" alt=""/>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                      <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                      <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade" id="tab-pane-3">
                              <div className="row g-4">
                                  <div className="col-md-6" style="min-height: 350px;">
                                      <div className="position-relative h-100">
                                          <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/service-3.jpg"
                                              style="object-fit: cover;" alt=""/>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                      <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                      <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade" id="tab-pane-4">
                              <div className="row g-4">
                                  <div className="col-md-6" style="min-height: 350px;">
                                      <div className="position-relative h-100">
                                          <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/service-4.jpg"
                                              style="object-fit: cover;" alt=""/>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                      <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                      <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                      <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Service End */}


      {/* Booking Start */}
      <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
              <div className="row gx-5">
                  <div className="col-lg-6 py-5">
                      <div className="py-5">
                          <h1 className="text-white mb-4">Certified and Award Winning Car Repair Service Provider</h1>
                          <p className="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                          <h1 className="text-white mb-4">Book For A Service</h1>
                          <form>
                              <div className="row g-3">
                                  <div className="col-12 col-sm-6">
                                      <input type="text" className="form-control border-0" placeholder="Your Name" style="height: 55px;"/>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                      <input type="email" className="form-control border-0" placeholder="Your Email" style="height: 55px;"/>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                      <select className="form-select border-0" style="height: 55px;">
                                          <option selected>Select A Service</option>
                                          <option value="1">Service 1</option>
                                          <option value="2">Service 2</option>
                                          <option value="3">Service 3</option>
                                      </select>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                      <div className="date" id="date1" data-target-input="nearest">
                                          <input type="text"
                                              className="form-control border-0 datetimepicker-input"
                                              placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker" style="height: 55px;"/>
                                      </div>
                                  </div>
                                  <div className="col-12">
                                      <textarea className="form-control border-0" placeholder="Special Request"></textarea>
                                  </div>
                                  <div className="col-12">
                                      <button className="btn btn-secondary w-100 py-3" type="submit">Book Now</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Booking End */}


      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
              <div className="text-center">
                  <h6 className="text-primary text-uppercase">Testimonial</h6>
                  <h1 className="mb-5">Our Clients Say!</h1>
              </div>
              <div className="owl-carousel testimonial-carousel position-relative">
                  <div className="testimonial-item text-center">
                      <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="/src/assets/img/testimonial-1.jpg" style="width: 80px; height: 80px;"/>
                      <h5 className="mb-0">Client Name</h5>
                      <p>Profession</p>
                      <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                      </div>
                  </div>
                  <div className="testimonial-item text-center">
                      <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="/src/assets/img/testimonial-2.jpg" style="width: 80px; height: 80px;"/>
                      <h5 className="mb-0">Client Name</h5>
                      <p>Profession</p>
                      <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                      </div>
                  </div>
                  <div className="testimonial-item text-center">
                      <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="/src/assets/img/testimonial-3.jpg" style="width: 80px; height: 80px;"/>
                      <h5 className="mb-0">Client Name</h5>
                      <p>Profession</p>
                      <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                      </div>
                  </div>
                  <div className="testimonial-item text-center">
                      <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="/src/assets/img/testimonial-4.jpg" style="width: 80px; height: 80px;"/>
                      <h5 className="mb-0">Client Name</h5>
                      <p>Profession</p>
                      <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                      </div>
                  </div>
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
                          <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                          <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                          <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
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
                      <a className="btn btn-link" href="">Diagnostic Test</a>
                      <a className="btn btn-link" href="">Engine Servicing</a>
                      <a className="btn btn-link" href="">Tires Replacement</a>
                      <a className="btn btn-link" href="">Oil Changing</a>
                      <a className="btn btn-link" href="">Vacuam Cleaning</a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <h4 className="text-light mb-4">Newsletter</h4>
                      <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                      <div className="position-relative mx-auto" style="max-width: 400px;">
                          <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
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
                          Designed By <a className="border-bottom" href="">HTML Codex</a>
                      </div>
                      <div className="col-md-6 text-center text-md-end">
                          <div className="footer-menu">
                              <a href="">Home</a>
                              <a href="">Cookies</a>
                              <a href="">Help</a>
                              <a href="">FQAs</a>
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

export default Service
