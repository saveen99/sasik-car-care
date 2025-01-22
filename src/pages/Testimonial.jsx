import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonial() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(/src/assets/img/carousel-bg-1.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Testimonial
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
                  Testimonial
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

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
                img: "/src/assets/img/profile.png",
                name: "Full Name",
                profession: "Car Owner",
                text: "Sasik Service Station provides exceptional service every time I visit. The team is professional, and my vehicle is always well-maintained and running smoothly. Highly recommend!",
              },
              {
                img: "/src/assets/img/profile.png",
                name: "Full Name",
                profession: "Business Owner",
                text: "I am always impressed by the thorough and efficient service I receive. The team is friendly and ensures my car is in top shape, making my daily commute smooth and worry-free.",
              },
              {
                img: "/src/assets/img/profile.png",
                name: "Full Name",
                profession: "Engineer",
                text: "The quality of service and attention to detail are exceptional. The team at Sasik Service Station really knows how to take care of cars, and I wouldn’t trust anyone else with mine.",
              },
              {
                img: "/src/assets/img/profile.png",
                name: "Full Name",
                profession: "Frequent Traveler",
                text: "Maintaining my car is crucial for my busy schedule. Sasik Service Station always provides reliable service, and I can count on them to keep me on the road safely and on time.",
              },
            ].map((testimonial, index) => (
              <div className="testimonial-item text-center" key={index}>
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src={testimonial.img}
                  alt={`Testimonial ${index + 1}`}
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">{testimonial.name}</h5>
                {testimonial.profession && <p>{testimonial.profession}</p>}
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
  );
}

export default Testimonial;
