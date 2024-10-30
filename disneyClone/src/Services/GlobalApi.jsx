import axios from 'axios';

const movieDataBase = 'https://api.themoviedb.org/3';
const apiKey = '5108b318762270ddb7ecbb982b7d9cef';

const getTrendingVideos = () => {
  return axios.get(`${movieDataBase}/trending/all/day?api_key=${apiKey}`);
};

export default { getTrendingVideos };
