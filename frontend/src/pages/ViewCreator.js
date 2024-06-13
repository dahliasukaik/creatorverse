// src/pages/ViewCreator.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
      setLoading(false);
    };

    fetchCreator();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase.from('creators').delete().eq('id', id);
    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      navigate('/');
    }
  };

  if (loading) return <p>Loading...</p>;

  if (!creator) return <p>Content creator not found.</p>;

  return (
    <div>
      <h2>{creator.name}</h2>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <Link to={`/edit/${creator.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ViewCreator;
