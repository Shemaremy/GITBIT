import React, { useState } from "react";
import './Allcontent.css';

function Settings() {
    const [theme, setTheme] = useState('Light');
    const [notifications, setNotifications] = useState(true);

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
                    />
                    Enable Notifications
                </label>
            </div>

            <div className="settings_section">
                <h2>Account Preferences</h2>
                <button className="settings_button">Edit Profile</button>
                <button className="settings_button">Change Password</button>
            </div>

            <div className="settings_section">
                <h2>Privacy</h2>
                <button className="settings_button">Manage Privacy Settings</button>
            </div>
        </div>
    );
}

export default Settings;
