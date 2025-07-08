import React from 'react';

const Card = ({ img, title, p }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={img}
        alt={title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{p}</p>
        <a href="#" className="btn btn-primary mt-auto align-self-start">Read More</a>
      </div>
    </div>
  );
};

export default Card;
