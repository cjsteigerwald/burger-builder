import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-d1735.firebaseio.com/',
});

export default instance;