import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import lab1 from '../images/lab1.jpg';
import lab2 from '../images/lab2.jpg';
import niser from '../images/NISER.png';

const ContactPage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="heading">Welcome to the Alkaloid Database Contact Page</h2>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          Feel free to contact us if you have questions or want to report a bug or suggest a new feature.
          Please send your feedback via e-mail: databasepeptaloid@gmail.com or please fill out this
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHTKaoIduL6IRCyqNIyh59V1e-r3YRHsI9V7k-i8gzyZHbSg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}> form</a>.
        </p>

        {/* Add the Google Form iframe here */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHTKaoIduL6IRCyqNIyh59V1e-r3YRHsI9V7k-i8gzyZHbSg/viewform?embedded=true"
          width="100%"
          height="2500" // Adjust the height to fit the entire form
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        >
          Loading…
        </iframe>

        <h2 className="heading">About the Institution</h2>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          The National Institute of Science Education and Research (NISER), Bhubaneswar, is a distinguished institution in India dedicated to the creation, dissemination, and preservation of knowledge in fundamental sciences. The institute aims to foster a passion for scientific inquiry among the nation's youth. NISER is affiliated with the Homi Bhabha National Institute (HBNI), Mumbai, a deemed research university that oversees academic programs at institutions under the Department of Atomic Energy (DAE). For more information, visit the <a href="https://www.niser.ac.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>NISER website</a>.
        </p>
        <img src={niser} alt="Database Architecture" className="image" style={{ width: '100%' }}/>

        <h2 className="heading">About the Lab</h2>
        <img src={lab1} alt="Database Architecture" className="image" style={{ width: '70%' }}/>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          From left to right: Ms. Soma Mandal, Mr. Siva Lokesh B, Dr. Badireenath Konkimalla, Mr. Rajat Choudhary, Mr. Sibabrata Biswal, Mr. Bibhu Prasad Behera, Ms. Hemangini Naik.
        </p>
        <img src={lab2} alt="Database Architecture" className="image" style={{ width: '70%' }}/>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          From left to right: Mr. Siddhant Mahato, Mr. Bibhu Prasad Behera, Mr. Rajat Choudhary, Mr. Siva Lokesh B, Dr. Badireenath Konkimalla, Mr. Soumalya Chakraborty, Ms. Soma Mandal, Mr. Sibabrata Biswal.
        </p>

        {/* Add more content here */}
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
