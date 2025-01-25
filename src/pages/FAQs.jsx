import { useState } from "react";

function FAQs() {

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, you can cancel your appointment by contacting support at least 24 hours in advance.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us through our contact page, by calling our support number, or via email at sasikservice@gmail.com.",
    },
    {
      question: "Can I book multiple services at once?",
      answer:
        "Yes! Select all necessary services in the dropdown or add a note in the Special Request section.",
    },
    {
      question: "How far in advance can I book a service?",
      answer:
        "You can book up to 30 days in advance.",
    },
    {
      question: "Can I request a specific mechanic to work on my car?",
      answer:
        "Yes! If you have a preferred mechanic, mention their name in the Special Request section, and we will do our best to accommodate your request.",
    },
  ];

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
              FAQs
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
                  FAQs
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* FAQs Section Start */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800" style={{ marginBottom: "50px" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-md p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-gray-800" style={{ fontSize: "1.25rem" }}>
                  Q: {faq.question}
                </h3>
                <span
                  className={`transform transition-transform ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {openQuestion === index && (
                <p className="mt-3 text-gray-600">A: {faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* FAQs Section End */}
    </div>
    
  )
}

export default FAQs
