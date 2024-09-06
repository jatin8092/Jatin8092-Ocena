import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../assests/Ellipse 1 (1).png';
function WalletScreen() {
  const navigate = useNavigate();

  const handleCreateNewWallet = () => {
    navigate('/SetPasswordScreen'); 
  };

  return (
    <div className="wallet-container">
      <div>
      <div className="wallet-logo">
        <div className='logs' >
        <img src={logo} alt="Logo" />
        </div>
        <div className='logs' > 
        <h1 className="wallet-title">Ocena Wallet</h1>
        </div>

      </div>
      <div className='create-button'>
        <div>
        <button className="wallet-button primary" onClick={handleCreateNewWallet} >Create a new wallet</button>
        </div>
        <div>
        <button className="wallet-button secondary">Import an existing wallet</button>
        </div>
      </div>
      </div>
    </div>
  );
}
export default WalletScreen;