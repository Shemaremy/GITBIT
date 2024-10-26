import React, { useState } from "react";
import './Allcontent.css';

function Goals() {
    const [goals, setGoals] = useState([]);
    const [showGoalForm, setShowGoalForm] = useState(false);
    const [newGoalType, setNewGoalType] = useState('');
    const [newGoalTarget, setNewGoalTarget] = useState('');








    const handleAddGoal = () => {
        if (newGoalType && newGoalTarget) {
            const newGoal = {
                id: goals.length + 1,
                type: newGoalType,
                target: Number(newGoalTarget),
                progress: 0,
                failed: false,
            };
            setGoals([...goals, newGoal]);
            setShowGoalForm(false);
            setNewGoalType('');
            setNewGoalTarget('');
        }
    };

    const handleDeleteGoal = (goalId) => {
        setGoals(goals.filter(goal => goal.id !== goalId));
    };

    const handleGoalProgress = (goalId) => {
        const updatedGoals = goals.map(goal => {
            if (goal.id === goalId) {
                const todayProgress = Math.floor(Math.random() * goal.target); // Randomized for testing
                const isAchieved = todayProgress >= goal.target;
    
                return {
                    ...goal,
                    progress: isAchieved ? goal.target : todayProgress,
                    achieved: isAchieved,
                    failed: !isAchieved && todayProgress < goal.target
                };
            }
            return goal;
        });
        
        setGoals(updatedGoals);
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
                        <div key={goal.id} className={`goal-card ${goal.failed ? 'failed' : ''}`}>
                            <p className="goal-name-header">{goal.type} Contributions</p>
                            <RingProgressBar
                                progress={(goal.progress / goal.target) * 100}
                                size={100}
                                color={goal.failed ? "red" : "#4caf50"}
                            />
                            <p>{goal.progress}/{goal.target} contributions</p>
                            {goal.failed && <p className="goal-status">Goal Failed</p>}
                            <div className="goal-actions">
                                {goal.failed ? (
                                    <button onClick={() => handleGoalProgress(goal.id)}>Renew Goal</button>
                                ) : (
                                    <button onClick={() => handleDeleteGoal(goal.id)}>Delete Goal</button>
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
                            <option value="">Select Goal Type</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                        <label>Target Contributions:</label>
                        <input
                            type="number"
                            value={newGoalTarget}
                            onChange={(e) => setNewGoalTarget(e.target.value)}
                            placeholder="Enter target"
                        />
                        <button onClick={handleAddGoal}><i className="fa-solid fa-check"></i></button>
                        <button onClick={() => setShowGoalForm(false)}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Goals;
