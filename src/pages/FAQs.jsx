import { useState } from "react";

function FAQs() {

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of car services, including oil changes, tire rotations, engine diagnostics, and more.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us through our contact page, by calling our support number, or via email at sasikservice@gmail.com.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we provide 24/7 emergency services for breakdowns and urgent repairs.",
    },
    {
      question: "Can I schedule a service online?",
      answer:
        "Absolutely! You can book an appointment through our mobile app.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit/debit cards, and digital wallets like PayPal and Google Pay.",
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
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
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
                <h3 className="text-lg font-bold text-gray-800">
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
