import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part7() {
    return(
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
    );
}

export default Part7;
