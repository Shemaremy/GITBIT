import React, { useEffect, useState } from "react";
import './Allcontent.css';

function Badges({ TotalContributions, calendarData }) {


    // Mock data for badges
    const [badges, setBadges] = useState([
        { id: 1, name: "First Commit", description: "Awarded for your first commit", earned: false },
        { id: 2, name: "100 Contributions", description: "Awarded for reaching 100 contributions", earned: false },
        { id: 3, name: "500 Contributions", description: "Awarded for reaching 500 contributions", earned: false },
        { id: 4, name: "1000 Contributions", description: "Awarded for reaching 1000 contributions", earned: false },
        { id: 5, name: "1500 Contributions", description: "Awarded for reaching 1500 contributions", earned: false },
        { id: 6, name: "2000 Contributions", description: "Awarded for reaching 2000 contributions", earned: false },

        { id: 7, name: "Consistency (7)", description: "Commited 1 week nonstop", earned: false },
        { id: 8, name: "Consistency (30)", description: "Commited 1 Month nonstop", earned: false },
        { id: 9, name: "Consistency (90)", description: "Commited 3 Months nonstop", earned: false },
        { id: 10, name: "Consistency (180)", description: "Commited 6 Months nonstop", earned: false },
        { id: 11, name: "Consistency (365)", description: "Commited 1 Year nonstop", earned: false },

        { id: 12, name: "Week Warrior (5)", description: "Contributed 7 days nonstop with 5 daily commits", earned: false },
        { id: 13, name: "Month Warrior (5)", description: "Contributed 30 days nonstop with 5 daily commits", earned: false },
        { id: 14, name: "Year Warrior (5)", description: "Contributed 365 days nonstop with 5 daily commits", earned: false }
    ]);














// ======================================== DETERMINING BADGES ===================================================================
// ======================================== DETERMINING BADGES ===================================================================
// ======================================== DETERMINING BADGES ===================================================================





    // ====== FINDING TOTALS IN ONE SECTION ============================================
    const TotalCommits = (TotalContributions) => {
        const Total = parseInt(TotalContributions.replace(/,/g, ''));
        const thresholds = [1, 100, 500, 1000, 1500, 2000];
        for (let i = 0; i < thresholds.length; i++) {
            if (Total >= thresholds[i]) {
                badges[i].earned = true;
            } else {
                break;
            }
        }
    }; 
    TotalCommits(TotalContributions);



 
    // ====== 7 DAY CONSISTENCY ============================================
    const Consistency1 = (calendarData, consecutiveDays = 7) => {
        const results = [];

        const flattenedData = calendarData.flat();

        let start = 0;
        while (start <= flattenedData.length - consecutiveDays) {
            let streak = true;

            for (let i = 0; i < consecutiveDays; i++) {
                if (flattenedData[start + i].count === 0) {
                    streak = false;
                    break;
                }
            }

            if (streak) {
                const startDate = flattenedData[start].date;
                const endDate = flattenedData[start + consecutiveDays - 1].date;
                results.push({ startDate, endDate });
                badges[6].earned = true;
            }
            start++;
        }

        results.forEach(period => {
            //console.log(`7-day contribution streak from ${period.startDate} to ${period.endDate}`);
        });
    }    
    Consistency1(calendarData);




    // ====== 30 DAYS CONSISTENCY ============================================
    const Consistency2 = (calendarData, consecutiveDays = 30) => {
        const results = [];

        const flattenedData = calendarData.flat();

        let start = 0;
        while (start <= flattenedData.length - consecutiveDays) {
            let streak = true;

            for (let i = 0; i < consecutiveDays; i++) {
                if (flattenedData[start + i].count === 0) {
                    streak = false;
                    break;
                }
            }

            if (streak) {
                const startDate = flattenedData[start].date;
                const endDate = flattenedData[start + consecutiveDays - 1].date;
                results.push({ startDate, endDate });
                badges[7].earned = true;
            }
            start++;
        }

        results.forEach(period => {
            //console.log(`30-day contribution streak from ${period.startDate} to ${period.endDate}`);
        });
    }    
    Consistency2(calendarData);





    // ====== 90 DAYS CONSISTENCY ============================================
    const Consistency3 = (calendarData, consecutiveDays = 90) => {
        const results = [];

        const flattenedData = calendarData.flat();

        let start = 0;
        while (start <= flattenedData.length - consecutiveDays) {
            let streak = true;

            for (let i = 0; i < consecutiveDays; i++) {
                if (flattenedData[start + i].count === 0) {
                    streak = false;
                    break;
                }
            }

            if (streak) {
                const startDate = flattenedData[start].date;
                const endDate = flattenedData[start + consecutiveDays - 1].date;
                results.push({ startDate, endDate });
                badges[8].earned = true;
            }
            start++;
        }

        results.forEach(period => {
            //console.log(`90-day contribution streak from ${period.startDate} to ${period.endDate}`);
        });
    }    
    Consistency3(calendarData);






    // ====== 180 DAY CONSISTENCY ============================================
    const Consistency4 = (calendarData, consecutiveDays = 180) => {
        const results = [];

        const flattenedData = calendarData.flat();

        let start = 0;
        while (start <= flattenedData.length - consecutiveDays) {
            let streak = true;

            for (let i = 0; i < consecutiveDays; i++) {
                if (flattenedData[start + i].count === 0) {
                    streak = false;
                    break;
                }
            }

            if (streak) {
                const startDate = flattenedData[start].date;
                const endDate = flattenedData[start + consecutiveDays - 1].date;
                results.push({ startDate, endDate });
                badges[9].earned = true;
            }
            start++;
        }

        results.forEach(period => {
            //console.log(`180-day contribution streak from ${period.startDate} to ${period.endDate}`);
        });
    }    
    Consistency4(calendarData);





    // ====== 365 DAY CONSISTENCY ============================================
    const Consistency5 = (calendarData, consecutiveDays = 365) => {
        const results = [];

        const flattenedData = calendarData.flat();

        let start = 0;
        while (start <= flattenedData.length - consecutiveDays) {
            let streak = true;

            for (let i = 0; i < consecutiveDays; i++) {
                if (flattenedData[start + i].count === 0) {
                    streak = false;
                    break;
                }
            }

            if (streak) {
                const startDate = flattenedData[start].date;
                const endDate = flattenedData[start + consecutiveDays - 1].date;
                results.push({ startDate, endDate });
                badges[10].earned = true;
            }
            start++;
        }

        results.forEach(period => {
            //console.log(`365-day contribution streak from ${period.startDate} to ${period.endDate}`);
        });
    }    
    Consistency5(calendarData);




    // ====== WEEK WARRIOR ============================================
    const WeekWarrior = (calendarData, consecutiveDays = 7) => {
        const results = [];

        const flattenedData = calendarData.flat();

        let start = 0;
        while (start <= flattenedData.length - consecutiveDays) {
            let streak = true;

            for (let i = 0; i < consecutiveDays; i++) {
                if (flattenedData[start + i].count < 5) {
                    streak = false;
                    break;
                }
            }

            if (streak) {
                const startDate = flattenedData[start].date;
                const endDate = flattenedData[start + consecutiveDays - 1].date;
                results.push({ startDate, endDate });
                badges[11].earned = true;
            }
            start++;
        }

        results.forEach(period => {
            //console.log(`7-day contribution streak from ${period.startDate} to ${period.endDate}`);
        });
    }    
    WeekWarrior(calendarData);



    // ====== MONTH WARRIOR ============================================
    const MonthWarrior = (calendarData, consecutiveDays = 30) => {
        const results = [];

        const flattenedData = calendarData.flat();

        let start = 0;
        while (start <= flattenedData.length - consecutiveDays) {
            let streak = true;

            for (let i = 0; i < consecutiveDays; i++) {
                if (flattenedData[start + i].count < 5) {
                    streak = false;
                    break;
                }
            }

            if (streak) {
                const startDate = flattenedData[start].date;
                const endDate = flattenedData[start + consecutiveDays - 1].date;
                results.push({ startDate, endDate });
                badges[11].earned = true;
            }
            start++;
        }

        results.forEach(period => {
            //console.log(`30-day contribution streak from ${period.startDate} to ${period.endDate}`);
        });
    }    
    MonthWarrior(calendarData);




    // ====== YEAR WARRIOR ============================================
    const YearWarrior = (calendarData, consecutiveDays = 365) => {
        const results = [];

        const flattenedData = calendarData.flat();

        let start = 0;
        while (start <= flattenedData.length - consecutiveDays) {
            let streak = true;

            for (let i = 0; i < consecutiveDays; i++) {
                if (flattenedData[start + i].count < 5) {
                    streak = false;
                    break;
                }
            }

            if (streak) {
                const startDate = flattenedData[start].date;
                const endDate = flattenedData[start + consecutiveDays - 1].date;
                results.push({ startDate, endDate });
                badges[11].earned = true;
            }
            start++;
        }

        results.forEach(period => {
            //console.log(`360-day contribution streak from ${period.startDate} to ${period.endDate}`);
        });
    }    
    YearWarrior(calendarData);

    





// ==================================================================================================================================
// ==================================================================================================================================
// ==================================================================================================================================

















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
