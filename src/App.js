// App.js

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/Searchpage";
import ContactPage from "./pages/Contactpage";
import HelpPage from "./pages/Helppage";
import BrowsePage from "./pages/BrowsePage";

// newly added pages in update 1
import DownloadPage from "./pages/Downloadpage";
import LoginPage from "./pages/Loginpage";
import NotFoundPage from "./pages/Notfoundpage";
import ToolsPage from "./pages/Toolspage";
import FAQPage from "./pages/FAQpage";

// newly added pages in update 2
import MoleculeDetails from "./components/Molecules/MoleculeDetails";
import MoleculeCard from "./components/Molecules/MoleculeCard";
import Pagination from "./components/Pagination/Pagination";
import FilterBar from "./components/Search/FilterBar";
import SearchBar from "./components/Search/SearchBar";

// newly added pages in update 3 (browsepage)
import Carbon from "./pages/Browsepage/Carbon";
import MolecularWeight from "./pages/Browsepage/MolecularWeight";
import Source from "./pages/Browsepage/Source";
import QED from "./pages/Browsepage/QED";
import Lipinski from "./pages/Browsepage/Lipinski";

// newly added pages in update 4
import Account from "./pages/Account";
import AdvancedSearch from "./pages/Browsepage/Advancedsearch";
import AmideCount from "./pages/Browsepage/Amidecount";
import Sidebar from "./pages/Browsepage/sidebar";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/browse/advanced" element={<AdvancedSearch />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/browse/carbon" element={<Carbon />} />
          <Route path="/browse/molecularweight" element={<MolecularWeight />} />
          <Route path="/browse/source" element={<Source />} />
          <Route path="/browse/qed" element={<QED />} />
          <Route path="/browse/lipinski" element={<Lipinski />} />
          <Route path="/browse/amidecount" element={<AmideCount/>} />
          <Route path="/browse/sidebar" element={<Sidebar/>} />
          <Route path="/molecule-details" element={<MoleculeDetails />} />
          <Route path="/pagination/Pagination" element={<Pagination />} />
          <Route path="/Pagination" element={<Pagination/>} />
          <Route path="/Account" element={<Account />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
