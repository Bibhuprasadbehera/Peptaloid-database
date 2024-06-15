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
      <div className="container">
        <h2 className="heading">Create an Account</h2>
        <form className="account-form" onSubmit={handleSubmit}>
          <div className="input-container"> {/* Add this div */}
            <input type="email" placeholder="Email (work/school)" className="input-field" required />
            <input type="text" placeholder="Full Name" className="input-field" required />
            <input type="text" placeholder="Company/University" className="input-field" required />
            <input type="text" placeholder="What does your organization do?" className="input-field" required />
            <input type="text" placeholder="Job Title" className="input-field" required />
            <input type="password" placeholder="Password (min. 6 characters)" className="input-field" required minLength={6} />
          </div>
          <button type="submit" className="submit-button">Create Account</button>
        </form>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Account;