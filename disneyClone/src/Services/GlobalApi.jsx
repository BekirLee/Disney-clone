import axios from 'axios';

const apiKey = '5108b318762270ddb7ecbb982b7d9cef';
const movieDataBase = 'https://api.themoviedb.org/3';
const movieGenreBase = 'https://api.themoviedb.org/3/discover/movie?api_key=5108b318762270ddb7ecbb982b7d9cef'


const getTrendingVideos =
  axios.get(`${movieDataBase}/trending/all/day?api_key=${apiKey}`);

const getMoviesByGenre = (id) =>
  axios.get(movieGenreBase + "&with_genres=" + id);


export default {
  getTrendingVideos,
  getMoviesByGenre
};
