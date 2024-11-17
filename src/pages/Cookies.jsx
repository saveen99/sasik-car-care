function Cookies() {
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
      <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>
      <p className="text-gray-700">
        This page outlines how we use cookies on our website. Cookies are small text files that are stored on your device to improve your browsing experience...
      </p>
      {/* Add more content as necessary */}
    </div>
      {/* Cookies End */}
    </div>
    
  )
}

export default Cookies
