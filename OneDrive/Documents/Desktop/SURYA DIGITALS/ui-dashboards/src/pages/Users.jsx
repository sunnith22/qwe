import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Users.css';

// The API_URL is now pointing to your local backend server.
const API_URL = 'http://localhost:3001/get-people-list';

const Users = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This function fetches the data from the API
    const fetchPeople = async () => {
      try {
        const response = await axios.get(API_URL);
        
        // This part cleans up the location data as required
        const parsedPeople = response.data.people.map(person => ({
          ...person,
          location: person.location.replace(/\\,/g, ','),
        }));
        
        setPeople(parsedPeople);
      } catch (err) {
        console.error("Error fetching people:", err);
        setError('Failed to fetch people.');
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []); // The empty array ensures this effect runs only once on component mount

  // Conditional rendering for loading state
  if (loading) {
    return <div className="page-container"><p>Loading...</p></div>;
  }

  // Conditional rendering for error state
  if (error) {
    return <div className="page-container"><p>{error}</p></div>;
  }

  // Renders the list of users once data is successfully fetched
  return (
    <div className="page-container">
      {people.map(person => (
        <Link to={`/users/${person.id}`} key={person.id} className="user-card-link">
          <div className="user-card">
            <img src={person.profilePic} alt={person.name} className="user-avatar" />
            <div className="user-info">
              <p className="user-name">{person.name}</p>
              <p className="user-email">{person.email}</p>
            </div>
            <span className="user-arrow">&gt;</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Users;
