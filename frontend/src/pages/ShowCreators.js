// src/pages/ShowCreators.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import { Link } from 'react-router-dom';

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
      setLoading(false);
    };

    fetchCreators();
  }, []);

  const handleDelete = (id) => {
    setCreators((prevCreators) => prevCreators.filter((creator) => creator.id !== id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Content Creators</h1>
      <Link to="/add"><button>Add New Creator</button></Link>
      <div>
        {creators.length > 0 ? (
          creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} onDelete={handleDelete} />
          ))
        ) : (
          <p>No content creators found.</p>
        )}
      </div>
    </div>
  );
}

export default ShowCreators;
