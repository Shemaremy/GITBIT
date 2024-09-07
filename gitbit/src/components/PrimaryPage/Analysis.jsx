import React from "react";
import './Analysis.css'

function Analysis () {
    return(
        <div className="parent-analysis">
            <div className="left-part-panel">
                <div className="left-wrapper">
                    <div className="profile-section">
                        <div className="img-container"></div>
                        <h3>Remy</h3>
                    </div>
                    <div className="basic-options">
                        <p><i className="fa-solid fa-house-chimney"></i> &nbsp;&nbsp; Dashboard</p>
                        <p><i className="fa-solid fa-shield-halved"></i> &nbsp;&nbsp; Your badges</p>
                        <p><i className="fa-solid fa-bullseye"></i> &nbsp;&nbsp; Goals</p>
                        <p><i className="fa-solid fa-bell"></i> &nbsp;&nbsp; Notifications</p>
                    </div>
                    <div className="bottom-settings">
                        <p><i className="fa-solid fa-gear"></i> &nbsp;&nbsp; Settings</p>
                        <p><i className="fa-solid fa-headphones-simple"></i> &nbsp;&nbsp; Help center</p>
                        <p>Sign out &nbsp;&nbsp; <i className="fa-solid fa-arrow-right-from-bracket"></i></p>
                    </div>
                </div>
            </div>
            <div className="right-part-panel">
                <div className="right-wrapper"></div>
            </div>
        </div>
    );
}

export default Analysis;