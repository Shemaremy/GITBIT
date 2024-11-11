import React, { useState, useEffect } from "react";
import "./Allcontent.css";

function Notifications({previousFive, username, dateprevious, daysremain, finishline}) {



    const Finishline = finishline.toDateString();

    const [filter, setFilter] = useState("all");
    


    // -------- Notifications container --------------------------------------------------------------
    const [notifications, setNotifications] = useState([
        { id: 1, type: "Contribution", message: "Its been 5 days without contributing", isRead: false, time: dateprevious, display: false },
        { id: 2, type: "Reminder", message: "Less than 3 days remain to achieve your goal!", isRead: false, time: Finishline, display: false }
    ]);
    




    /* -------- Mark as read function  ----------------------------------------------------------------
    const markAsRead = async (id, type, username) => {
        setNotifications((prev) =>
            prev.map((notif) =>
                notif.id === id ? { ...notif, isRead: true } : notif
            )
        );

        try {
            const response = await fetch('https://git-bit.glitch.me/api/updatenotification', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, type }),
            });

            if (!response.ok) {
                throw new Error('Failed to read notification');
            } else {
                alert("Read success")
            }
        } catch (error) {
            console.error('Error reading notification:', error);
        }
    };
    */



    // -------- User filtering manually function --------------------------------------------------------
    const getFilteredNotifications = () => {
        const visibleNotifications = notifications.filter(notif => notif.display);
        if (filter === "unread") return visibleNotifications.filter(notif => !notif.isRead);
        if (filter === "read") return visibleNotifications.filter(notif => notif.isRead);
        return visibleNotifications;
    };
    


    /* ---------- Deleting the notification ---------------------------------------------------------------
    const deleteNotification = (id) => {
        setNotifications((prev) =>
            prev.map((notif) =>
                notif.id === id ? { ...notif, display: false } : notif
            )
        );
    };
    */





    // ---------- Check & display commits notification, then add it to database ---------------------------------------------------------------
    const checkCommits = async (username) => {
        if (previousFive === 0) {
            notifications[0].display = true;
            try {
                const response = await fetch('https://git-bit.glitch.me/api/addnotification', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, notification: notifications[0] }),
                });
    
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to add notification');
                }

                const result = await response.json();
                //console.log(result.message);
            
            } catch (error) {
                console.error('Error adding notification:', error);
            }    
        }
    }; checkCommits(username);



    // ---------- Check & display reminder notification, then add it to database ---------------------------------------------------------------
    const checkReminder = async (username) => {
        if (daysremain && daysremain <= 3) {
            notifications[1].display = true;
            try {
                const response = await fetch('https://git-bit.glitch.me/api/addnotification', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, notification: notifications[1] }),
                });
    
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to add notification');
                }

                const result = await response.json();
                //console.log(result.message);
            
            } catch (error) {
                console.error('Error adding notification:', error);
            }    
        }
    }; checkReminder(username);

    


    return (
        <div className="notification_panel">
            <h1>Notifications</h1>
            {/* <div className="notification_filters">
                <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}> All </button>
                <button onClick={() => setFilter("unread")} className={filter === "unread" ? "active" : ""}> Unread </button>
                <button onClick={() => setFilter("read")} className={filter === "read" ? "active" : ""}> Read </button>
            </div> */}
            <div className="notification_list">
                {getFilteredNotifications().length ? (
                    getFilteredNotifications().map((notif) => (
                        <div key={notif.id} className={`notification_item ${notif.isRead ? "read" : "unread"}`}>
                            <span className={`notification_type ${notif.type.toLowerCase()}`}> {notif.type} </span>
                            <p className="notification_message">{notif.message}</p>
                            <span className="notification_time">{notif.time}</span> &nbsp;
                            {/* {!notif.isRead && (
                                <button
                                    className="mark_as_read"
                                    onClick={() => markAsRead(notif.id, notif.type, username)}
                                >
                                    Read
                                </button>
                            )}
                            <p className="del-notification" onClick={() => deleteNotification(notif.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </p> */}
                        </div>
                    ))
                ) : (
                    <div className="empty_notifications">You got no notifications !</div>
                )}
            </div>
        </div>
    );
}

export default Notifications;
