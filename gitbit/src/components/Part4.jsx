import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part4() {
    return(
        <div className="container-xxl py-5 features-section" id="feature">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="text-primary-gradient fw-medium">App Features</h5>
                    <h1 className="mb-5">Awesome Features</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-chart-simple text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Contribution Analytics</h5>
                            <p className="m-0">Provides detailed analytics such as charts and graphs, to show your activity over time.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-bell text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Notifications and Reminders</h5>
                            <p className="m-0">Set up personalized notifications for various milestones or reminders to contribute on a specific day.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-trophy text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Achievements</h5>
                            <p className="m-0">Users can set personal contribution goals and unlock achievements or badges based on their activities.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-shield-alt text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Fully Secured</h5>
                            <p className="m-0">Offers two-factor authentication for user accounts, to ensure accounts are fully secured with us.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-cloud text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Cloud Storage</h5>
                            <p className="m-0">Contribution data on cloud, allowing access to history and statistics from any device with an internet connection.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-file text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Weekly report</h5>
                            <p className="m-0">Send weekly emails summarizing their contributions, streaks, and any goals they have achieved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part4;
