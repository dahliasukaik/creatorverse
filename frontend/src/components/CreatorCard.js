// src/components/CreatorCard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const placeholderImage = 'https://via.placeholder.com/150';

function CreatorCard({ creator, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this creator?");
    if (confirmed) {
      const { error } = await supabase.from('creators').delete().eq('id', creator.id);
      if (error) {
        console.error('Error deleting creator:', error);
      } else {
        onDelete(creator.id);
      }
    }
  };

  const truncateDescription = (description, maxLength) => {
    return description.length <= maxLength ? description : description.slice(0, maxLength) + '...';
  };

  const handleCardClick = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    navigate(`/creator/${creator.id}`);
  };

  return (
    <article className="card" onClick={handleCardClick}>
      <img src={creator.imageURL || placeholderImage} alt={creator.name} />
      <header>
        <h3 className="card-text">{creator.name}</h3>
      </header>
      <p className="card-text">{truncateDescription(creator.description, 100)}</p>
      <footer>
        <a href={creator.url} target="_blank" rel="noopener noreferrer" className="icon-button" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-link"></i>
          <span className="icon-text">Channel</span>
        </a>
        <Link to={`/edit/${creator.id}`} className="icon-button" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-pen"></i>
          <span className="icon-text">Edit</span>
        </Link>
        <button onClick={(e) => { e.stopPropagation(); handleDelete(); }} className="icon-button delete-button">
          <i className="fas fa-times delete-icon"></i>
        </button>
      </footer>
    </article>
  );
}

export default CreatorCard;
