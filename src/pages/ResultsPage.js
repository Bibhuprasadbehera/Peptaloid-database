import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const payload = location.state?.payload;
      if (!payload) {
        setError("No search payload found");
        setLoading(false);
        return;
      }
      try {
        console.log("Fetching with payload:", payload);  // Debug log
        const response = await axios.post('http://127.0.0.1:8000/api/molecules/search', payload);
        setResults(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setError("Failed to fetch results. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [location.state]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Search Results</h2>
      <div className="results">
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                {Object.entries(result).map(([key, value]) => (
                  <div key={key}><strong>{key}:</strong> {value}</div>
                ))}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;