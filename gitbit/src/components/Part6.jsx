import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part6() {
    return(
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
    );
}

export default Part6;
