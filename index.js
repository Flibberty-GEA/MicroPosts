import 'babel-polyfill';
import { http } from './src/http';

// Get posts on DOM

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => console.log(data))
    .catch(err => console.err(err))
}
