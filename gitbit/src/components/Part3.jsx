import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part3() {
    return(
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
    );
}

export default Part3;
