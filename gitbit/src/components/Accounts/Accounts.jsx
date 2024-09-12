import {React, useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './Accounts.css'
import Dialog from './Dialogs/Dialog';








function Accounts() {


  const [header, setHeader] = useState ('SignUp');

  const [autoOpenDialog, setAutoOpenDialog] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const location = useLocation();



  // Dialog boxes for the message 
  const showDialog = (message) => {
    setDialogMessage(message);
    setAutoOpenDialog(true);
    setIsDialogOpen(true);
  };





  // Switch between signin or sign up with github ---------------
  const handleSwitch = () => {
    setHeader(header === 'SignUp' ? 'Login' : 'SignUp');
  };






  // Call the github auth page onclick -------------------
  const handleCreateUser = () => {
    const disableButton = document.querySelector('.github-button');
    disableButton.classList.add('disable');
    setIsButtonDisabled(true);
    window.location.href = "https://git-bit.glitch.me/auth/github";
  };

  



  // Searching the params to fetch the message sent from server side -------------------
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const message = params.get('message');
    const username = params.get('username');
    const profile = params.get('profileImg');
    const contributions = params.get('contributions');
    const repositories = params.get('repositories');
    const yesterday = params.get('yesterday');

    localStorage.setItem('UserName', username);
    localStorage.setItem('profile', profile);
    localStorage.setItem('contributions', contributions);
    localStorage.setItem('repositories', repositories);
    localStorage.setItem('yesterday', yesterday);

    if (message === 'login-success') {
      showDialog('Authenticated successfully!');

      params.delete('message');
      params.delete('username');
      params.delete('profileImg');
      params.delete('contributions');
      params.delete('repositories');
      params.delete('yesterday');

      const newUrl = `${location.pathname}${params.toString()}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, [location]);

  











  // ---------------------- FRONT END STARTS HERE ---------------------------------------
  // ---------------------- FRONT END STARTS HERE ---------------------------------------
  // ---------------------- FRONT END STARTS HERE ---------------------------------------


  const SignUp = (
    <>
      <div className='upper-content'>
        <h1 className='getting-started-header'>Sign up to get started with GitBit</h1>
        <button className='github-button' onClick={handleCreateUser} disabled={isButtonDisabled}> 
          <i className="fa-brands fa-github"></i> &nbsp; Sign up with GitHub
        </button>
        <p className='already-par'>Already have an account? &nbsp; <a href="#" onClick={handleSwitch}>Log in</a></p>
      </div>
      <div className='lower-content'>
        <p className='terms-github'>By signing up with Gitbit, you agree to our &nbsp; <a href="">terms of service.</a></p>
      </div>
    </>
  );


  const Login = (
    <div className='upper-content'>
      <h1 className='getting-started-header'>Login with GitBit</h1>
      <button className='github-button' onClick={handleCreateUser} disabled={isButtonDisabled}> 
        <i className="fa-brands fa-github"></i> &nbsp; Login with GitHub
      </button>
      <p className='already-par'>No account? &nbsp; <a href="" onClick={handleSwitch}>Sign up</a></p>
    </div>
  );





  
  return (
    <div className='main-content'>
      {header === 'SignUp' ? SignUp : Login}
      <Dialog autoOpen={autoOpenDialog} message={dialogMessage} onClose={() => setAutoOpenDialog(false)} />
    </div>
  );
}


export default Accounts
