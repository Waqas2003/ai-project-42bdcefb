import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t" />
      <div className="p-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;