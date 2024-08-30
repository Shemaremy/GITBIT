import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part9() {
    return(
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
    );
}

export default Part9;
