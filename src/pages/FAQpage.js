// FAQpage.js

import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQpage = () => {
    return (
        <div>
            <div className="faq-container">
                <h1>FAQ Page</h1>
                <div className="faq-item">
                    <h2>What are peptide alkaloids?</h2>
                    <p>Peptide alkaloids are a class of naturally occurring compounds that consist of peptides containing alkaloid structures. They are known for their diverse biological activities and potential therapeutic uses.</p>
                </div>
                <div className="faq-item">
                    <h2>How do I search for peptide alkaloids in the database?</h2>
                    <p>You can search for peptide alkaloids using the search bar on the homepage. Enter the name, molecular formula, or other relevant identifiers to find the information you need.</p>
                </div>
                <div className="faq-item">
                    <h2>Can I download data from the database?</h2>
                    <p>Yes, you can download data from the database in various formats such as CSV or Excel. Navigate to the "Download" section of the website for more details.</p>
                </div>
                <div className="faq-item">
                    <h2>How often is the database updated?</h2>
                    <p>The database is updated regularly to include the latest research and data on peptide alkaloids. Check the "Updates" section for information on the latest additions.</p>
                </div>
                <div className="faq-item">
                    <h2>Who can I contact for more information?</h2>
                    <p>If you have any further questions or need additional information, please contact our support team at support@example.com.</p>
                </div>
                <div className="faq-item">
                    <h3>What is the Peptide Alkaloid Database?</h3>
                    <p>The Peptide Alkaloid Database is a comprehensive resource for researchers and students that contains detailed information on various peptide alkaloids, including their molecular structures, properties, and origins.</p>
                </div>
                <div className="faq-item">
                    <h3>Who can use this database?</h3>
                    <p>This database is designed for researchers, students, and professionals in fields such as organic chemistry, pharmacology, and material science. It is accessible to anyone interested in peptide alkaloids.</p>
                </div>

                <h2>Database Content</h2>
                <div className="faq-item">
                    <h3>What types of information are included in the database?</h3>
                    <p>The database includes information on the molecular structures, chemical properties, biological activities, and origins of various peptide alkaloids. It also contains identifiers such as InChIKey, SMILES, and molecular formulas.</p>
                </div>
                <div className="faq-item">
                    <h3>How is the data curated?</h3>
                    <p>The data in the database is curated from various scientific literature, research articles, and trusted chemical databases to ensure accuracy and comprehensiveness.</p>
                </div>

                <h2>Using the Database</h2>
                <div className="faq-item">
                    <h3>How do I search for a specific peptide alkaloid?</h3>
                    <p>You can search for specific peptide alkaloids using the search bar on the homepage. Additionally, you can use the advanced search feature to filter results based on various criteria such as molecular weight, functional groups, and more.</p>
                </div>
                <div className="faq-item">
                    <h3>Can I download the data from the database?</h3>
                    <p>Yes, you can download the data for selected peptide alkaloids in CSV or TSV format. Simply select the molecules you are interested in and use the download feature.</p>
                </div>
                <div className="faq-item">
                    <h3>How do I navigate the different sections of the database?</h3>
                    <p>The database is organized into different sections such as Browse, Search, and Tools. You can use the navigation bar at the top of the page to access these sections and explore the data.</p>
                </div>

                <h2>Technical Questions</h2>
                <div className="faq-item">
                    <h3>What should I do if I encounter an error?</h3>
                    <p>If you encounter any errors or issues while using the database, please contact our support team at support@peptidealkaloid.com for assistance.</p>
                </div>
                <div className="faq-item">
                    <h3>How often is the database updated?</h3>
                    <p>The database is updated regularly with new data from recent research and publications. Updates are typically released on a quarterly basis.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQpage;
