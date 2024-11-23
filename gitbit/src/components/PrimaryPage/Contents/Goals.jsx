import React, { useState, useEffect } from "react";
import moment from 'moment';
import './Allcontent.css';

function Goals({username, goal, calendarData}) {

    const [goals, setGoals] = useState(goal.goalName !== "None" ? [goal] : []);
    const [showGoalForm, setShowGoalForm] = useState(false);
    const [newGoalType, setNewGoalType] = useState('');
    const [newGoalTarget, setNewGoalTarget] = useState('');
    const [loading, setLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);



    

    // --------- Auto tracking goals set --------------------------------------------------------------
    useEffect(() => {
        if (goal.goalName !== "None") {
            setGoals([goal]);
        } else {
            setGoals([]);
        }
    }, [goal]);



    //---------- Adding the goal in both database and front end ----------------------------------------
    const handleAddGoal = async (username) => {
        if (newGoalType && newGoalTarget) {
            const disableButton = document.querySelector('.add-goal-button');
            disableButton.classList.add('disable');
            setIsButtonDisabled(true);
            setLoading(true);

            // Set start and end dates based on goal type
            const startDate = moment().format('YYYY-MM-DD');
            let endDate;
            if (newGoalType === 'Weekly') {
                endDate = moment().add(7, 'days').format('YYYY-MM-DD');
            } else if (newGoalType === 'Monthly') {
                endDate = moment().add(1, 'month').format('YYYY-MM-DD');
            } else if (newGoalType === 'Yearly') {
                endDate = moment().add(1, 'year').format('YYYY-MM-DD');
            }
                
            const newGoal = {
                goalId: goals.length + 1,
                goalName: newGoalType,
                Target: Number(newGoalTarget),
                Progress: 0,
                failed: false,
                startDate,
                endDate
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



    //---------- Deleting the goal in both database and front end ----------------------------------------
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
    


    //---------- Handling progress in both database and front end ----------------------------------------
    const handleGoalProgress = async (username, goalId) => {
        try {
            const goal = goals.find(g => g.goalId === goalId);
            if (!goal) return;
    

            // Finding the current date the calendar has to help us find counts in between
            const filteredContributions = calendarData.flat();
            const latestDate = calendarData.flat()
            .reduce((latest, current) => {
                const currentDate = new Date(current.date);
                return currentDate > latest ? currentDate : latest;
            }, new Date(0));

            const currentDate = latestDate.toISOString().slice(0, 10);
            const goalStartDate = new Date(goal.startDate).toISOString().split('T')[0];
            let goalEndDate = new Date(goal.endDate).toISOString().split('T')[0];

            
            const finishLine = goalEndDate;

            if (currentDate >= goalEndDate) {
                goalEndDate = finishLine;
            } else {
                goalEndDate = currentDate;
            }
            

    

            // Find contributions in range from start to current date
            const contributionsInRange = filteredContributions.filter(contribution => {
                const contributionDate = new Date(contribution.date).toISOString().slice(0, 10);
                return contributionDate >= goalStartDate && contributionDate <= goalEndDate;
            });
            
            let totalProgress = contributionsInRange.reduce((sum, contribution) => sum + contribution.count, 0);   


            totalProgress = Math.min(totalProgress, goal.Target);
            
            const isAchieved = totalProgress >= goal.Target && currentDate <= finishLine;
            const isFailed = !isAchieved && currentDate > finishLine;



            
    
            // Update the specific goal's progress
            const updatedGoals = goals.map(g => 
                g.goalId === goalId ? { ...g, Progress: totalProgress, achieved: isAchieved, failed: isFailed } : g
            );
    
            setGoals(updatedGoals);

        } catch (error) {
            console.error('Error updating goal progress:', error);
        }
    };
    
    
    const [progressUpdated, setProgressUpdated] = useState(false);

    useEffect(() => {
        if (username && goals.length > 0 && calendarData && !progressUpdated) {
            const goalId = goals[0].goalId; // specify the goalId you want
            handleGoalProgress(username, goalId);
            setProgressUpdated(true); // Set to true after first update
        }
    }, [username, goals, calendarData, progressUpdated]);
    
    


    // ----------- Ring progressbar settings and appearance -----------------------------------------------
    const RingProgressBar = ({ progress, size, color, achieved }) => {
        const radius = (size - 10) / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;

        return (
            <div className="achieved-container">
                {achieved && (
                    <p className="achieved-icon">
                        <i className="fa-solid fa-check fa-beat"></i>
                    </p>
                )}
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
            </div>
        );
    };







    // -------------- Rendering data and goal setting form -------------------------------------------------
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
                        <div key={goal.goalId} className={`goal-card ${goal.failed ? 'failed' : goal.achieved ? "achieved" : ''}`}>
                            <p className="goal-name-header">{goal.goalName} Contributions</p>
                            <p>
                                Goal set on {goal.startDate ? new Date(goal.startDate).toLocaleDateString('en-GB') : 'N/A'}&nbsp;
                                and to be achieved before {goal.endDate ? new Date(goal.endDate).toLocaleDateString('en-GB') : 'N/A'}&nbsp;
                                with target of {goal.Target}
                            </p>
                            <RingProgressBar
                                progress={(goal.Progress / goal.Target) * 100}
                                size={100}
                                color={goal.failed ? "red" : goal.achieved ? "#3fe745" : "#4caf50"}
                                achieved={goal.achieved}
                            />
                            <p>{goal.Progress}/{goal.Target} contributions</p>
                            {goal.achieved && <p className="goal-status achieved">🎉 Goal Achieved!</p>}
                            {goal.failed && <p className="goal-status failed">Goal Failed 🙁</p>}
                            <div className="goal-actions">
                                <button className="delete-goal-button" onClick={() => handleDeleteGoal(username, goal.goalId)} disabled={isButtonDisabled}>
                                    {loading ? <>Deleting &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></>
                                    : <>Delete Goal</>}
                                </button>                                
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
