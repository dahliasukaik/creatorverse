// src/components/CreatorCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const placeholderImage = 'https://via.placeholder.com/150';

function CreatorCard({ creator, onDelete }) {
  const handleDelete = async () => {
    const { error } = await supabase.from('creators').delete().eq('id', creator.id);
    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      onDelete(creator.id);
    }
  };
  // Function to truncate the description
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + '...';
  };
  return (
    <article className="card">
      <img src={creator.imageURL || placeholderImage} alt={creator.name} />
        <header>
          <h3 className="card-text">{creator.name}</h3>
        </header>
        <p className="card-text">{truncateDescription(creator.description, 100)}</p> {/* Truncate description to 100 characters */}

      
      <footer>
        <a href={creator.url} target="_blank" rel="noopener noreferrer" className="icon-button">
          <i className="fas fa-link"></i>
        </a>
        <Link to={`/creator/${creator.id}`} className="icon-button">
          <i className="fas fa-eye"></i>
        </Link>
        <Link to={`/edit/${creator.id}`} className="icon-button">
          <i className="fas fa-pen"></i>
        </Link>
        <button onClick={handleDelete} className="icon-button delete-button">
          <i className="fas fa-times"></i>
        </button>
      </footer>
    </article>
  );
}

export default CreatorCard;

