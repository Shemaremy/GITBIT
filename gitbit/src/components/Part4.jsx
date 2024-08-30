import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part4() {
    return(
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
    );
}

export default Part4;
