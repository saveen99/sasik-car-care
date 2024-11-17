function FAQs() {
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
              Cookies
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
                  Cookies
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Cookies Start */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Q: What services do you offer?</h2>
            <p className="text-gray-700">A: We offer a wide range of services including...</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Q: How can I contact customer support?</h2>
            <p className="text-gray-700">A: You can reach us through...</p>
          </div>
          {/* Add more FAQs */}
        </div>
      </div>
      {/* Cookies End */}
    </div>
    
  )
}

export default FAQs
