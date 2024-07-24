// Account.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Footer from '../components/Footer'; // Import Footer

const Account = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/');
  };

  return ( 
    <div>
      <div className="accountcontainer">
        <form className="account-form" onSubmit={handleSubmit}>
          <div className="accountinput-container"> {/* Add this div */}
            <h2 className="subheading">Create an Account</h2>
            <input type="email" placeholder="Email (work/school)" className="accountinput-field" required />
            <input type="text" placeholder="Full Name" className="accountinput-field" required />
            <input type="text" placeholder="Company/University" className="accountinput-field" required />
            <input type="text" placeholder="Job Title" className="accountinput-field" required />
            <input type="password" placeholder="Password (min. 6 characters)" className="accountinput-field" required minLength={6} />
          </div>
          <button type="submit" className="create-account-button">Create Account</button>
        </form>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Account;