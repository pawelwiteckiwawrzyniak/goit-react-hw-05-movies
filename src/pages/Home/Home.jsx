import { useState, useEffect } from 'react';

import MoviesHome from 'components/MoviesHome/MoviesHome';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/trending/movie/day`;
  const apiKey = '?api_key=72798596a23321893a7ef47e798d0f72';

  useEffect(() => {
    fetchTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch(url + apiKey);
      const data = await response.json();
      const trendingMovies = [...data.results];
      setMovies(trendingMovies);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={css.title}>
      <h1>Trending today</h1>
      <MoviesHome movies={movies} />
    </div>
  );
};

export default Home;
