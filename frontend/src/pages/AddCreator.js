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
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <h1 className='title'>Add New Creator</h1>
        <h3 className='subtitle'> Name </h3>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={50}
          required
        />
        <h3 className='subtitle'> URL </h3>
        <div className='info-text'>Provide at least one of the creator's social media links</div>
        <input
          placeholder="URL"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          maxLength={2048}
          required
        />
        <h3 className='subtitle'> Description </h3>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={500}
          required
        />
        <h3 className='subtitle'> Image URL</h3>
        <div className='info-text'>(Optional) Provide a link to an image of your creator. Be sure to include the http://</div>
        <input
          placeholder="Image URL"
          type="url"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          maxLength={2048}
        />
        <button type="submit" className="button-primary">Add Creator</button>
      </form>
      <Link to="/" className="button-outline">Exit</Link>
    </div>
  );
}

export default AddCreator;