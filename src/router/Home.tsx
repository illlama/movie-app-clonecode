import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import Movie from '../components/Movie';

type Props = {
  id: number;
  year: number;
  title: string;
  summary: string;
  medium_cover_image: string;
  genres: Array<string>;
};
const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
        .then(res => {
          const data = res.data.data.movies;
          setMovies(data);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">List is loading... </span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie: Props) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
