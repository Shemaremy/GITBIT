import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part8() {
    return(
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
    );
}

export default Part8;
