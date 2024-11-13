import React, { useState, useEffect } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import  { Tooltip as ReactTooltip }  from 'react-tooltip';
import { useNavigate } from "react-router-dom";

import Part1 from "../Part1";
import moment from 'moment';
import './Analysis.css';

import Badges from "./Contents/Badges";
import Goals from "./Contents/Goals";
import Notifications from "./Contents/Notifications";
import Settings from "./Contents/Settings";
import Help from "./Contents/Helpcenter";






function Analysis() {







    const PanelState = {
        DASHBOARD: 'dashboard',
        BADGES: 'badges',
        GOALS: 'goals',
        NOTIFICATIONS: 'notifications',
        SETTINGS: 'settings',
        HELP: 'help',
        SIGNOUT: 'signout'
    };



    const [calendarData, setCalendarData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ status, setStatus ] = useState(<i className="fa-solid fa-thumbs-up"></i>);
    const [ username, setUsername ] = useState('user');
    const [ profile, setProfile ] = useState('none');
    const [ contributions, setContributions ] = useState(0);
    const [ repositories, setRepositories ] = useState(0);
    const [ yesterday, setYesterday ] = useState();
    const [panelChange, setPanelChange] = useState(PanelState.DASHBOARD);
    const [goal, setGoal] = useState();
    const [dateprevious, setDateprevious] = useState();
    const [daysremain, setDaysremain] = useState();
    const [finishline, setFinishline] = useState();
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState("All");
    const [allCalendarData, setAllCalendarData] = useState([]);
    const [totalContributions, setTotalContributions] = useState();
    const [goalExists, setGoalExists] = useState('No');
    const [goals, setGoals] = useState([]);
    const [progress, setProgress] = useState();
    const [goalStart, setGoalStart] = useState();
    const [goalEnd, setGoalEnd] = useState();
    const [goalTarget, setGoalTarget] = useState();
    const [formattedEnd, setFormattedEnd] = useState();
    const [goalName, setGoalName] = useState();
    const [settings, setSettings] = useState();

    const navigate = useNavigate();























    // ------------- Fetching user data from database ---------------------------------------------------------
    useEffect(() => {
        const fetchUserData = async () => {

            const token = localStorage.getItem('token');

            if (!token) {
                alert('Access token not found');
                navigate('/accounts');
                return;
            }

            try {
                const response = await fetch('https://git-bit.glitch.me/fetchdata', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                
                const data = await response.json();

                if (!response.ok) {
                    if ((JSON.stringify(data)).includes('Invalid token')) {
                        //alert("Token expired")
                        navigate('/accounts');
                    } else {
                        alert(JSON.stringify(data));
                    }
                    throw new Error('Failed to fetch user data');
                } else {
                    const storedYesterday = localStorage.getItem("yesterday");

                    setGoal(data.goal)
                    setGoalStart(data.goal.startDate);
                    setGoalEnd(data.goal.endDate);
                    setGoalTarget(data.goal.Target);
                    setGoalName(data.goal.goalName)
                    
                    setUsername(data.username);
                    setProfile(data.profile);
                    setContributions(data.contributions.toLocaleString());
                    setRepositories(data.repositories);
                    
                    setSettings(data.settings)

                    // Parse and set the 'yesterday' value
                    const yesterdayValue = parseInt(storedYesterday, 10);
                    setYesterday(yesterdayValue);

                    
                    const formattedContributions = data.calendar.map(week => 
                        Object.values(week.contributionDays).map(day => ({
                            date: moment(day.date).format('YYYY-MM-DD'),
                            count: day.contributionCount
                        }))
                    ).flat();


                    // Get years since the user started using github
                    const uniqueYears = [
                        new Date().getFullYear(),
                        ...new Set(formattedContributions.map(item => moment(item.date).year()))
                    ].filter((year, index, self) => self.indexOf(year) === index);
                    setYears(uniqueYears);
                    setAllCalendarData(formattedContributions);

                    setCalendarData(formattedContributions);
                                    
                    if (yesterdayValue < 1) {
                        setStatus(<i className="fa-solid fa-thumbs-down"></i>);
                    }

                    setLoading(false); 
    
                }
    
            } catch (error) {
                console.error('Error:', error);
                //console.error(error);
            }
        };
    
        fetchUserData();
    }, []);
    


    
    // ------ Checking the first notification -----------------------------------------------------------------
    const [previousFive, setPreviousFive] = useState(null);

    useEffect(() => {
        const fromNowPrevious = (calendarData, consecutiveDays = 5) => {
            const flattenedData = calendarData.flat();
        
            // Find the latest date in the data
            const latestDate = flattenedData.reduce((latest, current) => {
                const currentDate = new Date(current.date);
                return currentDate > latest ? currentDate : latest;
            }, new Date(0));
            const currentDate = latestDate.toISOString().slice(0, 10);
        
            // Calculate the date range from (currentDate - 5 days) to (currentDate - 1 day)
            const endDate = new Date(currentDate);
            const startDate = new Date(endDate);
            startDate.setDate(endDate.getDate() - consecutiveDays);
        
            // Filter contributions within the date range
            const countsInRange = flattenedData.filter((item) => {
                const itemDate = new Date(item.date);
                return itemDate >= startDate && itemDate < endDate;
            });
        
            // Sum the counts for the filtered range
            const totalCount = countsInRange.reduce((sum, item) => sum + item.count, 0);
            setPreviousFive(totalCount)

            setDateprevious(latestDate.toDateString())
        
            return totalCount;
        }; fromNowPrevious(calendarData);
        
        const findDaysleft = (goal) => {
            if (goal) {
                if (goal.goalName !== "None") {
                    const finishLine = new Date(goal.endDate);
                    const flattenedData = calendarData.flat();
        
                    const latestDate = flattenedData.reduce((latest, current) => {
                        const currentDate = new Date(current.date);
                        return currentDate > latest ? currentDate : latest;
                    }, new Date(0));

                    const currentDate = latestDate.toISOString().slice(0, 10);
                    const formattedFinishLine = finishLine.toISOString().slice(0, 10);
                    const daysDifference = Math.ceil((finishLine - latestDate) / (1000 * 60 * 60 * 24));

                    setDaysremain(daysDifference);
                    setFinishline(finishLine);
                }
            }
        }; findDaysleft(goal);
    }, [calendarData, goal]);










    // Helping to determing if the goal exists for the front page
    useEffect(() => {
        if (goal && goal.goalId !== 0) {
            setGoalExists("Yes");
            //console.log(goal)
        }
    });




    // ----------------------- HANDLING PROGRESS ------------------------------------------------------------
    // ----------------------- HANDLING PROGRESS ------------------------------------------------------------
    // ----------------------- HANDLING PROGRESS ------------------------------------------------------------

    useEffect(() => {
        const handleGoalProgress = async (username, goalId) => {
            if(goalStart && goalEnd) {
                // Finding the current date the calendar has to help us find counts in between
                const filteredContributions = calendarData.flat();
                const latestDate = calendarData.flat()
                .reduce((latest, current) => {
                    const currentDate = new Date(current.date);
                    return currentDate > latest ? currentDate : latest;
                }, new Date(0));
    
                const currentDate = latestDate.toISOString().slice(0, 10);
                const goalStartDate = new Date(goalStart).toISOString().slice(0, 10);
                const goalEndDate = new Date(goalEnd).toISOString().slice(0, 10);
    
    
                // Find contributions in range from start to current date
                const contributionsInRange = filteredContributions.filter(contribution => {
                    const contributionDate = new Date(contribution.date).toISOString().slice(0, 10);
                    return contributionDate >= goalStartDate && contributionDate <= currentDate;
                });
                
                const totalProgress = contributionsInRange.reduce((sum, contribution) => sum + contribution.count, 0);   
                setProgress(totalProgress);

                const formattedEnd = new Date(goalEndDate)
                setFormattedEnd(formattedEnd.toDateString().slice(3, 15))
                
                const isAchieved = totalProgress >= goalTarget;
                const isFailed = !isAchieved && currentDate === goalEndDate;
        
                // Update the specific goal's progress
                const updatedGoals = goals.map(g => 
                    g.goalId === goalId ? { ...g, Progress: totalProgress, achieved: isAchieved, failed: isFailed } : g
                );
        
                setGoals(updatedGoals);   
                
            }
        }; handleGoalProgress();
    }, [goalStart, goalEnd]);
    
    const [progressUpdated, setProgressUpdated] = useState(false);

    useEffect(() => {
        if (username && goals.length > 0 && calendarData && !progressUpdated) {
            const goalId = goals[0].goalId; // specify the goalId you want
            handleGoalProgress(username, goalId);
            setProgressUpdated(true); // Set to true after first update
        }
    }, [username, goals, calendarData, progressUpdated]);





    if (loading) {
        return <Part1/>;
    }
    

































    // ----------- Mobile burger options ------------------------------------------------------

    const toggleMobileMenu = () => {
        const menu_btn = document.querySelector('.hamburger');
        const show_panel = document.querySelector('.analysis-nav-mobilepanel');
        const fixed_page = document.querySelector('body');
        menu_btn.classList.toggle('is-active');
        show_panel.classList.toggle('is-active');
        fixed_page.classList.toggle('body-fixed');
    };



    // ----------- Year filtering options ------------------------------------------------------
    const handleYearChange = (event) => {
        const year = event.target.value;
        setSelectedYear(year);

        let filteredData;
    
        if (year === "All") {
            setCalendarData(allCalendarData); // Show all data for "All" selection
            setTotalContributions(contributions);
        } else {
            const startOfYear = moment(`01-01-${year}`, "DD-MM-YYYY").toDate();
            const endOfYear = moment(`31-12-${year}`, "DD-MM-YYYY").toDate();
    
            const filteredData = allCalendarData.filter(item => {
                const itemDate = new Date(item.date);
                return itemDate >= startOfYear && itemDate <= endOfYear;
            });
    
            setCalendarData(filteredData);
            const total = filteredData.reduce((sum, item) => sum + item.count, 0);
            setTotalContributions(total);
        };
    };



    const getStartAndEndDate = () => {
        if (selectedYear === "All") {
            const firstContributionDate = allCalendarData.reduce((earliest, item) => {
                const itemDate = new Date(item.date);
                return itemDate < earliest ? itemDate : earliest;
            }, new Date());
    
            return {
                startDate: firstContributionDate,
                endDate: moment().toDate() // Current date
            };
        } else {
            return {
                startDate: moment(`01-01-${selectedYear}`, "DD-MM-YYYY").toDate(),
                endDate: moment(`31-12-${selectedYear}`, "DD-MM-YYYY").toDate()
            };
        }
    };
    
    const { startDate, endDate } = getStartAndEndDate();

    
    





































    // ------- Formatting the today's date -----------------------------------------------

    const currentDay = moment().format('dddd');
    const currentDate = moment().format('MMMM Do');

    
    
    
    


    // ------ Toggling the left nav panel buttons ----------------------------------------    

    const handlePanelChange = (newState) => {
        setPanelChange(newState);
        const menu_btn = document.querySelector('.hamburger');
        const show_panel = document.querySelector('.analysis-nav-mobilepanel');
        const fixed_page = document.querySelector('body');
        const analysis_height = document.querySelector('.parent-analysis');
        menu_btn.classList.remove('is-active');
        show_panel.classList.remove('is-active');
        fixed_page.classList.remove('body-fixed');

        if (newState === 'signout') {
            localStorage.removeItem('token');
            navigate('/');
        }

        if (newState === 'goals' || newState === 'notifications' || newState === 'settings' || newState === 'help') {
            analysis_height.classList.add('filledpage');
        } else {
            analysis_height.classList.remove('filledpage');
        }
        

    };

    const isActive = (panel) => panelChange === panel ? 'active' : '';
















    // ----------- Ring progressbar settings and appearance -----------------------------------------------
    const RingProgressBar = ({ progress, size, color }) => {
        const radius = (size - 10) / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;

        return (
            <svg width={size} height={size}>
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="#ddd" strokeWidth="4" fill="none" />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 0.35s' }}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
        );
    };

































    




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
                    className={`director signout_director ${isActive(PanelState.SIGNOUT)}`} 
                    onClick={() => handlePanelChange(PanelState.SIGNOUT)}>
                    Sign out &nbsp;&nbsp; <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </p>
            </div>
        </>
    );


    

    const dashboardContent = (
        <>
            
            <div className="top-headers">
                <h1 className="welcome-header">Welcome back, {username}</h1>
                <p className="main-date">{currentDay}, {currentDate}</p>
            </div>
            <div className="three-panels-section">
                <div className="first-panel-analysis">
                    <h5 className="min-panel-h5">Contributions</h5>
                    <p className="min-panel-par">{contributions} contributions</p>
                    <h6 className="min-panel-h6">{repositories} repositories</h6>
                </div>
                <div className="second-panel-analysis">
                    <h5 className="min-panel-h5">Yesterday</h5>
                    <p className="min-panel-par">{yesterday} contribution(s)</p>
                    <h6 className="min-panel-h6">Status: &nbsp; {status}</h6>
                </div>
                <div className="third-panel-analysis">
                    <h5 className="min-panel-h5">Current Goal:</h5>
                    {
                        goalExists === "Yes" ? (
                            <div className="goal-front-container">
                                <div className="ring-container-front">
                                    <RingProgressBar
                                        progress={(progress / goalTarget) * 100}
                                        size={70}
                                        color={goal.failed ? "red" : "#4caf50"}
                                    />
                                </div>
                                <div className="goal-description">
                                    <h6>{goalName} goal</h6>
                                    <p>Progress: {progress}</p>
                                    <p>Target: {goalTarget}</p>
                                    <p>Deadline: {formattedEnd}</p>
                                </div>
                            </div> 
                        ):(
                            <>
                                <p className="min-panel-par">No goal set yet <i className="fa-solid fa-ban"></i></p>
                                <h6 className="min-panel-h6">Click <a href="#" onClick={() => handlePanelChange(PanelState.GOALS)}>here</a> to set one</h6>
                            </>
                        )
                    }
                </div>
            </div>
            <div className="github-analysis-panel">
                <div className="calendar-upper-settings">
                <p>{totalContributions} Contributions in {selectedYear === "All" ? "overall" : selectedYear}</p>
                    <select className="years-select-option" value={selectedYear} onChange={handleYearChange}>
                        <option value="All">All</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <CalendarHeatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={calendarData}
                    classForValue={value => {
                        if (!value || value.count === 0) {
                            return 'color-empty';
                        }
                        return `color-gitlab-${Math.min(value.count, 4)}`;
                    }}
                    tooltipDataAttrs={value => {
                        if (!value || !value.date) return {};
                        const date = new Date(value.date);                     
                        return {
                            'data-tooltip-id': 'my-tooltip',
                            'data-tooltip-content': `${value.count} contributions on ${date.toDateString().slice(0, 15)}`,
                        };
                    }}
                    
                    
                    showWeekdayLabels={true}
                    //onClick={value => alert(`Clicked on value with count: ${value.count}`)}
                />
                <ReactTooltip id="my-tooltip"/>
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
                        <div className="img-container">
                            <img src={profile} alt="pfp" className="profile-pic"/>
                        </div>
                        <h3>{username}</h3>
                    </div>
                    {LeftPanel}
                </div>
            </div>
            <div className="right-part-panel">
                <div className="Mobile-navbar">
                    <div className="left-part-nav">
                        <div className="burger">
                            <div className="hamburger_container">
                                <button className="hamburger" onClick={toggleMobileMenu}>
                                    <div className="bar"></div>
                                </button>
                            </div>
                        </div>
                        <h2>{username}</h2>
                    </div>
                    <div className="right-part-nav">
                        <i className="fa-solid fa-bell"></i>
                        <i className="fa-solid fa-shield-halved"></i>
                        <div className="img-container">
                            <img src={profile} alt="Pic" className="profile-pic"/>
                        </div>                            
                    </div>
                </div>
                <div className="right-wrapper">
                    {panelChange === 'dashboard' && dashboardContent}
                    {panelChange === 'badges' && <Badges TotalContributions={contributions} calendarData={calendarData} />}
                    {panelChange === 'goals' && <Goals username={username} goal={goal} calendarData={calendarData}/>}
                    {panelChange === 'notifications' && <Notifications previousFive={previousFive} username={username} dateprevious={dateprevious} daysremain={daysremain} finishline={finishline} />}
                    {panelChange === 'settings' && <Settings username={username} settings={settings}/>}
                    {panelChange === 'help' && <Help />}
                </div>
            </div>
        </div>
    );
}

export default Analysis;
