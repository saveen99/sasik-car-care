function Error() {
  return (
    <div>
      {/* Page Header Start */}
    <div className="container-fluid page-header mb-5 p-0" style="background-image: url(/src/assets/img/carousel-bg-2.jpg);">
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Not Found</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">404</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    {/* Page Header End */}


    {/* 404 Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">Page Not Found</h1>
                    <p className="mb-4">Were sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="">Go Back To Home</a>
                </div>
            </div>
        </div>
    </div>
    {/* 404 End */}
    </div>
  )
}

export default Error
