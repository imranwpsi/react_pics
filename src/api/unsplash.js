import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MZUiG7dlVYDzbBfbYIbHZ9_sfbKQEM9Q2LrPaldFadU'
    }
});