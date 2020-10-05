import axios from 'axios';

export default (url, method = 'get', data) => axios[method](`http://localhost:3001/${url}`, data);
