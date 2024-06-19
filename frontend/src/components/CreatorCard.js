// src/components/CreatorCard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const placeholderImage = 'https://via.placeholder.com/150';

function CreatorCard({ creator, onDelete }) {
  const navigate = useNavigate();

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

  const handleCardClick = (e) => {
    // Prevent navigation if an action button is clicked
    if (e.target.closest('button') || e.target.closest('a')) return;
    navigate(`/creator/${creator.id}`);
  };

  return (
    <article className="card" onClick={handleCardClick}>
      <img src={creator.imageURL || placeholderImage} alt={creator.name} />
      <header>
        <h3 className="card-text">{creator.name}</h3>
      </header>
      <p className="card-text">{truncateDescription(creator.description, 100)}</p> {/* Truncate description to 100 characters */}
      <footer>
        <a href={creator.url} target="_blank" rel="noopener noreferrer" className="icon-button" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-link"></i>
        </a>
        
        <Link to={`/edit/${creator.id}`} className="icon-button" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-pen"></i>
        </Link>
        <button onClick={(e) => { e.stopPropagation(); handleDelete(); }} className="icon-button delete-button">
          <i className="fas fa-times"></i>
        </button>
      </footer>
    </article>
  );
}

export default CreatorCard;
