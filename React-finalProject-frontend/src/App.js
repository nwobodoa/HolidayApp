import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EventPage from './components/Events/EventPage';
import EventDetails from './components/EventDetails';
import About from './components/About';
import Login from './components/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');

  const handleLogin = (firstName) => {
    setIsLoggedIn(true);
    setUserFirstName(firstName);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserFirstName('');
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} userFirstName={userFirstName} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
