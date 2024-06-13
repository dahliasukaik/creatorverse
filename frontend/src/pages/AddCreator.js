// src/pages/AddCreator.js
import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

function AddCreator() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('creators').insert([{ name, url, description, imageURL }]);
    if (error) {
      console.error('Error adding creator:', error);
    } else {
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Creator</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="url" 
        placeholder="URL" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <input 
        type="url" 
        placeholder="Image URL (optional)" 
        value={imageURL} 
        onChange={(e) => setImageURL(e.target.value)} 
      />
      <button type="submit">Add Creator</button>
    </form>
  );
}

export default AddCreator;
