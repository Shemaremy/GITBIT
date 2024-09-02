import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'
import './Mods.css'


function Part7() {
    return(
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid wow fadeInUp" data-wow-delay="0.1s" src="img/chart-screenshot.png" alt="About Image" />
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h5 className="text-primary-gradient fw-medium">Try GitBit</h5>
                        <h1 className="mb-4">Ready to try GitBit?</h1>
                        <p className="mb-4">While we are working on building an awesome app for mobile devices, we have already made a web app or browser version you can try on browser with all accessibilities. Click the button below to try a browser version. It is nice too.</p>
                        <div className="row g-4">
                            <div className="col-sm-6 wow fadeIn try-container" data-wow-delay="0.7s">
                                <a href="" className="d-flex bg-secondary-gradient rounded py-3 px-4">
                                    <i className="fab fa-chrome fa-2x text-white flex-shrink-0"></i>
                                    <div className="ms-3">
                                        <h5 className="text-white mb-0">Try for Free</h5>
                                        <p className="text-white mb-0 browser-version">Browser version</p>
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
