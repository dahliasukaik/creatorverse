// src/pages/EditCreator.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
        if (error) {
          console.error('Error fetching creator:', error);
          setLoading(false);
          return;
        }
        if (data) {
          setName(data.name);
          setUrl(data.url);
          setDescription(data.description);
          setImageURL(data.imageURL);
        }
        setLoading(false);
      } catch (error) {
        console.error('Unexpected error fetching creator:', error);
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('creators').update({
        name,
        url,
        description,
        imageURL
      }).eq('id', id);
      if (error) {
        console.error('Error updating creator:', error);
      } else {
        navigate(`/creator/${id}`);
      }
    } catch (error) {
      console.error('Unexpected error updating creator:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase.from('creators').delete().eq('id', id);
      if (error) {
        console.error('Error deleting creator:', error);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Unexpected error deleting creator:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <body>
      <form onSubmit={handleSubmit}>
        <h1>Edit Creator</h1>
        <label>
          <h3 className='subtitle'> Name </h3>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50} // Set the maximum length to 50 characters
            required
          />
        </label>
        <label>
          <h3 className='subtitle'> URL </h3>
          <input
            placeholder="URL" 
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            maxLength={2048}
            required
            
          />
        </label>
        <label>
          <h3 className='subtitle'> Description </h3>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500}
            required
          />
        </label>
        <label>
          <h3 className='subtitle'> Image URL (optional) </h3>
          <input
            placeholder="Image URL (optional)"
            type="url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            maxLength={2048}
            required
          />
        </label>
        <button type="submit" className="button-primary">Update Creator</button>
      </form>
      <div className="delete-button">
        <button onClick={handleDelete}  className='delete-button'>Delete Creator</button>
      </div>
      <Link to="/" className="button-outline">Exit</Link>
      
      
    </body>
  );
}

export default EditCreator;

