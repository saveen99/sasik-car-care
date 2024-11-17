function Footer() {
  return (
    <div>
        {/* Footer Start */}
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Address</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Bambaragammana, Wariyapola, Kurunegala</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>037 2267991</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i>sasikservice@gmail.com</p>
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
                <a className="btn btn-link" href="/service">Diagnostic Test</a>
                <a className="btn btn-link" href="/service">Engine Servicing</a>
                <a className="btn btn-link" href="/service">Tires Replacement</a>
                <a className="btn btn-link" href="/service">Oil Changing</a>
                <a className="btn btn-link" href="/service">Vacuum Cleaning</a>
            </div>
            <div className="col-lg-3 col-md-6">
                <img 
                    src="/src/assets/img/logo.ico" 
                    alt="logo" 
                />
            </div>

            </div>
        </div>
        <div className="container">
            <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="#">Sasik Service Station</a>, All Right Reserved.
                Designed By <a className="border-bottom" href="#">Team NIBM</a>
                </div>
                <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                    <a href="/">Home</a>
                    <a href="/cookies">Cookies</a>
                    <a href="/help">Help</a>
                    <a href="/faqs">FAQs</a>
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

export default Footer
