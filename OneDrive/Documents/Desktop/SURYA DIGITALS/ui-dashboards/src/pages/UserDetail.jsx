import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './UserDetail.css';

// The API URL is now correctly pointing to your local backend server.
const API_URL = 'http://localhost:3001/get-people-list';

const UserDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attachedPhoto, setAttachedPhoto] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // In a real app, you might fetch a single user like /get-person/:id
        // For this project, we fetch the whole list and find the matching user.
        const response = await axios.get(API_URL);
        
        const foundPerson = response.data.people.find(p => p.id.toString() === id);
        
        if (foundPerson) {
          setPerson({
            ...foundPerson,
            location: foundPerson.location.replace(/\\,/g, ','),
          });
        } else {
          setError('User not found.');
        }
      } catch (err) {
        console.error("Error fetching user detail:", err);
        setError('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();

    // Check localStorage for a previously saved photo for this user
    const savedPhoto = localStorage.getItem(`user_photo_${id}`);
    if (savedPhoto) {
      setAttachedPhoto(savedPhoto);
    }
  }, [id]);

  const handlePhotoAttach = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setAttachedPhoto(base64String);
        // Persist the photo in localStorage so it stays on refresh
        localStorage.setItem(`user_photo_${id}`, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) return <div className="page-container"><p>Loading...</p></div>;
  if (error) return <div className="page-container"><p>{error}</p></div>;
  if (!person) return <div className="page-container"><p>User not found.</p></div>;

  return (
    <div className="page-container">
      <div className="detail-card">
        <Link to="/users" className="back-link">&larr; Back to list</Link>
        <div className="detail-header">
          <img src={person.profilePic} alt={person.name} />
          <h2>{person.name}</h2>
          <p>{person.email}</p>
        </div>
        <div className="detail-body">
          <div className="detail-item"><span>Status</span><span className={`status ${person.status.toLowerCase()}`}>{person.status}</span></div>
          <div className="detail-item"><span>Gender</span><span>{person.gender}</span></div>
          <div className="detail-item"><span>Date of Birth</span><span>{person.dob}</span></div>
          <div className="detail-item"><span>Location</span><span>{person.location}</span></div>
        </div>

        <div className="photo-attachment">
          <h3>Attach Photo</h3>
          {attachedPhoto ? (
            <img src={attachedPhoto} alt="Attached" className="attached-photo" />
          ) : (
            <p>No photo attached.</p>
          )}
          <input type="file" id="photo-upload" accept="image/*" onChange={handlePhotoAttach} style={{ display: 'none' }} />
          <label htmlFor="photo-upload" className="upload-btn">Choose or Change Photo</label>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
