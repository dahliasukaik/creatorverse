// src/pages/ViewCreator.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const placeholderImage = 'https://via.placeholder.com/150';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
        if (error) {
          console.error('Error fetching creator:', error);
          setLoading(false);
          return;
        }
        setCreator(data);
        setLoading(false);
      } catch (error) {
        console.error('Unexpected error fetching creator:', error);
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="app-container">
      <h1 className='title'>View Creator</h1>
      {creator ? (
        <div className="view-creator">
          <div className="left-creator">
            <img src={creator.imageURL || placeholderImage} alt={creator.name} className="creator-image" />
            <h2>{creator.name}</h2>
            <div className="icon-buttons">
              <a href={creator.url} target="_blank" rel="noopener noreferrer" className="icon-button">
                <i className="fas fa-link"></i>
                <span className="icon-text">Channel</span>
              </a>
              <Link to={`/edit/${creator.id}`} className="icon-button">
                <i className="fas fa-pen"></i>
                <span className="icon-text">Edit</span>
              </Link>
            </div>
            <Link to="/" className="button-primary">View All Creators</Link>
          </div>
          <div className="description-container">
            <h2>Description:</h2>
            <p className="description">
              {creator.description}
            </p>
          </div>
        </div>
      ) : (
        <p className='error-text'>Creator not found</p>
      )}
    </div>
  );
}

export default ViewCreator;