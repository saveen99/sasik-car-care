function Help() {
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
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <p className="text-gray-700">
          Need assistance? Browse through our support articles or contact our team for help.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>How to use our service</li>
          <li>Account issues</li>
          <li>Payment and billing</li>
          {/* Add links to support topics */}
        </ul>
      </div>
      {/* Cookies End */}
    </div>
  )
}

export default Help
