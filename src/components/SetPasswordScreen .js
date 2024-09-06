import React from 'react';
import './SetPasswordScreen.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assests/Ellipse 1 (1).png';

function SetPasswordScreens() {
    const navigate = useNavigate();

    const handleNextClick = () => {
      navigate('/RecoveryPhraseScreen');
    }; 
  return (
    <div className="set-password-container">
      <div className="logo-container">
        <div>
        <h1 className="brand-title">OCENA</h1>
        </div>
        <div>
        <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="password-form">
        <h2 className="form-title">Set password</h2>
        <div>
        <div>
        <div className='Passw'>New Password</div>    
        <input type="password" className="input-field" />
        </div>
        <div>
         <div className='Passw'>Confirm Password</div>
        <input type="password" className="input-field" />
        </div>
        </div>
        <div className="button-group">
          <button className="back-button">BACK</button>
          <button className="next-button" onClick={handleNextClick}>NEXT</button>
        </div>
      </div>
    </div>
  );
}
export default SetPasswordScreens;