import React, {useEffect} from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part5() {

    useEffect(() => {
        if (window.$) {
          window.$('.screenshot-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
          });
        }
      }, []);

      
    return(
        <div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="text-primary-gradient fw-medium">Screenshots</h5>
                <h1 className="mb-4">User Friendly Interface And Very Easy To Use</h1>
                <p className="mb-4">Our web app offers a responsive, simple and easy-to-use interface that makes it quick and comfortable for every device to use such as:</p>
                <p><i className="fa fa-check text-primary-gradient me-3"></i>Desktops and large screen devices</p>
                <p><i className="fa fa-check text-primary-gradient me-3"></i>Tablets</p>
                <p className="mb-4"><i className="fa fa-check text-primary-gradient me-3"></i>Mobile phones of any width and throttling support</p>
                {/* <a href="" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Read More</a> */}
            </div>
            <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp" data-wow-delay="0.3s">
                <div className="owl-carousel screenshot-carousel">
                    <img className="img-fluid" src="img/screenshots/image.png" alt="" />
                    <img className="img-fluid" src="img/screenshots/image2.png" alt="" />
                    <img className="img-fluid" src="img/screenshots/image3.png" alt="" />
                    <img className="img-fluid" src="img/screenshots/image5.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default Part5;
