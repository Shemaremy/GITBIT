import React from "react";
import './Allcontent.css';

function Badges() {
    // Mock data for badges
    const badges = [
        { id: 1, name: "First Commit", description: "Awarded for your first commit", earned: true },
        { id: 2, name: "50 Contributions", description: "Awarded for reaching 50 contributions", earned: true },
        { id: 3, name: "Open Source Champion", description: "Contributed to open source projects", earned: false },
        { id: 4, name: "Open Source Champion", description: "Contributed to open source projects", earned: false },
        { id: 5, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 6, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 7, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 8, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 9, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 10, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 11, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 12, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 13, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 14, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 15, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false },
        { id: 16, name: "Daily Streak", description: "Contributed for 7 days in a row", earned: false }
    ];

    return (
        <div className="badges_panel">
            <h1>Badges</h1>
            <p>You can earn badges by contributing regularly and achieving milestones! Earn all these badges and get a cash prize reward of $100!!</p>
            <div className="badge_grid">
                {badges.map(badge => (
                    <div key={badge.id} className={`badge ${badge.earned ? 'earned' : 'locked'}`}>
                        <div className="badge_icon">
                            <i className={badge.earned ? "fa fa-award" : "fa fa-lock"} aria-hidden="true"></i>
                        </div>
                        <h3>{badge.name}</h3>
                        <p>{badge.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Badges;
