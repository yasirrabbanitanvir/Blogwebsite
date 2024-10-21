import React from 'react';

const Card = ({ img, title, p }) => {
    return (
        <div className="card">
            <img src={img} alt={title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{p}</p>
                <a href="#" className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};

export default Card;
