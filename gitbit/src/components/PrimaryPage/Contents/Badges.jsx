import React from "react";
import './Allcontent.css';

function Badges() {
    // Mock data for badges
    const badges = [
        { id: 1, name: "First Commit", description: "Awarded for your first commit", earned: false },
        { id: 2, name: "100 Contributions", description: "Awarded for reaching 100 contributions", earned: false },
        { id: 3, name: "500 Contributions", description: "Awarded for reaching 500 contributions", earned: false },
        { id: 4, name: "1000 Contributions", description: "Awarded for reaching 1000 contributions", earned: false },
        { id: 5, name: "1500 Contributions", description: "Awarded for reaching 1500 contributions", earned: false },
        { id: 6, name: "2000 Contributions", description: "Awarded for reaching 2000 contributions", earned: false },
        { id: 7, name: "Consistency (7)", description: "The one who commited 1week nonstop", earned: false },
        { id: 8, name: "Consistency (30)", description: "The one who commited 1Month nonstop", earned: false },
        { id: 9, name: "Consistency (90)", description: "The one who commited 3Months nonstop", earned: false },
        { id: 10, name: "Consistency (180)", description: "The one who commited 6Months nonstop", earned: false },
        { id: 11, name: "Consistency (365)", description: "The one who commited 1Year nonstop", earned: false },
        { id: 12, name: "Week Warrior (5)", description: "Contributed 7 days nonstop with 5 daily commits", earned: false },
        { id: 13, name: "Month Warrior (5)", description: "Contributed 30 days nonstop with 5 daily commits", earned: false },
        { id: 14, name: "Year Warrior (5)", description: "Contributed 365 days nonstop with 5 daily commits", earned: false }
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
