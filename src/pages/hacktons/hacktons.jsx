import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import hackathons from './hacktons.json';
import './hacktons.css';

const Hackathon = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHackathons = hackathons.filter(hackathon =>
    hackathon.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    <div className="hackathon">
      <h1>Hacktons</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="search-input"
      />
      <ul>
        <div className='hackathon-list'>
        {filteredHackathons.map(hackathon => (
          <li key={hackathon.id} className="hackathon-item">
            <Link to={`/hackthons/${hackathon.id}`} className="hackathon-link"> 
            <h2>{hackathon.title}</h2>
            </Link>
            <p>{hackathon.description}</p>
            <p><strong>Price:</strong> {hackathon.price_tag}</p>
            <p><strong>Timeline:</strong> {hackathon.timeline}</p>
            <p><strong>Dates:</strong> {hackathon.dates}</p>
            <p><strong>Partners:</strong> {hackathon.partners.join(', ')}</p>
          </li>
        ))}
        </div>
      </ul>
    </div>
    </>
  );
};

export default Hackathon;
