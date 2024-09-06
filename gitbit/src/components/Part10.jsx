import React, {useState} from "react";
import './css/bootstrap.min.css';
import './css/style.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import '../App.css'


function Part10() {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);



    const handleEmailSend = (e) => {
        e.preventDefault();
        const disableButton = document.querySelector('.submit-button');
        disableButton.classList.add('disable');
        setDisable(true);
        setLoading(true);
        async function sendEmail() {
            try {
              const response = await fetch('https://git-bit.glitch.me/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Name, Email, Subject, Message}),
              });
          
              const data = await response.json();
              setLoading(false);
          
              if (response.ok) {
                alert('Email sent successfully');
                console.log('Success:', data);
                window.location.reload();
              } else {
                alert(`Error: ${data.message}`);
                console.error('Login failed:', data.message);
              }
            } catch (error) {
              console.error('Error:', error);
              alert('Error: Something went wrong. Please try again later');
              setLoading(false);
              window.location.reload();
            }
        }
        sendEmail();
    };







    return(
        <div className="container-xxl py-5 contact_container" id="contact">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="text-primary-gradient fw-medium">Contact Us</h5>
                    <h1 className="mb-5">Get In Touch!</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-center mb-4">
                            Get in touch with us for any inquiries related to our app showcase. Whether you have questions, feedback, or collaboration ideas, we’d love to hear from you. Simply fill out your details, and we'll respond promptly.
                            </p>
                            <form onSubmit={handleEmailSend}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" 
                                                name="Name" value={Name} 
                                                onChange={(e) => setName(e.target.value)}
                                                maxLength={20}
                                                required 
                                            />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" 
                                                name="Email" value={Email} 
                                                onChange={(e) => setEmail(e.target.value)}
                                                maxLength={80}
                                                required
                                            />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" 
                                                name="Subject" value={Subject} 
                                                onChange={(e) => setSubject(e.target.value)}
                                                maxLength={50}
                                                required
                                            />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}
                                                name="Message" 
                                                value={Message} 
                                                onChange={(e) => setMessage(e.target.value)}
                                                maxLength={1000}
                                                required 
                                            ></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary-gradient rounded-pill py-3 px-5 submit-button" type="submit" disabled={disable}>
                                            {loading ? 
                                                <> Sending ...<i className="icon2 fa fa-paper-plane fa-fade" style={{ marginLeft: 12, '--fa-animation-duration': '3s'}}></i></> : 
                                                <> Send message </>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part10;
