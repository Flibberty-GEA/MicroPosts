import 'babel-polyfill';
import { http } from './src/http';
import { ui } from './src/ui';

// Get posts on DOM

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.error(err))
}
