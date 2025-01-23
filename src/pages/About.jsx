function About() {
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(/src/assets/img/carousel-bg-1.jpg)' }}>
          <div className="container-fluid page-header-inner py-5">
              <div className="container text-center">
                  <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center text-uppercase">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item"><a href="#">Pages</a></li>
                          <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                      </ol>
                  </nav>
              </div>
          </div>
      </div>
      {/* Page Header End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
          <div className="container">
              <div className="row g-4">
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="d-flex py-5 px-4">
                          <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                          <div className="ps-4">
                              <h5 className="mb-3">Quality Servicing</h5>
                              <p>High-standard, efficient vehicle maintenance ensuring reliability and customer satisfaction.</p>
                              <a className="text-secondary border-bottom" href="">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="d-flex bg-light py-5 px-4">
                          <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                          <div className="ps-4">
                              <h5 className="mb-3">Expert Workers</h5>
                              <p>Skilled professionals expertly handle diverse vehicle issues with precision.</p>
                              <a className="text-secondary border-bottom" href="">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="d-flex py-5 px-4">
                          <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                          <div className="ps-4">
                              <h5 className="mb-3">Modern Equipment</h5>
                              <p>Advanced tools enable efficient, accurate vehicle diagnostics and repairs.</p>
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
                          <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/about.jpg" style={{ objectFit: 'cover' }} alt=""/>
                          <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: 'rgba(0, 0, 0, .08)' }}>
                              <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Years</span></h1>
                              <h4 className="text-white">Experience</h4>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <h6 className="text-primary text-uppercase">About Us</h6>
                      <h1 className="mb-4"><span className="text-primary">CarServ</span> Is The Best Place For Your Auto Care</h1>
                      <p className="mb-4">Sasik Service Station is your go-to destination for top-quality auto care. We are dedicated to ensuring your vehicle receives the best service with our team of skilled professionals, high standards, and award-winning expertise.</p>
                      <div className="row g-4 mb-3 pb-3">
                          <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                              <div className="d-flex">
                                  <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                      <span className="fw-bold text-secondary">01</span>
                                  </div>
                                  <div className="ps-3">
                                      <h6>Professional & Expert</h6>
                                      <span>Our skilled professionals provide top-notch car maintenance with care and precision.</span>
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
                                      <span>We ensure quality with top tools, products, and exceptional techniques.</span>
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
                                      <span>Our award-winning staff delivers outstanding, recognized, and excellent auto care service.</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <a href="" className="btn btn-primary py-3 px-5">Read More<i className="fa fa-arrow-right ms-3"></i></a>
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
                      <h2 className="text-white mb-2" data-toggle="counter-up">15</h2>
                      <p className="text-white mb-0">Years Experience</p>
                  </div>
                  <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                      <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                      <h2 className="text-white mb-2" data-toggle="counter-up">5</h2>
                      <p className="text-white mb-0">Expert Technicians</p>
                  </div>
                  <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                      <i className="fa fa-users fa-2x text-white mb-3"></i>
                      <h2 className="text-white mb-2" data-toggle="counter-up">500+</h2>
                      <p className="text-white mb-0">Satisfied Clients</p>
                  </div>
                  <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                      <i className="fa fa-car fa-2x text-white mb-3"></i>
                      <h2 className="text-white mb-2" data-toggle="counter-up">1000+</h2>
                      <p className="text-white mb-0">Complete Projects</p>
                  </div>
              </div>
          </div>
      </div>
      {/* Fact End */}

      {/* Team Start */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">Our Technicians</h6>
                <h1 className="mb-5">Our Expert Technicians</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="/src/assets/img/profile.png" alt=""/>
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
                <div className="col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="/src/assets/img/profile.png" alt=""/>
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
                <div className="col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="/src/assets/img/profile.png" alt=""/>
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
                <div className="col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="/src/assets/img/profile.png" alt=""/>
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
                <div className="col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="/src/assets/img/profile.png" alt=""/>
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

    </div>
  );
}

export default About;
