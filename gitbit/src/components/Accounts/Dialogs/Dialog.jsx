import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Dialog.css";



function Dialog ({ autoOpen = true, message = '' }) {

  const [modal, setModal] = useState(autoOpen);
  const navigate = useNavigate();


  // Closing the modal
  const closeModal = () => {
    if (message.includes('successfully')) {
      navigate('/analysis');
      //setModal(!modal);
    }
  };


  useEffect(() => {
    if (autoOpen) {
      setModal(true); 
    }
  }, [autoOpen, message]); 


  return (
      <>
        {modal && (
          <div className='Dialog-parent-panel'>
            <div className="overlay"></div>
            <div className="dialog-content">
              <i className="fa-regular fa-circle-check dialog-mark"></i>
              <h2 className="message-header">{message ? message : "Hello Modal"}</h2>
              <button className="confirm-modal" onClick={closeModal}> OK </button>
            </div>
          </div>
        )}
      </>
  );
}

export default Dialog;