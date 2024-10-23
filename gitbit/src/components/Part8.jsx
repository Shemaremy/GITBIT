import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part8() {
    return(
        <div className="container-xxl py-5" id="about">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="text-primary-gradient fw-medium">Who we are</h5>
                    <h1 className="mb-5">About us</h1>
                </div>
                <div className="tab-class text-center pricing wow fadeInUp" data-wow-delay="0.1s">
                    {/* <div className="tab-content text-start">
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
                    </div> */}
                    <p>
                        Apparently, you won't have to expect the "about us" as many do, because it is about me not us. The reason
                        is because this web app is built by one individual who is 'me'. I am an independent Software Engineer
                        based in Rwanda, who is mainly specialised in MERN stack. I built this project so as to specialize deeply into backend area.
                        I wanted to deeply dive into some RESTAPI's, with the CRUD operations. It is not a school project, its more of
                        a personal project for my portfolio.
                    </p>
                    <p>
                        Probably, this is not the first backend project that I've built, but it is the hardest one because you won't find many tutorials
                        out there on how to build a project like this since I've not cloned it from somewhere else. I've tried building something unique,
                        something that has not been built before for a nice looking resume. Talking of a resume, you can explore more about my portfolio website 
                        on this link: &nbsp;<a href="https://remyshema.netlify.app">portfolio.</a>
                    </p>
                    <p>
                        It contains all about me, journey and projects that I've built. Feel free to connect with me, and remember, GitBit is the only way you'll
                        improve your contribution habit and build more projects.
                    </p>
                    <p>
                        Enjoy!!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Part8;
