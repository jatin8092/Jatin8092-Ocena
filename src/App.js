import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SetPasswordScreen   from './components/SetPasswordScreen ';
import RecoveryPhraseScreen from './components/RecoveryPhraseScreen ';
import F3 from './components/f3';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/SetPasswordScreen" element={<SetPasswordScreen/>} />
        <Route path="/RecoveryPhraseScreen" element={<RecoveryPhraseScreen  />} />
        <Route path="/f3" element={<F3  />} />

      </Routes>
    </Router>
  );
};
export default App;