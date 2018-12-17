import React from 'react';
import './genre-list.scss';

const GenreComponent = ({ genreName }) => {
  return (
    genreName && (
      <div className="badge badge-pill badge-light chip">{genreName}</div>
    )
  );
};

export default GenreComponent;
