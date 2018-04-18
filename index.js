import 'babel-polyfill';
import { http } from './src/http';
import { ui } from './src/ui';

// Get posts on DOM
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.error(err))
}

function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  // Create Post
  http.post('http://localhost:3000/posts', data)
    .then(() => {
      getPosts();
    })
    .catch(err => {
      console.error(err)
    });

}