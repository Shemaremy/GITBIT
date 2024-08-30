import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part11() {
    return(
        <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
        <div className="row g-5">
            <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Address</h4>
                <p><i className="fa fa-map-marker-alt me-3"></i>Kigali - Rwanda</p>
                <p><i className="fa fa-phone-alt me-3"></i>+250 783 674 289</p>
                <p><i className="fa fa-envelope me-3"></i>remyshema20@gmail.com</p>
                <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Quick Link</h4>
                <a className="btn btn-link" href="#">About Us</a>
                <a className="btn btn-link" href="#">Contact Us</a>
                <a className="btn btn-link" href="#">Privacy Policy</a>
                <a className="btn btn-link" href="#">Terms & Condition</a>
                <a className="btn btn-link" href="#">Career</a>
            </div>
            <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Popular Links</h4>
                <a className="btn btn-link" href="#">About Us</a>
                <a className="btn btn-link" href="#">Contact Us</a>
                <a className="btn btn-link" href="#">Privacy Policy</a>
                <a className="btn btn-link" href="#">Terms & Condition</a>
                <a className="btn btn-link" href="#">Career</a>
            </div>
            <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                <div className="position-relative w-100 mt-3">
                    <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: '48px' }} />
                    <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary-gradient fs-4"></i></button>
                </div>
            </div>
        </div>
    </div>
    <div className="container px-lg-5">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="#">GitBit</a>, All Right Reserved.
                    {/* Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> */}
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                        <a href="#">Home</a>
                        <a href="#">Cookies</a>
                        <a href="#">Help</a>
                        <a href="#">FQAs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default Part11;
