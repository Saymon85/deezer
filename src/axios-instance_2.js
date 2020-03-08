import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.glitch.me/https://api.deezer.com/'
});

export default instance;