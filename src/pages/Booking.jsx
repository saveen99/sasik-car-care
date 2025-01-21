import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), formData);
      alert("Booking submitted successfully!");
      setFormData({ name: "", email: "", service: "", date: "", request: "" });
    } catch (error) {
      console.error("Error adding booking: ", error);
      alert("Failed to submit booking.");
    }
  };

  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: 'url("src/assets/img/carousel-bg-1.jpg")' }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Booking
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Booking
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Booking Form Start */}
      <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="text-white mb-4">
                  Certified and Award-Winning Car Repair Service Provider
                </h1>
                <p className="text-white mb-0">
                  We offer high-quality car repair and maintenance services to ensure your vehicle remains in top condition.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                <h1 className="text-white mb-4">Book For A Service</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control border-0"
                        placeholder="Your Name"
                        required
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control border-0"
                        placeholder="Your Email"
                        required
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-select border-0"
                        required
                        style={{ height: "55px" }}
                      >
                        <option value="">Select A Service</option>
                        <option value="Service 1">Service 1</option>
                        <option value="Service 2">Service 2</option>
                        <option value="Service 3">Service 3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control border-0"
                        required
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="request"
                        value={formData.request}
                        onChange={handleChange}
                        className="form-control border-0"
                        placeholder="Special Request"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-secondary w-100 py-3" type="submit">
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Form End */}
    </div>
  );
}

export default Booking;
