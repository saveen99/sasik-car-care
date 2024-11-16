import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home() {
  return (
    <div>

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
                <img className="position-absolute img-fluid w-100 h-100" src="/src/assets/img/about.jpg" style={{ objectFit: 'cover' }} alt="About Us" />
                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: 'rgba(0, 0, 0, .08)' }}>
                    <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Years</span></h1>
                    <h4 className="text-white">Experience</h4>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="mb-4"><span className="text-primary">Sasik Service Station</span> Is The Best Place For Your Auto Care</h1>
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
                    <h3 className="mb-3">Our Diagnostic Testing Service</h3>
                    <p className="mb-4">Using advanced technology, we identify and diagnose issues in your vehicle’s engine, transmission, brakes, and electronics. Our detailed analysis ensures accurate solutions to keep you safe on the road.</p>
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
                    <h3 className="mb-3">Comprehensive Engine Servicing</h3>
                    <p className="mb-4">Our thorough engine service includes component checks, fluid adjustments, and necessary repairs to enhance efficiency and fuel economy, reducing the risk of breakdowns and extending your engines life.</p>
                    <p><i className="fa fa-check text-success me-3"></i>Quality Engine Diagnostics</p>
                    <p><i className="fa fa-check text-success me-3"></i>Certified Technicians</p>
                    <p><i className="fa fa-check text-success me-3"></i>State-of-the-Art Tools</p>
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
                    <h3 className="mb-3">Tires Replacement & Alignment</h3>
                    <p className="mb-4">We provide top-brand tire replacements, professional installation, and alignment services to ensure optimal safety and performance. Our team delivers efficient and reliable tire care for all road conditions.</p>
                    <p><i className="fa fa-check text-success me-3"></i>Top Tire Brands</p>
                    <p><i className="fa fa-check text-success me-3"></i>Quick & Efficient Service</p>
                    <p><i className="fa fa-check text-success me-3"></i>Alignment & Balancing Included</p>
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
                    <h3 className="mb-3">Efficient Oil Changing Service</h3>
                    <p className="mb-4">We offer efficient oil changes with premium oils, fluid checks, and environmentally friendly disposal practices, keeping your engine running smoothly and efficiently while protecting the environment.</p>
                    <p><i className="fa fa-check text-success me-3"></i>Premium Oil Selection</p>
                    <p><i className="fa fa-check text-success me-3"></i>Efficient Fluid Maintenance</p>
                    <p><i className="fa fa-check text-success me-3"></i>Environmentally Friendly Disposal</p>
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




    {/* Testimonial Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">Testimonial</h6>
            <h1 className="mb-5">Our Clients Say!</h1>
          </div>

          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav={false}
            autoplay
            autoplayTimeout={3000}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 3 },
            }}
          >
            {[
              {
                img: "/src/assets/img/testimonial-1.jpg",
                name: "Full Name",
                profession: "",
                text: "Sasik Service Station provides exceptional service every time I visit. The team is professional, and my vehicle is always well-maintained and running smoothly. Highly recommend!"
                },
                {
                img: "/src/assets/img/testimonial-2.jpg",
                name: "Full Name",
                profession: "",
                text: "I am always impressed by the thorough and efficient service I receive. The team is friendly and ensures my car is in top shape, making my daily commute smooth and worry-free."
                },
                {
                img: "/src/assets/img/testimonial-3.jpg",
                name: "Full Name",
                profession: "",
                text: "The quality of service and attention to detail are exceptional. The team at Sasik Service Station really knows how to take care of cars, and I wouldn’t trust anyone else with mine."
                },
                {
                img: "/src/assets/img/testimonial-4.jpg",
                name: "Full Name",
                profession: "",
                text: "Maintaining my car is crucial for my busy schedule. Sasik Service Station always provides reliable service, and I can count on them to keep me on the road safely and on time."
                },
                // Add additional testimonials as needed
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
          </OwlCarousel>
        </div>
      </div>
      {/* Testimonial End */}



      

      
    </div>
  )
}

export default Home
