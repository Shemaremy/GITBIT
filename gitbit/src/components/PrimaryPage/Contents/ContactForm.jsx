import React, { useState } from "react";
import './Allcontent.css';

function ContactForm({ onBack }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        issue: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        alert("Your issue has been submitted. We’ll get back to you soon!");
    };

    return (
        <div className="contact-form">
            <h2>Contact Support</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Describe your issue:
                    <textarea name="issue" value={formData.issue} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
            <button className="back-button" onClick={onBack}>Back to Help Center</button>
        </div>
    );
}

export default ContactForm;
