import React, { useState } from "react";
import ContactForm from "./ContactForm";
import './Allcontent.css';

function Help() {

    const [faqOpen, setFaqOpen] = useState({});
    const [showContactForm, setShowContactForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleFAQ = (index) => {
        setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const handleShowContactForm = () => {
        setShowContactForm(true);
    };

    const handleBackToHelp = () => {
        setShowContactForm(false);
    };


    const faqItems = [
        { 
            question: "How do I earn Gitbit badges?", 
            answer: "You can earn GitBit badges by navigating on the badges panel, and try completing a task to achieve the badge. Once the challenge is achieved, GitBit will automatically unlock your badge."
        },
        { 
            question: "How do I set up GitBit goals and how to achieve them?", 
            answers: [
                "Go to the goals panel and set a goal. You will only be able to set up one personal goal, and when achieved you will be notified.",
                "In order to achieve them, you will have to select type of goal you want to set. The target you set is the total number of contributions you must achieve within the range period"
            ]
        },
        { 
            question: "Why is my contribution data not updating?", 
            answer: "Try refreshing the page to see if updated data is visible. If the issue persists, try logging out and log back in. And if neither of these are working, try again after some time." 
        },
        { 
            question: "All my Github history data is not showing", 
            answers: [
                "Make sure all your Github repositories are public. GitBit only displays public repositories due to privacy policy.",
                "Github API only allows to fetch calendar data within the year range period. So this means that the graph will only show you 53 weeks calendar data from github"
            ] 
        }
    ];
    
    
    const filteredFAQs = faqItems.filter(item => {
        const questionMatch = item.question.toLowerCase().includes(searchQuery);
        const answerMatch = item.answer?.toLowerCase().includes(searchQuery) || 
        (item.answers && item.answers.some(answer => answer.toLowerCase().includes(searchQuery)));
        return questionMatch || answerMatch;
    });
    
    


    return (
        <div className="help-panel">
            {showContactForm ? (
                // Render ContactForm if showContactForm is true
                <ContactForm onBack={handleBackToHelp} />
            ) : (

                <>
                    <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search for help topics..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} 
                    />
                        <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className="faq-section">
                        <h2>Frequently Asked Questions</h2>
                        {filteredFAQs.map((item, index) => (
                            <div className="faq-item" key={index} onClick={() => toggleFAQ(index)}>
                                <div className="faq-question">
                                    <span>{item.question}</span>
                                    {faqOpen[index] ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                                </div>
                                {faqOpen[index] && <div className="faq-answer">
                                    <ul>
                                        {Array.isArray(item.answers) 
                                            ? item.answers.map((answer, i) => <li key={i}>{answer}</li>)
                                            : <li>{item.answer}</li>
                                        }
                                    </ul>
                                </div>}
                            </div>
                        ))}
                    </div>

                    <div className="contact-support">
                        <h2><i className="fa-regular fa-envelope"></i> Contact Support</h2>
                        <p>
                            If you need further assistance, feel free to <a href="mailto:remyshema20@.com"> email our support team </a> 
                            or reach out via our &nbsp; <span className="contact-form-link" onClick={handleShowContactForm}>contact form</span>.
                        </p>
                    </div>

                    <div className="resource-links">
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer">GitHub Documentation</a></li>
                            <li><a href="https://docs.github.com/en/rest" target="_blank" rel="noopener noreferrer">GitHub API</a></li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

export default Help;
