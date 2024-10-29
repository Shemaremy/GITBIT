import React, { useState } from "react";
import ContactForm from "./ContactForm";
import './Allcontent.css';

function Help() {

    const [faqOpen, setFaqOpen] = useState({});
    const [showContactForm, setShowContactForm] = useState(false);

    const toggleFAQ = (index) => {
        setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const handleShowContactForm = () => {
        setShowContactForm(true);
    };

    const handleBackToHelp = () => {
        setShowContactForm(false);
    };


    return (
        <div className="help-panel">
            {showContactForm ? (
                // Render ContactForm if showContactForm is true
                <ContactForm onBack={handleBackToHelp} />
            ) : (

                <>
                    <div className="search-bar">
                        <input type="text" placeholder="Search for help topics..." />
                        <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className="faq-section">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-item" onClick={() => toggleFAQ(1)}>
                            <div className="faq-question">
                                <span>How do earn Gitbit badges?</span>
                                {faqOpen[1] ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </div>
                            {faqOpen[1] && <div className="faq-answer">You can connect your GitHub account by navigating to Settings and selecting "Connect GitHub". Follow the prompts to authorize.</div>}
                        </div>
                        <div className="faq-item" onClick={() => toggleFAQ(2)}>
                            <div className="faq-question">
                                <span>How do I set up GitBit goals and how to achieve them?</span>
                                {faqOpen[2] ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </div>
                            {faqOpen[2] && <div className="faq-answer">Make sure you have authorized the app and that your GitHub contributions are public. Updates occur every 24 hours.</div>}
                        </div>
                        <div className="faq-item" onClick={() => toggleFAQ(3)}>
                            <div className="faq-question">
                                <span>Why is my contribution data not updating?</span>
                                {faqOpen[3] ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </div>
                            {faqOpen[3] && <div className="faq-answer">Make sure you have authorized the app and that your GitHub contributions are public. Updates occur every 24 hours.</div>}
                        </div>
                        <div className="faq-item" onClick={() => toggleFAQ(4)}>
                            <div className="faq-question">
                                <span>All my github history data is not showing</span>
                                {faqOpen[4] ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </div>
                            {faqOpen[4] && <div className="faq-answer">Make sure you have authorized the app and that your GitHub contributions are public. Updates occur every 24 hours.</div>}
                        </div>
                    </div>

                    {/* <div className="guides-section">
                        <h2><i class="fa-solid fa-book-open"></i> User Guide & Tutorials</h2>
                        <ul>
                            <li><a href="#!">Setting up your account</a></li>
                            <li><a href="#!">Tracking contributions</a></li>
                            <li><a href="#!">Customizing your dashboard</a></li>
                        </ul>
                    </div> */}

                    <div className="contact-support">
                        <h2><i className="fa-regular fa-envelope"></i> Contact Support</h2>
                        <p>
                            If you need further assistance, feel free to 
                            <a href="mailto:remyshema20@.com"> email our support team</a> 
                            or reach out via our &nbsp;
                            <span className="contact-form-link" onClick={handleShowContactForm}>contact form</span>.
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
