

// src/pages/ShowCreators.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination'; // Import the Pagination component

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [filteredCreators, setFilteredCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const creatorsPerPage = 6;

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase.from('creators').select('*');
        if (error) throw error;
        setCreators(data);
        setFilteredCreators(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  useEffect(() => {
    const filtered = creators.filter((creator) =>
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCreators(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, creators]);

  const handleDelete = (id) => {
    setCreators((prevCreators) => prevCreators.filter((creator) => creator.id !== id));
  };

  // Get current creators
  const indexOfLastCreator = currentPage * creatorsPerPage;
  const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
  const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app-container">
      <h1 className="title">Welcome to Creatorverse!</h1>
      <h3 className='subtitle'> Search: </h3>
      <input
        type="text"
        placeholder="Search creators..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div>
        <Link to="/add" className="button-primary">Add New Creator</Link>
      </div>
      <div className="grid">
        {currentCreators.length > 0 ? (
          currentCreators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} onDelete={handleDelete} />
          ))
        ) : (
          <p className="error-text">No content creators...</p>
        )}
      </div>
      <Pagination
        creatorsPerPage={creatorsPerPage}
        totalCreators={filteredCreators.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default ShowCreators;