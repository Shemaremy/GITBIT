import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part2() {
    return(
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
    );
}

export default Part2;
