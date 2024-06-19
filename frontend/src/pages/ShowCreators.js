// src/pages/ShowCreators.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import { Link } from 'react-router-dom';

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase.from('creators').select('*');
        if (error) throw error;
        setCreators(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  const handleDelete = (id) => {
    setCreators((prevCreators) => prevCreators.filter((creator) => creator.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app-container">
      <h1 className="title">Welcome to Creatorverse!</h1>
      <div className='button-home'> 
        <Link to="/add" className='button-primary'>Add New Creator</Link> 
      </div>
      <div className="grid">
        {creators.length > 0 ? (
          creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} onDelete={handleDelete} />
          ))
        ) : (
          <p className='error-text'>No content creators...</p>
        )}
      </div>
    </div>
  );
}

export default ShowCreators;
