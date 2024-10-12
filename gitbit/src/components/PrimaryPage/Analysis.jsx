import React, { useState, useEffect } from "react";
import { ResponsiveCalendar } from '@nivo/calendar';
import Part1 from "../Part1";
import moment from 'moment';
import './Analysis.css';






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
























    useEffect(() => {
        const fetchUserData = async () => {

            const token = localStorage.getItem('token');
            const storedYesterday = localStorage.getItem("yesterday");

            if (!token) {
                alert('Access token not found');
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
                    alert(JSON.stringify(data));
                    throw new Error('Failed to fetch user data');
                } else {
                    //console.log(data.calendar);
                    setUsername(data.username);
                    setProfile(data.profile);
                    setContributions(data.contributions.toLocaleString());
                    setRepositories(data.repositories);
                    setYesterday(parseInt(storedYesterday, 10));

                    
                    const formattedContributions = data.calendar.map(week => 
                        Object.values(week.contributionDays).map(day => ({
                            day: moment(day.date).format('YYYY-MM-DD'),
                            value: day.contributionCount,
                            color: day.contributionCount === 0 ? '#ffffff' : day.color,
                        }))
                    ).flat();                    
                    setCalendarData(formattedContributions);
                                    
                    if (yesterday < 1) {
                        setStatus(<i className="fa-solid fa-thumbs-down"></i>);
                    }

                    setLoading(false); 
    
                }
    
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
        fetchUserData();
    }, []);


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







































    // ------- Formatting the today's date -----------------------------------------------

    const currentDay = moment().format('dddd');
    const currentDate = moment().format('MMMM Do');

    
    
    
    


    // ------ Toggling the left nav panel buttons ----------------------------------------    

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
                        <div className="img-container">
                            <img src={profile} alt="pfp" className="profile-pic"/>
                        </div>
                        <h3>{username}</h3>
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
                            <p className="min-panel-par">{yesterday} contributions</p>
                            <h6 className="min-panel-h6">Status: &nbsp; {status}</h6>
                        </div>
                        <div className="third-panel-analysis">
                            <h5 className="min-panel-h5">Current badge</h5>
                            <p className="min-panel-par">No badge earned <i className="fa-solid fa-ban"></i></p>
                            <h6 className="min-panel-h6">Click <a href="#">here</a> to earn one</h6>
                        </div>
                    </div>
                    <div className="github-analysis-panel">
                        <ResponsiveCalendar
                            data={calendarData}
                            from="2024-01-01"
                            to="2024-10-12"
                            emptyColor="#ffffff"
                            //colors={['#abe4dac7', '#61cdbb', '#e8c1a0', '#f47560']}
                            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                            yearSpacing={30}
                            monthBorderColor="#ffffff"
                            dayBorderWidth={1}
                            dayBorderColor="#ffffff"
                            legends={[
                                {
                                    anchor: 'bottom-right',
                                    direction: 'row',
                                    translateY: 36,
                                    itemCount: 4,
                                    itemWidth: 42,
                                    itemHeight: 36,
                                    itemsSpacing: 14,
                                    itemDirection: 'right-to-left',
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analysis;
