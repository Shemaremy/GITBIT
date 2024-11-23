import React, { useState, useEffect } from "react";
import './Allcontent.css';

function Settings({ username, settings }) {

    const currentTheme = localStorage.getItem('currentTheme');
    //console.log(currentTheme)


    const [theme, setTheme] = useState();
    const [notifications, setNotifications] = useState(settings.pageNotifications);
    const [weeklyReport, setWeeklyReport] = useState(settings.emailReports);
    const [emailGitbitNotifications, setEmailGitbitNotifications] = useState(settings.emailReminders);
    const [loading, setLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);


    // Set initial theme based on settings.darkMode
    useEffect(() => {
        if (currentTheme === null) {
            //console.log("Its null")
            setTheme(settings.darkMode ? "Dark" : "Light");
        } else {
            setTheme(currentTheme);
            //console.log(theme)
        }
    }, [settings.darkMode]);
    
    

    
    // Handling toggle between dark and light modes
    const handleThemeChange = (e) => {
        const selectedTheme = e.target.value;
        setTheme(selectedTheme);
        localStorage.setItem('currentTheme', selectedTheme);
    
        const darkTheme = document.querySelector('.parent-analysis');
        const darkTheme2 = document.querySelector('.right-wrapper');
        if (selectedTheme === "Dark") {
            darkTheme.classList.add('dark');
            darkTheme2.classList.add('dark');
        } else {
            darkTheme.classList.remove('dark');
            darkTheme2.classList.remove('dark');
        }
    };
    


    const toggleNotifications = () => setNotifications(!notifications);




    // ----------- Save changes on click ----------------------------------------------------------
    // ----------- Save changes on click ----------------------------------------------------------
    const handleSaveChanges = async () => {
        const disableButton = document.querySelector('.settings_button');
        disableButton.classList.add('disable');
        setIsButtonDisabled(true);
        setLoading(true);

        try {
            const response = await fetch('https://git-bit.glitch.me/api/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    darkMode: theme === 'Dark',
                    pageNotifications: notifications,
                    emailReports: weeklyReport,
                    emailReminders: emailGitbitNotifications,
                }),
            });
    
            if (response.ok) {
                localStorage.removeItem('currentTheme');
                setLoading(false);
                disableButton.classList.remove('disable');
                setIsButtonDisabled(false);
                const message = await response.text();
                window.location.reload();
            } else {
                alert("Failed to save settings");
                setLoading(false)
            }
        } catch (error) {
            console.error("Error updating settings:", error);
            alert("An error occurred while saving settings");
        }
    };


    


    return (
        <div className="settings_panel">
            <div className="settings_section">
                <h2>Theme</h2>
                <select value={theme} onChange={handleThemeChange} className="select-theme">
                    <option value="Light">Light</option>
                    <option value="Dark">Dark</option>
                </select>
            </div>

            <div className="settings_section">
                <h2>Notifications</h2>
                <label>
                    <input 
                        type="checkbox" 
                        checked={notifications} 
                        onChange={toggleNotifications} 
                    /> &nbsp;
                    Enable page notifications
                </label>
            </div>

            <div className="settings_section">
                <h2>Account Preferences</h2>
                <label>
                    <input 
                        type="checkbox" 
                        checked={weeklyReport} 
                        onChange={() => setWeeklyReport(!weeklyReport)} 
                    /> &nbsp;
                    Enable receiving weekly report on your progress and achievements
                </label> <br/>
                <label>
                    <input 
                        type="checkbox" 
                        checked={emailGitbitNotifications} 
                        onChange={() => setEmailGitbitNotifications(!emailGitbitNotifications)} 
                    /> &nbsp;
                    Enable getting Gitbit notifications and reminders via your email
                </label>
            </div>

            <div className="settings_section">
                <h2>Save changes</h2>
                <button className="settings_button" onClick={handleSaveChanges} disabled={isButtonDisabled}>               
                    {loading ? <>Saving changes &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></>
                    : 'Click to save changes'}
                </button>
            </div>
        </div>
    );
}

export default Settings;
