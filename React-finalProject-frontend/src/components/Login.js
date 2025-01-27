
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login({ onLogin }) {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    fName: '',
    lName: '',
    email: '',
  });

  const [passcode, setPasscode] = useState('');
  const [showPasscodeForm, setShowPasscodeForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleLogin(event) {
    event.preventDefault();
    setErrorMessage("");

    if (!validateEmail(contact.email)) {
      setErrorMessage("Please enter a valid email address.");
    } else if (contact.fName === "" || contact.lName === "") {
      setErrorMessage(
        errorMessage
          ? errorMessage + " First name and last name are required."
          : "First name and last name are required."
      );
    } else {
      setShowPasscodeForm(true);
    }
  }

  function handlePasscodeChange(event) {
    setPasscode(event.target.value);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  

  function handleSubmitPasscode(event) {
    event.preventDefault();
    if (passcode === 'Group7') {
      onLogin(contact.fName); // Call the onLogin function from props
      navigate('/');
    } else {
      setErrorMessage('Incorrect passcode. Please try again.');
    }
  }

  return (
    <div className="login-outer-container">
      <div className="login-container">
        <h1>
          Welcome {contact.fName} {contact.lName}
        </h1>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <br />
        {!showPasscodeForm ? (
          <form>
            <input
              onChange={handleChange}
              name="fName"
              value={contact.fName}
              placeholder="First Name"
              className="login-input"
              required
            />
            <input
              onChange={handleChange}
              name="lName"
              value={contact.lName}
              placeholder="Last Name"
              className="login-input"
              required
            />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={contact.email}
              placeholder="Email"
              className="login-input"
              required
            />
            <br />
            <button onClick={() => setShowPasscodeForm(true)} className="login-button">
              Login
            </button>
          </form>
        ) : (
          <form>
            <input
              onChange={(event) => setPasscode(event.target.value)}
              type="text"
              name="passcode"
              value={passcode}
              placeholder="One-Time Passcode"
              className="login-input"
              required
            />
            <br />
            <button onClick={handleSubmitPasscode} className="login-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
