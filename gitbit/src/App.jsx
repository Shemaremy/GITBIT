import './components/css/bootstrap.min.css';
import './components/css/style.css';
import './components/lib/animate/animate.min.css';
import './components/lib/owlcarousel/assets/owl.carousel.min.css';
import './App.css'



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








const wholeBody = (
  <div class="container-xxl bg-white p-0">
















  {/* Done */}
  <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
      </div>
  </div>

























{/* Done */}
  <div className="container-xxl position-relative p-0" id="home">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
            <h1 className="m-0">FitApp</h1>
            {/* <img src="img/logo.png" alt="Logo" /> */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
                <a href="#home" className="nav-item nav-link active">Home</a>
                <a href="#about" className="nav-item nav-link">About</a>
                <a href="#feature" className="nav-item nav-link">Feature</a>
                <a href="#pricing" className="nav-item nav-link">Pricing</a>
                <a href="#review" className="nav-item nav-link">Review</a>
                <a href="#contact" className="nav-item nav-link">Contact</a>
            </div>
            <a href="" className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Start Free Trial</a>
        </div>
    </nav>

    <div className="container-xxl bg-primary hero-header">
        <div className="container px-lg-5">
            <div className="row g-5">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="text-white mb-4 animated slideInDown">The Revolutionary App That Helps To Control Your Own Fitness</h1>
                    <p className="text-white pb-3 animated slideInDown">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                    <a href="" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a>
                    <a href="" className="btn btn-secondary-gradient py-sm-3 px-4 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                </div>
                <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp" data-wow-delay="0.3s">
                    <div className="owl-carousel screenshot-carousel">
                        {/* <img className="img-fluid" src="img/screenshot-1.png" alt="" />
                        <img className="img-fluid" src="img/screenshot-2.png" alt="" />
                        <img className="img-fluid" src="img/screenshot-3.png" alt="" />
                        <img className="img-fluid" src="img/screenshot-4.png" alt="" />
                        <img className="img-fluid" src="img/screenshot-5.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


























{/* Done */}
<div className="container-xxl py-5" id="about">
    <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="text-primary-gradient fw-medium">About App</h5>
                <h1 className="mb-4">#1 App For Your Fitness</h1>
                <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                <div className="row g-4 mb-4">
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="d-flex">
                            <i className="fa fa-cogs fa-2x text-primary-gradient flex-shrink-0 mt-1"></i>
                            <div className="ms-3">
                                <h2 className="mb-0" data-toggle="counter-up">1234</h2>
                                <p className="text-primary-gradient mb-0">Active Install</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                        <div className="d-flex">
                            <i className="fa fa-comments fa-2x text-secondary-gradient flex-shrink-0 mt-1"></i>
                            <div className="ms-3">
                                <h2 className="mb-0" data-toggle="counter-up">1234</h2>
                                <p className="text-secondary-gradient mb-0">Clients Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Read More</a>
            </div>
            <div className="col-lg-6">
                {/* <img className="img-fluid wow fadeInUp" data-wow-delay="0.5s" src="img/about.png" alt="" /> */}
            </div>
        </div>
    </div>
</div>
























{/* Done */}
<div className="container-xxl py-5" id="feature">
    <div className="container py-5 px-lg-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="text-primary-gradient fw-medium">App Features</h5>
            <h1 className="mb-5">Awesome Features</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item bg-light rounded p-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                        <i className="fa fa-eye text-white fs-4"></i>
                    </div>
                    <h5 className="mb-3">High Resolution</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-light rounded p-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                        <i className="fa fa-layer-group text-white fs-4"></i>
                    </div>
                    <h5 className="mb-3">Retina Ready</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-item bg-light rounded p-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                        <i className="fa fa-edit text-white fs-4"></i>
                    </div>
                    <h5 className="mb-3">Editable Data</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item bg-light rounded p-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                        <i className="fa fa-shield-alt text-white fs-4"></i>
                    </div>
                    <h5 className="mb-3">Fully Secured</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-light rounded p-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                        <i className="fa fa-cloud text-white fs-4"></i>
                    </div>
                    <h5 className="mb-3">Cloud Storage</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-item bg-light rounded p-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                        <i className="fa fa-mobile-alt text-white fs-4"></i>
                    </div>
                    <h5 className="mb-3">Fully Responsive</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                </div>
            </div>
        </div>
    </div>
</div>

























{/* Done */}
<div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="text-primary-gradient fw-medium">Screenshot</h5>
                <h1 className="mb-4">User Friendly Interface And Very Easy To Use Fitness App</h1>
                <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                <p><i className="fa fa-check text-primary-gradient me-3"></i>Diam dolor diam ipsum et tempor sit</p>
                <p><i className="fa fa-check text-primary-gradient me-3"></i>Aliqu diam amet diam et eos labore</p>
                <p className="mb-4"><i className="fa fa-check text-primary-gradient me-3"></i>Clita erat ipsum et lorem et sit</p>
                <a href="" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Read More</a>
            </div>
            <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp" data-wow-delay="0.3s">
                <div className="owl-carousel screenshot-carousel">
                    {/* <img className="img-fluid" src="img/screenshot-1.png" alt="" />
                    <img className="img-fluid" src="img/screenshot-2.png" alt="" />
                    <img className="img-fluid" src="img/screenshot-3.png" alt="" />
                    <img className="img-fluid" src="img/screenshot-4.png" alt="" />
                    <img className="img-fluid" src="img/screenshot-5.png" alt="" /> */}
                </div>
            </div>
        </div>
    </div>
</div>





















{/* Done */}
<div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="text-primary-gradient fw-medium">How It Works</h5>
            <h1 className="mb-5">3 Easy Steps</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: '100px', height: '100px' }}>
                        <i className="fa fa-cog fa-3x text-white"></i>
                    </div>
                    <h5 className="mt-4 mb-3">Install the App</h5>
                    <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet</p>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: '100px', height: '100px' }}>
                        <i className="fa fa-address-card fa-3x text-white"></i>
                    </div>
                    <h5 className="mt-4 mb-3">Setup Your Profile</h5>
                    <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet</p>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: '100px', height: '100px' }}>
                        <i className="fa fa-check fa-3x text-white"></i>
                    </div>
                    <h5 className="mt-4 mb-3">Enjoy The Features</h5>
                    <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet</p>
                </div>
            </div>
        </div>
    </div>
</div>

























{/* Done */}
<div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6">
                {/* <img className="img-fluid wow fadeInUp" data-wow-delay="0.1s" src="img/about.png" alt="About Image" /> */}
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h5 className="text-primary-gradient fw-medium">Download</h5>
                <h1 className="mb-4">Download The Latest Version Of Our App</h1>
                <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                <div className="row g-4">
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                        <a href="" className="d-flex bg-primary-gradient rounded py-3 px-4">
                            <i className="fab fa-apple fa-3x text-white flex-shrink-0"></i>
                            <div className="ms-3">
                                <p className="text-white mb-0">Available On</p>
                                <h5 className="text-white mb-0">App Store</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                        <a href="" className="d-flex bg-secondary-gradient rounded py-3 px-4">
                            <i className="fab fa-android fa-3x text-white flex-shrink-0"></i>
                            <div className="ms-3">
                                <p className="text-white mb-0">Available On</p>
                                <h5 className="text-white mb-0">Play Store</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

























{/* Done */}
<div className="container-xxl py-5" id="pricing">
    <div className="container py-5 px-lg-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="text-primary-gradient fw-medium">Pricing Plan</h5>
            <h1 className="mb-5">Choose Your Plan</h1>
        </div>
        <div className="tab-class text-center pricing wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center bg-primary-gradient rounded-pill mb-5">
                <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="pill" href="#tab-1">Monthly</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="pill" href="#tab-2">Yearly</button>
                </li>
            </ul>
            <div className="tab-content text-start">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="bg-light rounded">
                                <div className="border-bottom p-4 mb-4">
                                    <h4 className="text-primary-gradient mb-1">Starter Plan</h4>
                                    <span>Powerful & Awesome Features</span>
                                </div>
                                <div className="p-4 pt-0">
                                    <h1 className="mb-3">
                                        <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>14.99
                                        <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Month</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>HTML5 & CSS3</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Bootstrap v5</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Responsive Layout</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Cross-browser Support</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded border">
                                <div className="border-bottom p-4 mb-4">
                                    <h4 className="text-primary-gradient mb-1">Advance Plan</h4>
                                    <span>Powerful & Awesome Features</span>
                                </div>
                                <div className="p-4 pt-0">
                                    <h1 className="mb-3">
                                        <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>24.99
                                        <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Month</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>HTML5 & CSS3</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Bootstrap v5</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Responsive Layout</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Cross-browser Support</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <a href="#" className="btn btn-secondary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded">
                                <div className="border-bottom p-4 mb-4">
                                    <h4 className="text-primary-gradient mb-1">Premium Plan</h4>
                                    <span>Powerful & Awesome Features</span>
                                </div>
                                <div className="p-4 pt-0">
                                    <h1 className="mb-3">
                                        <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>34.99
                                        <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Month</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>HTML5 & CSS3</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Bootstrap v5</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Responsive Layout</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Cross-browser Support</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade p-0">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="bg-light rounded">
                                <div className="border-bottom p-4 mb-4">
                                    <h4 className="text-primary-gradient mb-1">Starter Plan</h4>
                                    <span>Powerful & Awesome Features</span>
                                </div>
                                <div className="p-4 pt-0">
                                    <h1 className="mb-3">
                                        <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>114.99
                                        <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Yearly</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>HTML5 & CSS3</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Bootstrap v5</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Responsive Layout</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Cross-browser Support</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded border">
                                <div className="border-bottom p-4 mb-4">
                                    <h4 className="text-primary-gradient mb-1">Advance Plan</h4>
                                    <span>Powerful & Awesome Features</span>
                                </div>
                                <div className="p-4 pt-0">
                                    <h1 className="mb-3">
                                        <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>124.99
                                        <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Yearly</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>HTML5 & CSS3</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Bootstrap v5</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Responsive Layout</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Cross-browser Support</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded">
                                <div className="border-bottom p-4 mb-4">
                                    <h4 className="text-primary-gradient mb-1">Premium Plan</h4>
                                    <span>Powerful & Awesome Features</span>
                                </div>
                                <div className="p-4 pt-0">
                                    <h1 className="mb-3">
                                        <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>134.99
                                        <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Yearly</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>HTML5 & CSS3</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Bootstrap v5</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Responsive Layout</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Cross-browser Support</span>
                                        <i className="fa fa-check text-primary-gradient pt-1"></i>
                                    </div>
                                    <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>






















{/* Done */}
<div className="container-xxl py-5" id="review">
    <div className="container py-5 px-lg-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="text-primary-gradient fw-medium">Testimonial</h5>
            <h1 className="mb-5">What Say Our Clients!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div className="testimonial-item rounded p-4">
                <div className="d-flex align-items-center mb-4">
                    {/* <img className="img-fluid bg-white rounded flex-shrink-0 p-1" src="img/testimonial-1.jpg" style={{ width: '85px', height: '85px' }} /> */}
                    <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="mb-1">Profession</p>
                        <div>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                        </div>
                    </div>
                </div>
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
            {/* Repeat for other testimonials */}
            <div className="testimonial-item rounded p-4">
                <div className="d-flex align-items-center mb-4">
                    {/* <img className="img-fluid bg-white rounded flex-shrink-0 p-1" src="img/testimonial-2.jpg" style={{ width: '85px', height: '85px' }} /> */}
                    <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="mb-1">Profession</p>
                        <div>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                        </div>
                    </div>
                </div>
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
            <div className="testimonial-item rounded p-4">
                <div className="d-flex align-items-center mb-4">
                    {/* <img className="img-fluid bg-white rounded flex-shrink-0 p-1" src="img/testimonial-3.jpg" style={{ width: '85px', height: '85px' }} /> */}
                    <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="mb-1">Profession</p>
                        <div>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                        </div>
                    </div>
                </div>
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
            <div className="testimonial-item rounded p-4">
                <div className="d-flex align-items-center mb-4">
                    {/* <img className="img-fluid bg-white rounded flex-shrink-0 p-1" src="img/testimonial-4.jpg" style={{ width: '85px', height: '85px' }} /> */}
                    <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="mb-1">Profession</p>
                        <div>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                            <small className="fa fa-star text-warning"></small>
                        </div>
                    </div>
                </div>
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
        </div>
    </div>
</div>





















{/* Done */}
<div className="container-xxl py-5" id="contact">
    <div className="container py-5 px-lg-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="text-primary-gradient fw-medium">Contact Us</h5>
            <h1 className="mb-5">Get In Touch!</h1>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-9">
                <div className="wow fadeInUp" data-wow-delay="0.3s">
                    <p className="text-center mb-4">
                        The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                    </p>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-primary-gradient rounded-pill py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
























<div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
        <div className="row g-5">
            <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Address</h4>
                <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Quick Link</h4>
                <a className="btn btn-link" href="#">About Us</a>
                <a className="btn btn-link" href="#">Contact Us</a>
                <a className="btn btn-link" href="#">Privacy Policy</a>
                <a className="btn btn-link" href="#">Terms & Condition</a>
                <a className="btn btn-link" href="#">Career</a>
            </div>
            <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Popular Link</h4>
                <a className="btn btn-link" href="#">About Us</a>
                <a className="btn btn-link" href="#">Contact Us</a>
                <a className="btn btn-link" href="#">Privacy Policy</a>
                <a className="btn btn-link" href="#">Terms & Condition</a>
                <a className="btn btn-link" href="#">Career</a>
            </div>
            <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                <div className="position-relative w-100 mt-3">
                    <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: '48px' }} />
                    <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary-gradient fs-4"></i></button>
                </div>
            </div>
        </div>
    </div>
    <div className="container px-lg-5">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                    {/* Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> */}
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                        <a href="#">Home</a>
                        <a href="#">Cookies</a>
                        <a href="#">Help</a>
                        <a href="#">FQAs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>







  </div>
);




















































































































































































/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  return ({wholeBody});
}

export default App;