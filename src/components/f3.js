import React, { useState } from 'react';
import logo from '../assests/Ellipse 1 (1).png';
import { useNavigate } from 'react-router-dom';
import './RecoveryPhraseScreen.css';
import hide from '../assests/eye 2 [state_default][component_svg].png';
import copy from '../assests/Icon (1).png';

function RecoveryPhraseScreen() {
  const navigate = useNavigate();
  const [isRevealed, setIsRevealed] = useState(false);

  const handleNextClick = () => {
    navigate('/f3');
  };

  const toggleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  const secretPhrase = [
    "cat", "mat", "kite", "might", 
    "sick", "pumpkin", "cat", "mat", 
    "kite", "might", "sick", "pumpkin"
  ];

  return (
    <div className="recovery-phrase-container">
      <div className="logo-container-1">
        <img src={logo} alt="Logo" className="logo-1" />
        <h1 className="brand-title-1">OCENA WALLET</h1>
      </div>
      <div className="content-container">
        <h2 className="title">Write down <br />Secret Phrase</h2>
        <p className="description">
          Write down this 12-word Secret Recovery Phrase and save it in a place that you trust and only you can access.
        </p>
        <ul className="tips-list">
          <li>Save in a password manager</li>
          <li>Store in a safe deposit box</li>
          <li>Write down and store in multiple secret places</li>
        </ul>
        <div className="phrase-container">
          {secretPhrase.map((word, index) => (
            <div key={index} >
              <div className="phrase-item"> 
              <span>{index + 1}. </span>
              <span className={`phrase-word ${isRevealed ? '' : 'hidden'}`}>{word}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons-container">
          <div className="toggle-button" onClick={toggleReveal}>
          <img src={hide} alt="hide" className='hidee' />
            {isRevealed ? 'Hide seed phrase' : 'Reveal seed phrase'}
          </div>
          <div className="copy-button">
          <img src={copy} alt="copy" />
            Copy to clipboard</div>
        </div>
        <button className="next-button-1" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default RecoveryPhraseScreen;