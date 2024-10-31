import React, { useState } from "react";
import "./Allcontent.css";

function Notifications() {
    const [notifications, setNotifications] = useState([
        { id: 1, type: "Contribution", message: "You contributed to 'repo-name'", isRead: false, time: "2 hrs ago" },
        { id: 2, type: "Achievement", message: "You've reached 100 contributions!", isRead: false, time: "1 day ago" },
        { id: 3, type: "Reminder", message: "Daily contribution reminder", isRead: true, time: "3 days ago" }
    ]);

    const [filter, setFilter] = useState("all");

    const markAsRead = (id) => {
        setNotifications((prev) =>
            prev.map((notif) =>
                notif.id === id ? { ...notif, isRead: true } : notif
            )
        );
    };

    const getFilteredNotifications = () => {
        if (filter === "unread") return notifications.filter(notif => !notif.isRead);
        if (filter === "read") return notifications.filter(notif => notif.isRead);
        return notifications;
    };

    return (
        <div className="notification_panel">
            <h1>Notifications</h1>
            <div className="notification_filters">
                <button
                    onClick={() => setFilter("all")}
                    className={filter === "all" ? "active" : ""}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter("unread")}
                    className={filter === "unread" ? "active" : ""}
                >
                    Unread
                </button>
                <button
                    onClick={() => setFilter("read")}
                    className={filter === "read" ? "active" : ""}
                >
                    Read
                </button>
            </div>
            <div className="notification_list">
                {getFilteredNotifications().length ? (
                    getFilteredNotifications().map((notif) => (
                        <div
                            key={notif.id}
                            className={`notification_item ${notif.isRead ? "read" : "unread"}`}
                        >
                            <span className={`notification_type ${notif.type.toLowerCase()}`}>
                                {notif.type}
                            </span>
                            <p className="notification_message">{notif.message}</p>
                            <span className="notification_time">{notif.time}</span> &nbsp;
                            {!notif.isRead && (
                                <button
                                    className="mark_as_read"
                                    onClick={() => markAsRead(notif.id)}
                                >
                                    Read
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
