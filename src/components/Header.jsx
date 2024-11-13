import '../assets/css/style.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>Bambaragammana, Wariyapola, Kurunegala</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>037 2267991</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-sm-square bg-white text-primary me-0" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary">
            <i className="fa fa-car me-3"></i>Sasik Service Station
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            >
              Services
            </NavLink>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </a>
              <div className="dropdown-menu fade-up m-0">
                <NavLink
                  to="/team"
                  className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                >
                  Technicians
                </NavLink>
                <NavLink
                  to="/testimonial"
                  className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                >
                  Testimonial
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </div>
          <NavLink to="/contact" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
            Contact Us !<i className="fa fa-arrow-right ms-3"></i>
          </NavLink>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
}

export default Header;
