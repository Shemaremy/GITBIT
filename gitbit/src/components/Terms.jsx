import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import '../App.css';
import './Mods.css'

function Terms() {
    return (
        <div className="terms-container container">
            <h3>Terms and Conditions</h3>
            
            <h5>Introduction</h5>
            <p>
                Welcome to GitBit! By using this app, you agree to these Terms and Conditions, which govern your access and use of the services provided through our platform, including GitHub OAuth integration. Please read them carefully.
            </p>
            
            <h5>User Accounts</h5>
            <p>
                Users are required to log in via their GitHub account. You are responsible for maintaining the confidentiality of your login information and any activities that occur under your account. We are not responsible for any unauthorized access unless it was caused by our negligence.
            </p>
            
            <h5>Use of the Service</h5>
            <p>
                You may use GitBit only for lawful purposes and in accordance with these Terms. You agree not to misuse the platform, including but not limited to attempting to gain unauthorized access, disrupting the service, or using it to violate any applicable laws or regulations.
            </p>
            
            <h5>Data Collection and Privacy</h5>
            <p>
                When you sign in via GitHub, we collect certain public information from your GitHub profile, such as your username and contributions. We respect your privacy and only use this data for the purposes of enhancing your experience on our platform. For more information, please see our Privacy Policy.
            </p>
            
            <h5>Third-Party Services</h5>
            <p>
                Our app integrates GitHub OAuth for authentication. By using this app, you also agree to GitHub's <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>.
            </p>
            
            <h5>Liability</h5>
            <p>
                GitBit is provided on an "as is" basis, and we make no warranties or guarantees about its reliability or availability. We are not liable for any damages that may result from the use or inability to use our services.
            </p>
            
            <h5>Changes to the Terms</h5>
            <p>
                We reserve the right to modify these Terms at any time. If we make significant changes, we will notify you through the platform or by email.
            </p>
            
            <h5>Contact Us</h5>
            <p>
                If you have any questions or concerns about these Terms, please contact us at [your email].
            </p>

            <p>Last updated: [23/10/2024]</p>
        </div>
    );
}

export default Terms;
