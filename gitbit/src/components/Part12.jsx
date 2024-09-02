import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'
import './Mods.css'


function Part12() {

    const handleGoToLink = (sectionId) => {
        const thePanel = document.querySelector('.Mobile-panel')
        const hamburger = document.querySelector('.hamburger')
        const fixed_body = document.querySelector('body');

        thePanel.classList.remove('is-active');
        hamburger.classList.remove('is-active');
        fixed_body.classList.remove('fixed');
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return(
        <div className="Mobile-panel">
            <div className="in-mobile-container">
                <div className="rimwe">
                    <h1 className="panel-option">Get started</h1>
                </div>
                <div className="kabiri">
                    <i className="fa-solid fa-users"></i> &nbsp;&nbsp;&nbsp;
                    <p className="panel-option">About us</p>
                </div>
                <div className="gatatu" onClick={() => handleGoToLink('feature')}>
                    <i className="fa-solid fa-list"></i> &nbsp;&nbsp;&nbsp;
                    <p className="panel-option">Features</p>
                </div>
                <div className="kane" onClick={() => handleGoToLink('contact')}>
                    <i className="fa-solid fa-address-book"></i> &nbsp;&nbsp;&nbsp;
                    <p className="panel-option">Contact</p>
                </div>
            </div>
        </div>
    );
}

export default Part12;
