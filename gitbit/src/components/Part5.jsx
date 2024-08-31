import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part5() {
    return(
        <div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="text-primary-gradient fw-medium">Screenshots</h5>
                <h1 className="mb-4">User Friendly Interface And Very Easy To Use</h1>
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
    );
}

export default Part5;
