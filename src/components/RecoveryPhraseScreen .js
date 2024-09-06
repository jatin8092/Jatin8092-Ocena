import React from 'react';
import logo from '../assests/Ellipse 1 (1).png';
import { useNavigate } from 'react-router-dom';
import './RecoveryPhraseScreen.css';
import eyesign from '../assests/Group 28.png'

function RecoveryPhraseScreen() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/f3');
  };

  return (
    <div className="recovery-phrase-container">
      <div className="logo-container-1">
        <img src={logo} alt="Logo" className="logo-1" />
        <h1 className="brand-title-1">OCENA WALLET</h1>
      </div>
      <div className="content-container">
        <h2 className="title">Write down <br></br>Secret Phrase</h2>
        <p className="description">
        Write down this 12-word Secret Recovery Phrase and save it in a place that you trust and only you can access.
        </p>
        <ul className="tips-list">
          Tips:
          <li>Save in a password manager</li>
          <li>Store in a safe deposit box</li>
          <li>Write down and store in multiple secret places</li>
        </ul>
        <div className="warning-box">
          <div>
          <div className='eye1'> 
          <img src={eyesign} alt="eyesign" className="eyesign"/>
          </div>
          <div className="warning-text">Make sure nobody is looking</div>
          </div>
        </div>
        <button className="reveal-button" onClick={handleNextClick} >Reveal Secret Phrase</button>
      </div>
      
    </div>
    
  );
}

export default RecoveryPhraseScreen;