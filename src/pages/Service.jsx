function Service() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(/src/assets/img/carousel-bg-2.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Services
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Services
                </li>
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
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <i className="fa fa-car-side fa-2x me-3"></i>
                  <h4 className="m-0">Diagnostic Test</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <i className="fa fa-car fa-2x me-3"></i>
                  <h4 className="m-0">Engine Servicing</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <i className="fa fa-cog fa-2x me-3"></i>
                  <h4 className="m-0">Tires Replacement</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <i className="fa fa-oil-can fa-2x me-3"></i>
                  <h4 className="m-0">Oil Changing</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="/src/assets/img/service-1.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Diagnostic Test"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                      Our Diagnostic Testing Service
                      </h3>
                      <p className="mb-4">
                      Using advanced technology, we identify and diagnose issues in your vehicles engine, transmission, brakes, and electronics. Our detailed analysis ensures accurate solutions to keep you safe on the road.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <a
                        href="/"
                        className="btn btn-primary py-3 px-5 mt-3"
                      >
                        Read More
                        <i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Repeat similar structure for tab-pane-2, tab-pane-3, and tab-pane-4 */}

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
</div>
  );
}

export default Service;
