// src/components/CreatorCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

function CreatorCard({ creator, onDelete }) {
  const handleDelete = async () => {
    const { error } = await supabase.from('creators').delete().eq('id', creator.id);
    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      onDelete(creator.id);
    }
  };

  return (
    <div className="card">
      <h3>{creator.name}</h3>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <Link to={`/creator/${creator.id}`}>View Details</Link>
      <Link to={`/edit/${creator.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CreatorCard;
