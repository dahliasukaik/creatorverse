// src/pages/EditCreator.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('creators').update({
      name,
      url,
      description,
      imageURL,
    }).eq('id', id);
    if (error) {
      console.error('Error updating creator:', error);
    } else {
      navigate(`/creator/${id}`);
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase.from('creators').delete().eq('id', id);
    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      navigate('/');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Creator</h2>
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
        <button type="submit">Update Creator</button>
      </form>
      <button onClick={handleDelete} style={{ color: 'red', marginTop: '20px' }}>Delete Creator</button>
    </div>
  );
}

export default EditCreator;
