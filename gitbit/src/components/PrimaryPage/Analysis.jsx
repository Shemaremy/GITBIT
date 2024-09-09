import React, { useState } from "react";
import './Analysis.css';

function Analysis() {



    // When the burger is clicked, this is called
    const toggleMobileMenu = () => {
        const menu_btn = document.querySelector('.hamburger');
        const show_panel = document.querySelector('.analysis-nav-mobilepanel');
        const fixed_page = document.querySelector('body');
        menu_btn.classList.toggle('is-active');
        show_panel.classList.toggle('is-active');
        fixed_page.classList.toggle('body-fixed');
    };

    
    
    
    


    // ------ Toggling the left nav panel buttons ----------------------------------------    
    const PanelState = {
        DASHBOARD: 'dashboard',
        BADGES: 'badges',
        GOALS: 'goals',
        NOTIFICATIONS: 'notifications',
        SETTINGS: 'settings',
        HELP: 'help',
        SIGNOUT: 'signout'
    };

    const [panelChange, setPanelChange] = useState(PanelState.DASHBOARD);

    const handlePanelChange = (newState) => {
        setPanelChange(newState);
    };

    const isActive = (panel) => panelChange === panel ? 'active' : '';






    // Left panel wrapper
    const LeftPanel = (
        <>
            <div className="basic-options">
                <p 
                    className={`director ${isActive(PanelState.DASHBOARD)}`} 
                    onClick={() => handlePanelChange(PanelState.DASHBOARD)}>
                    <i className="fa-solid fa-house-chimney"></i>&nbsp;&nbsp; Dashboard
                </p>
                <p 
                    className={`director ${isActive(PanelState.BADGES)}`} 
                    onClick={() => handlePanelChange(PanelState.BADGES)}>
                    <i className="fa-solid fa-shield-halved"></i>&nbsp;&nbsp; Your badges
                </p>
                <p 
                    className={`director ${isActive(PanelState.GOALS)}`} 
                    onClick={() => handlePanelChange(PanelState.GOALS)}>
                    <i className="fa-solid fa-bullseye"></i>&nbsp;&nbsp; Goals
                </p>
                <p 
                    className={`director ${isActive(PanelState.NOTIFICATIONS)}`} 
                    onClick={() => handlePanelChange(PanelState.NOTIFICATIONS)}>
                    <i className="fa-solid fa-bell"></i>&nbsp;&nbsp; Notifications
                </p>
            </div>
            <div className="bottom-settings">
                <p 
                    className={`director ${isActive(PanelState.SETTINGS)}`} 
                    onClick={() => handlePanelChange(PanelState.SETTINGS)}>
                    <i className="fa-solid fa-gear"></i>&nbsp;&nbsp; Settings
                </p>
                <p 
                    className={`director ${isActive(PanelState.HELP)}`} 
                    onClick={() => handlePanelChange(PanelState.HELP)}>
                    <i className="fa-solid fa-headphones-simple"></i>&nbsp;&nbsp; Help center
                </p>
                <p 
                    className={`director ${isActive(PanelState.SIGNOUT)}`} 
                    onClick={() => handlePanelChange(PanelState.SIGNOUT)}>
                    Sign out &nbsp;&nbsp; <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </p>
            </div>
        </>
    );





    return (
        <div className="parent-analysis">
            <div className="analysis-nav-mobilepanel">
                <div className="analysis-options-mobile">
                    {LeftPanel}
                </div>
            </div>
            <div className="left-part-panel">
                <div className="left-wrapper">
                    <div className="profile-section">
                        <div className="img-container"></div>
                        <h3>Remy</h3>
                    </div>
                    {LeftPanel}
                </div>
            </div>
            <div className="right-part-panel">
                <div className="right-wrapper">
                    <div className="Mobile-navbar">
                        <div className="left-part-nav">
                            <div className="burger">
                                <div className="hamburger_container">
                                    <button className="hamburger" onClick={toggleMobileMenu}>
                                        <div className="bar"></div>
                                    </button>
                                </div>
                            </div>
                            <h2>Remy</h2>
                        </div>
                        <div className="right-part-nav">
                            <i className="fa-solid fa-bell"></i>
                            <i className="fa-solid fa-shield-halved"></i>
                            <div className="img-container"></div>                            
                        </div>
                    </div>
                    <div className="top-headers">
                        <h1 className="welcome-header">Welcome back, Remy</h1>
                        <p className="main-date">Monday, 23 November</p>
                    </div>
                    <div className="three-panels-section">
                        <div className="first-panel-analysis">
                            <h5 className="min-panel-h5">Contributions</h5>
                            <p className="min-panel-par">1,343 contributions</p>
                            <h6 className="min-panel-h6">29 repositories</h6>
                        </div>
                        <div className="second-panel-analysis">
                            <h5 className="min-panel-h5">Yesterday</h5>
                            <p className="min-panel-par">3 contributions</p>
                            <h6 className="min-panel-h6">Status: &nbsp; <i className="fa-solid fa-thumbs-up"></i></h6>
                        </div>
                        <div className="third-panel-analysis">
                            <h5 className="min-panel-h5">Current badge</h5>
                            <p className="min-panel-par">No badge earned <i className="fa-solid fa-ban"></i></p>
                            <h6 className="min-panel-h6">Click <a href="#">here</a> to earn one</h6>
                        </div>
                    </div>
                    <div className="github-analysis-panel"></div>
                </div>
            </div>
        </div>
    );
}

export default Analysis;
