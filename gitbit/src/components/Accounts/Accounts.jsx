import {React, useState} from 'react'
import './Accounts.css'
import Dialog from './Dialogs/Dialog';
import * as validator from 'email-validator';

function Accounts() {


  const [header, setHeader] = useState ('SignUp');


  const handleSwitch = () => {
    setHeader(header === 'SignUp' ? 'Login' : 'SignUp');
  };



  const SignUp = (
    <>
      <div className='upper-content'>
        <h1 className='getting-started-header'>Sign up to get started with GitBit</h1>
        <button className='github-button'> 
          <i class="fa-brands fa-github"></i> &nbsp; Sign up with GitHub
        </button>
        <p className='already-par'>Already have an account? &nbsp; <a href="" onClick={handleSwitch}>Log in</a></p>
      </div>
      <div className='lower-content'>
        <p className='terms-github'>By signing up with Gitbit, you agree to our &nbsp; <a href="">terms of service.</a></p>
      </div>
    </>
  );


  const Login = (
    <div className='upper-content'>
      <h1 className='getting-started-header'>Login with GitBit</h1>
      <button className='github-button'> 
        <i class="fa-brands fa-github"></i> &nbsp; Login with GitHub
      </button>
      <p className='already-par'>No account? &nbsp; <a href="#" onClick={handleSwitch}>Sign up</a></p>
    </div>
  );

  
  return (
    <div className='main-content'>
      {header === 'SignUp' ? SignUp : Login}
    </div>
  );
}


export default Accounts
