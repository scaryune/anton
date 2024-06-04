import React from 'react';
import { useParams } from 'react-router-dom';
import hackathons from './hacktons.json'; // Import the hackathons data

const HackathonDetails = () => {
  const { id } = useParams(); // Get the id from URL params

  // Find the hackathon with the specified id
  const hackathon = hackathons.find(h => h.id === parseInt(id));

  if (!hackathon) {
    return <div>Hackathon not found</div>;
  }

  return (
    <div>
      <h2>{hackathon.title}</h2>
      <p>{hackathon.description}</p>
      <p><strong>Price:</strong> {hackathon.price_tag}</p>
      <p><strong>Timeline:</strong> {hackathon.timeline}</p>
      <p><strong>Dates:</strong> {hackathon.dates}</p>
      <p><strong>Partners:</strong> {hackathon.partners.join(', ')}</p>
    </div>
  );
};

export default HackathonDetails;
