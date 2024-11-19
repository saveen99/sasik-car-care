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
      {/* Cookies Policy Section Start */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Our Cookies Policy
        </h2>
        <p className="text-gray-700 mb-6">
          We use cookies to improve your browsing experience, analyze website traffic, and personalize content. Cookies are small text files that are stored on your device when you visit our website. This helps us understand how you interact with our services and enhances your overall experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Essential Cookies</h3>
            <p className="text-gray-600">
              These cookies are necessary for the website to function correctly. They enable basic functionalities such as navigation and access to secure areas of the website.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Performance Cookies</h3>
            <p className="text-gray-600">
              Performance cookies collect information about how visitors use the website. This data helps us improve functionality and user experience.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Functional Cookies</h3>
            <p className="text-gray-600">
              These cookies remember your preferences and enable personalized features, such as remembering your login details or language selection.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Advertising Cookies</h3>
            <p className="text-gray-600">
              Advertising cookies are used to deliver advertisements relevant to you. They track your browsing activity and help us show tailored ads.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="btn btn-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
            Manage Cookies Preferences
          </button>
        </div>
      </div>
      {/* Cookies Policy Section End */}
    </div>
    
  )
}

export default Cookies
