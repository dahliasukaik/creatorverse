// src/pages/AddCreator.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('creators').insert([
        { name, url, description, imageURL }
      ]);
      if (error) {
        console.error('Error adding creator:', error);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Unexpected error adding creator:', error);
    }
  };


  return (
    <body>
    <form onSubmit={handleSubmit}>
      
      <h1>Add New Creator</h1>
      <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50} // Set the maximum length to 50 characters
            required
      />
      <input 
        type="url" 
        placeholder="URL" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        maxLength={2048}
        required
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        maxLength={500}
        required
      />
      <input 
        type="url" 
        placeholder="Image URL (optional)" 
        value={imageURL} 
        onChange={(e) => setImageURL(e.target.value)} 
        maxLength={2048}
        required
      />
      <button type="submit">Add Creator</button>
    </form>
    <div className="button-container">
        <Link to="/" className="button-outline">View All Creators</Link>
    </div>
    </body>
    
   
  );
}

export default AddCreator;
