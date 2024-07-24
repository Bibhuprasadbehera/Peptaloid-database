import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import peptaloid from '../images/logo2.png';
import Footer from '../components/Footer'; // Import Footer

const Loginpage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/Account');
  };

  return (
    <div>
      <div className="container">
        <h2 className="heading">Welcome to the Alkaloid Database Login Page</h2>
        <h3 className="subheading">Log in to access the Alkaloid Database</h3>

        <form className="login-form">
          <img src={peptaloid} alt="Peptaloid Logo" className="logo" style={{ marginBottom: '10px' }} />
          <div className="input-container">
            <input type="text" placeholder="Email"className="accountinput-field" />
            <input type="password" placeholder="Password"className="accountinput-field" />
          </div>
          <button type="submit" className="submit-button" >Login</button>
          <button type="button" className="create-account-button" onClick={handleCreateAccount} >
            Create an Account
          </button>
        </form>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Loginpage;
