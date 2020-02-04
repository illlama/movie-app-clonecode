/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

type Props = {
  id?: number;
  key?: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
  genres: Array<string>;
};
const Movie: React.FC<Props> = ({
  id,
  year,
  title,
  summary,
  poster,
  genres,
}) => {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
