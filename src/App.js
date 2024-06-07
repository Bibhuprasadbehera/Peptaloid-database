// App.js or wherever your Router component is
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import SearchPage from './pages/Searchpage';
import ContactPage from './pages/Contactpage';
import HelpPage from './pages/Helppage';
import BrowsePage from './pages/Browsepage';

// newly added pages
import DownloadPage from './pages/Downloadpage';
import LoginPage from './pages/Loginpage';
import NotFoundPage from './pages/Notfoundpage';
import ToolsPage from './pages/Toolspage';
import FAQPage from './pages/FAQpage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/download" element={<DownloadPage/>} />
          <Route path="/faq" element={<FAQPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/tools" element={<ToolsPage/>} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route element={NotFoundPage} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;