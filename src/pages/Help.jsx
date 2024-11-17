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
              Help
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
                  Help
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Help Center Section Start */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          How Can We Help You?
        </h2>
        <p className="text-gray-700 text-center mb-8">
          Browse through our support topics or contact us for assistance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Topic 1 */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Using Our Service</h3>
            <p className="text-gray-600">
              Learn how to navigate and make the most of our services, from booking to receiving assistance.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Topic 2 */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Account Issues</h3>
            <p className="text-gray-600">
              Troubleshoot login problems, account recovery, or updating your personal information.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Topic 3 */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Payments and Billing</h3>
            <p className="text-gray-600">
              Find solutions for payment issues, invoice requests, or refund processes.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Topic 4 */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Support</h3>
            <p className="text-gray-600">
              Need help with our platform? Check out common issues and their solutions.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Topic 5 */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Service Queries</h3>
            <p className="text-gray-600">
              Get answers to questions about our car services and offerings.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Topic 6 */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h3>
            <p className="text-gray-600">
              Can&apos;t find what you&apos;re looking for? Reach out to our support team directly.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
      {/* Help Center Section End */}{/* Cookies Start */}
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
