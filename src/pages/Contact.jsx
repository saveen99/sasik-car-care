function Contact() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: 'url(/src/assets/img/carousel-bg-1.jpg)' }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">Contact Us</h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">Email Address</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>sasikservice@gmail.com
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">Contact Number</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>037 2267991
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">Location</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>Bambaragammana, Wariyapola
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.456638460339!2d80.23295207373857!3d7.633941209266715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32d3e8417d03f%3A0x40a64d1c0d4c5656!2sSasik%20service%20station!5e0!3m2!1sen!2slk!4v1731300481086!5m2!1sen!2slk"
                style={{ minHeight: '350px', border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}

export default Contact;
