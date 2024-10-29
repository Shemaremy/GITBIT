import React, { useState } from "react";
import "./Allcontent.css";

function Notifications() {
    const [notifications, setNotifications] = useState([
        { id: 1, type: "Contribution", message: "You contributed to 'repo-name'", isRead: false, time: "2 hrs ago" },
        { id: 2, type: "Achievement", message: "You've reached 100 contributions!", isRead: false, time: "1 day ago" },
        { id: 3, type: "Reminder", message: "Daily contribution reminder", isRead: true, time: "3 days ago" }
    ]);

    const markAsRead = (id) => {
        setNotifications((prev) =>
            prev.map((notif) =>
                notif.id === id ? { ...notif, isRead: true } : notif
            )
        );
    };

    return (
        <div className="notification_panel">
            <h1>Notifications</h1>
            <div className="notification_filters">
                <button>All</button>
                <button>Unread</button>
                <button>Read</button>
            </div>
            <div className="notification_list">
                {notifications.length ? (
                    notifications.map((notif) => (
                        <div
                            key={notif.id}
                            className={`notification_item ${notif.isRead ? "read" : "unread"}`}
                        >
                            <span className={`notification_type ${notif.type.toLowerCase()}`}>
                                {notif.type}
                            </span>
                            <p className="notification_message">{notif.message}</p>
                            <span className="notification_time">{notif.time}</span>
                            {!notif.isRead && (
                                <button
                                    className="mark_as_read"
                                    onClick={() => markAsRead(notif.id)}
                                >
                                    Mark as Read
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="empty_notifications">No notifications yet!</div>
                )}
            </div>
        </div>
    );
}

export default Notifications;
