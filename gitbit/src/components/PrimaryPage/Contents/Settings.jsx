import React, { useState } from "react";
import './Allcontent.css';

function Settings() {
    const [theme, setTheme] = useState('Light');
    const [notifications, setNotifications] = useState(true);
    const [weeklyReport, setWeeklyReport] = useState(false);
    const [emailGitbitNotifications, setEmailGitbitNotifications] = useState(false);


    const handleThemeChange = (e) => setTheme(e.target.value);
    const toggleNotifications = () => setNotifications(!notifications);

    return (
        <div className="settings_panel">
            <div className="settings_section">
                <h2>Theme</h2>
                <select value={theme} onChange={handleThemeChange}>
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
                <button className="settings_button">Click to save changes</button>
            </div>
        </div>
    );
}

export default Settings;
