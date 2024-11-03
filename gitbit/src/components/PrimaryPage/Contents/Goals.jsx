import React, { useState, useEffect } from "react";
import './Allcontent.css';

function Goals({username, goal}) {
    const [goals, setGoals] = useState(goal.goalName !== "None" ? [goal] : []);

    const [showGoalForm, setShowGoalForm] = useState(false);
    const [newGoalType, setNewGoalType] = useState('');
    const [newGoalTarget, setNewGoalTarget] = useState('');
    const [loading, setLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);



    // Auto tracking goals set
    useEffect(() => {
        if (goal.goalName !== "None") {
            setGoals([goal]);
        } else {
            setGoals([]);
        }
    }, [goal]);



    
    const handleAddGoal = async (username) => {
        if (newGoalType && newGoalTarget) {
            const disableButton = document.querySelector('.add-goal-button');
            disableButton.classList.add('disable');
            setIsButtonDisabled(true);
            setLoading(true);
                
            const newGoal = {
                goalId: goals.length + 1,
                goalName: newGoalType,
                Target: Number(newGoalTarget),
                Progress: 0,
                failed: false,
            };

            try {
                const response = await fetch('https://git-bit.glitch.me/api/addgoal', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, goal: newGoal }),
                });
            
                if (!response.ok) {
                    setLoading(false);
                    disableButton.classList.remove('disable');
                    setIsButtonDisabled(false);
                    throw new Error('Failed to add goal');
                }
            
                const result = await response.json();
                setLoading(false);
                disableButton.classList.remove('disable');
                setIsButtonDisabled(false);
                window.location.reload();
                
                // Update the goals state if the backend update was successful
                setGoals([...goals, newGoal]); // Assuming the backend returns the added goal
                setShowGoalForm(false);
                setNewGoalType('');
                setNewGoalTarget('');
            } catch (error) {
                console.error('Error adding goal:', error);
            }
        }
    };



    const handleDeleteGoal = async (username, goalId) => {
        const disableButton = document.querySelector('.delete-goal-button');
        disableButton.classList.add('disable');
        setIsButtonDisabled(true);
        setLoading(true);
        try {
            const response = await fetch(`https://git-bit.glitch.me/api/deletegoal`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, goalId }),
            });
    
            if (!response.ok) {
                setLoading(false);
                disableButton.classList.remove('disable');
                setIsButtonDisabled(false);
                throw new Error('Failed to delete goal');
            }
    
            
            setLoading(false);
            disableButton.classList.remove('disable');
            setIsButtonDisabled(false);


            // Update the local state by removing the goal
            setGoals(goals.filter(goal => goal.goalId !== goalId));
            window.location.reload();
        } catch (error) {
            console.error('Error deleting goal:', error);
        }
    };
    



    const handleGoalProgress = async (username, goalId) => {
        try {
            const response = await fetch(`https://git-bit.glitch.me/api/renewgoal`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, goalId }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to renew goal');
            }
    
            const updatedGoals = goals.map(goal => {
                if (goal.id === goalId) {
                    const todayProgress = Math.floor(Math.random() * goal.Target); // Randomized for testing
                    const isAchieved = todayProgress >= goal.Target;
        
                    return {
                        ...goal,
                        Progress: isAchieved ? goal.Target : todayProgress,
                        achieved: isAchieved,
                        failed: !isAchieved && todayProgress < goal.Target
                    };
                }
                return goal;
            });
            setGoals(updatedGoals);

        } catch (error) {
            console.error('Error deleting goal:', error);
        }
    };
    
    const RingProgressBar = ({ progress, size, color }) => {
        const radius = (size - 10) / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;

        return (
            <svg width={size} height={size}>
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="#ddd" strokeWidth="5" fill="none" />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 0.35s' }}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
        );
    };







    return (
        <div className="goals_panel">
            <h1>Goals</h1>
            <p>
                Set your GitHub contribution goal to track and boost your coding activity! 
                Whether you're aiming to contribute more to open-source projects or enhance your personal projects, define a 
                target to stay motivated and engaged in your development journey.
            </p>

            {goals.length === 0 ? (
                <div className="no-goals">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p>No goals set yet.</p>
                    <button onClick={() => setShowGoalForm(true)}>+ Set a New Goal</button>
                </div>
            ) : (
                <div className="goal-list">
                    {goals.map(goal => (
                        <div key={goal.goalId} className={`goal-card ${goal.failed ? 'failed' : ''}`}>
                            <p className="goal-name-header">{goal.goalName} Contributions</p>
                            <RingProgressBar
                                progress={(goal.Progress / goal.Target) * 100}
                                size={100}
                                color={goal.failed ? "red" : "#4caf50"}
                            />
                            <p>{goal.Progress}/{goal.Target} contributions</p>
                            {goal.failed && <p className="goal-status">Goal Failed</p>}
                            <div className="goal-actions">
                                {goal.failed ? (
                                    <button onClick={() => handleGoalProgress(username, goal.goalId)}>Renew Goal</button>
                                ) : (
                                    <button className="delete-goal-button" onClick={() => handleDeleteGoal(username, goal.goalId)} disabled={isButtonDisabled}>
                                        {loading ? <>Deleting &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></>
                                        : <>Delete Goal</>}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showGoalForm && (
                <div className="goal-form-modal">
                    <div className="goal-form">
                        <h3>Set a New Goal</h3>
                        <label>Goal Type:</label>
                        <select value={newGoalType} onChange={(e) => setNewGoalType(e.target.value)}>
                            <option key="select" value="">Select Goal Type</option>
                            <option key="daily" value="Daily">Daily</option>
                            <option key="weekly" value="Weekly">Weekly</option>
                            <option key="monthly" value="Monthly">Monthly</option>
                            <option key="yearly" value="Yearly">Yearly</option>
                        </select>
                        <label>Target Contributions:</label>
                        <input
                            type="number"
                            value={newGoalTarget}
                            onChange={(e) => setNewGoalTarget(e.target.value)}
                            placeholder="Enter target"
                            required
                        />
                        <button className="add-goal-button" onClick={() => handleAddGoal(username)} disabled={isButtonDisabled}>
                            {loading ? <i className="fa-solid fa-spinner fa-spin"></i>
                            : <i className="fa-solid fa-check"></i>}
                        </button>
                        <button onClick={() => setShowGoalForm(false)}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Goals;
