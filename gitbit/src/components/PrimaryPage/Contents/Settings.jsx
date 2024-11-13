import React, { useState, useEffect } from "react";
import './Allcontent.css';

function Settings({ username, settings }) {


    const [theme, setTheme] = useState();
    const [notifications, setNotifications] = useState(settings.pageNotifications);
    const [weeklyReport, setWeeklyReport] = useState(settings.emailReports);
    const [emailGitbitNotifications, setEmailGitbitNotifications] = useState(settings.emailReminders);
    const [loading, setLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);


    // Set initial theme based on settings.darkMode
    useEffect(() => {
        setTheme(settings.darkMode ? "Dark" : "Light");
    }, [settings.darkMode]);
    
    

    
    // Handling toggle between dark and light modes
    const handleThemeChange = (e) => {
        setTheme(e.target.value)
        if (theme === "Dark") {
            alert("Dark")
        } else {
            alert("Light")
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
                    <option value="Light">Light <i className="fa-solid fa-sun"></i></option>
                    <option value="Dark">Dark <i className="fa-solid fa-moon"></i></option>
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
